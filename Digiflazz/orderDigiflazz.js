import axios from "axios";
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import { ref_id } from "../data/ref_idGenerator.js";
import { hashData } from "../data/dataToHash.js";
import Transaction from "../Database/trx_Schema.js";

// Panggil konfigurasi dotenv
dotenv.config();

export const OrderDigiflazz = async (transactionID ,skuCode, dataCostumer , verify , statusPembayaran , buyerName) => {

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env['APP_EMAILUSER_ADMIN'],
          pass: process.env['APP_EMAILPASSWORD_ADMIN'],
        },
      });

    const refID = ref_id();
    const hashing = await hashData(refID);
    const Verification = verify
    const CostumerData = dataCostumer
    
    const url = `${process.env['APP_URL_DIGIFLAZZ']}/transaction`;
    const data = {
        username: process.env['APP_USERNAME_DIGIFLAZZ'],
        buyer_sku_code: skuCode,
        customer_no: CostumerData,
        ref_id: refID,
        testing: true,
        sign: hashing
    };

    if (Verification === process.env['APP_VERIFICATION_ORDER']) {
    let hasil = null;
        try {
          const transaction = await Transaction.findOne({ transaction_id: transactionID });
            const response = await axios.post(url, data);
            const resData = response.data.data;

            if (transaction) {
                // Tambahkan ref_id ke dokumen tersebut
                transaction.buyerName = buyerName
                transaction.statusMetodePembayaran = statusPembayaran    
                transaction.ref_id = resData.ref_id;
                transaction.status = resData.status;
                transaction.message = resData.message;
                transaction.sn = resData.sn;
                transaction.customer_no = resData.customer_no;
                transaction.telegram = resData.tele;
                
                // Simpan perubahan dokumen ke dalam database
                await transaction.save();
                console.log('ref_id berhasil ditambahkan.');
              } else {
                console.log('Dokumen dengan transaction_id yang diberikan tidak ditemukan.');
              }
    
            const datas = `
            <p>ACCEPTED Data: ${JSON.stringify(resData)}</p>
            <p>ACCEPTED Data: ${resData.status}</p>
            <p>ACCEPTED Data: ${resData.buyer_last_saldo}</p>
            
            `
            const mailOptions = {
                from: 'rozistoreemail@gmail.com',
                to: 'akungamesaya123456@gmail.com', // Ganti dengan alamat admin yang sesuai
                subject: "ORDER ACCEPTED!",
                html: datas,
              };
              await transporter.sendMail(mailOptions);
    
              return JSON.stringify(resData);
        } catch (error) {
            hasil = await error.response.data
            const datas = `<p>ERROR Data: ${JSON.stringify(hasil)}</p>`
            const mailOptions = {
                from: 'rozistoreemail@gmail.com',
                to: 'akungamesaya123456@gmail.com', // Ganti dengan alamat admin yang sesuai
                subject: "ERROR REPORT!",
                html: datas,
              };
            if (hasil !== null) {
                await transporter.sendMail(mailOptions);
            }
            return { error: "error"};
        }

    } else {
        return "unauthorized! From Internal"
    }

}