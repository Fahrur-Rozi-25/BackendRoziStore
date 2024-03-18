import { DecryptAutomated } from "../utils/encrypt.js";
import { createInvoice } from "../xendit/createInvoices.js";


export const createInvoicesXendit = async (req, res) => {
    const response = req.body;
    if (response.data !== null) {
        const decrpyt = await DecryptAutomated(response.data)
        if (decrpyt.verify === process.env['APP_PAYMENT_KEY']) {
        const invoice = await createInvoice(decrpyt.TRXID, decrpyt.price , decrpyt.items , response.data)
        res.status(201).json({url : invoice.invoiceUrl})
        } else {
        res.status(403).json({message: "Unauth!"})
        }
    } else {
        res.status(403).json({message: "ERROR!"})
    }

}