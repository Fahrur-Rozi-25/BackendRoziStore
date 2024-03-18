import Express from "express";
import { DataOrders } from "../controllers/receiveDataOrders.js";
import { createOrder } from "../controllers/createOrder.js";
import { DataOrdersMobile } from "../controllers/receiveDataOrdersMobile.js";
import { deleteOrder } from "../controllers/deleteOrder.js";
import { createInvoicesXendit } from "../controllers/createInvoicesXendit.js";
import { CallbackInvoicesXendit } from "../webhooks/XenditInvoices.js";

const router = Express.Router()

router.post('/senddataorder' , DataOrders)
router.post('/senddataorderFromMobile' , DataOrdersMobile)
router.post('/postOrder' , createOrder)
router.post('/payment/invoices/callback', CallbackInvoicesXendit)
router.post('/createInvoicesXendit', createInvoicesXendit)
router.delete('/deleteOrder/:id',deleteOrder)
// router.delete('/deleteTRX')

export default router;
