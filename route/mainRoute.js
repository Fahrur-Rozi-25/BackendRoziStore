import Express from "express";
import { DataOrders } from "../controllers/receiveDataOrders.js";

const router = Express.Router()

router.post('/senddataorder' , DataOrders)

export default router;
