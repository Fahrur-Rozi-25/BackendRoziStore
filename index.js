import { getAPI } from "./getPriceList.js";
import dotenv from 'dotenv';
import axios from "axios";

// Panggil konfigurasi dotenv
dotenv.config();


// getAPI()



const Order = async () => {
    let hasil = null;
    
    const url = `${process.env.APP_URL_DIGIFLAZZ}/transaction`;
    const data = {
        username: process.env.APP_USERNAME_DIGIFLAZZ,
        buyer_sku_code: "xld10",
        customer_no: "087800001230",
        ref_id: "test1",
        testing: true,
        sign: "740b00a1b8784e028cc8078edf66d12b"
    };


    try {
        const response = await axios.post(url, data);
        const resData = response.data.data;
        console.log(resData);
    } catch (error) {
        hasil = error.response.data
        console.log(hasil);
    }
}

Order()