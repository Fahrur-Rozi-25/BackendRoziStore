import axios from "axios";
import dotenv from 'dotenv';
import { ref_id } from "../data/ref_idGenerator.js";
import { hashData } from "../data/dataToHash.js";

// Panggil konfigurasi dotenv
dotenv.config();

export const Order = async () => {

    let hasil = null;

    const refID = ref_id();
    const hashing = await hashData(refID);
    const Verification = 'p'
    const CostumerData = "087800001230"
    const skuCode = "xld10"
    const transactionID = "2"
    
    const url = `${process.env['APP_URL_DIGIFLAZZ']}/transaction`;
    const data = {
        username: process.env['APP_USERNAME_DIGIFLAZZ'],
        buyer_sku_code: skuCode,
        customer_no: CostumerData,
        ref_id: refID,
        testing: true,
        sign: hashing
    };

    console.log(data);
    console.log(hashing);


    try {
        const response = await axios.post(url, data);
        const resData = response.data.data;
        console.log(resData);
    } catch (error) {
        hasil = await error.response.data
        if (hasil !== null) {
            console.log(hasil);
        }
    }
}