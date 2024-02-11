import Express from "express";
import { DataOrders } from "../controllers/receiveDataOrders.js";
import { createOrder } from "../controllers/createOrder.js";
import { DataOrdersMobile } from "../controllers/receiveDataOrdersMobile.js";
import { deleteOrder } from "../controllers/deleteOrder.js";

const router = Express.Router()

router.post('/senddataorder' , DataOrders)
router.post('/senddataorderFromMobile' , DataOrdersMobile)
router.post('/postOrder' , createOrder)
router.delete('/deleteOrder/:id',deleteOrder)


export default router;
