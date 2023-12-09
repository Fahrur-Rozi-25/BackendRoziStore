// import { getAPI } from "./getPriceList.js";
import express from "express";
import axios from "axios";
import cors from "cors"
import bodyParser from "body-parser";
import dotenv from 'dotenv';
import router from "./route/mainRoute.js";
import connectDB from "./Database/connectToDB.js";

// Panggil konfigurasi dotenv
dotenv.config();

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }));
app.use(router)

connectDB()



app.get("/" , (req , res) => {
    res.json({message: "This Server Is Alive!"})
})


app.listen(3000, () => {
    console.log("Server Up!");
})
