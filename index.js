// import { getAPI } from "./getPriceList.js";
import express from "express";
import axios from "axios";
import dotenv from 'dotenv';
import { ref_id } from "./data/ref_idGenerator.js";
import { Order } from "./Digiflazz/orderDigiflazz.js";

// Panggil konfigurasi dotenv
dotenv.config();
const app = express()



// getAPI()

Order()