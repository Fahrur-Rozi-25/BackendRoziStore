// import { getAPI } from "./getPriceList.js";
import express from "express";
import cors from "cors"
import bodyParser from "body-parser";
import dotenv from 'dotenv';
import router from "./route/mainRoute.js";
import connectDB from "./Database/connectToDB.js";
import { Decrypt, decrypt12 } from "./utils/encrypt.js";

// Panggil konfigurasi dotenv
dotenv.config();

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }));
app.use(router)

connectDB()

// const data = '3950b39f04ecbdee7974f3916228608b:4RwZHseMMzrR7qe4v/z4kvhwg5nfbYPaX7PbTXh+Nbq87dFmcRrrfFirpNYRZWOmMx+8mc0DC7YDLpYjdsMfg1P+52cj68PDoLKPyEBomPrTT4yecef0pWSvnlgvD0pe2IYkxvpABye4KfiAPto9FDWIFkr146R8JbOfrI1R4KFgG7qeRPc/RdlWnBGu68roEkFMP80XsUoXoy35HJoWhGPLudCUrbzUaxQWlO/cFvg='
// const key = 'fahrurrozi25012006Rozistore25126'; // Pastikan kunci memiliki panjang 32 byte (256 bit)

// const decryptedText = Decrypt(data, key);
// console.log(decryptedText);


app.get("/" , (req , res) => {
    res.json({message: "This Server Is Already!"})
})


app.listen(3001, () => {
    console.log("Server Up!");
})
