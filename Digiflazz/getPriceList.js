import axios from "axios"
import dotenv from 'dotenv';

// Panggil konfigurasi dotenv
dotenv.config();



export const getAPI = async () => {
    const datas = {
        "cmd" : "prepaid",
        "username": process.env.APP_USERNAME_DIGIFLAZZ,
      }

      console.log(datas);
    
      try {
        const response = await axios.post(`${process.env.APP_URL_DIGIFLAZZ}/price-list` , datas)
        const dataRes = await response.data.data
        console.log(dataRes);
      } catch (error) {
        console.log(error);
      }
}

