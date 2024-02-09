import Express from "express";
import { DataOrders } from "../controllers/receiveDataOrders.js";
import { createOrder } from "../controllers/createOrder.js";

const router = Express.Router()

router.post('/senddataorder' , DataOrders)
router.post('/postOrder' , createOrder)



export default router;
