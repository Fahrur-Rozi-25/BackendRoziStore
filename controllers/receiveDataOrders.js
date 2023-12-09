import { OrderDigiflazz } from "../Digiflazz/orderDigiflazz.js";
import { DecryptAutomated } from "../data/encrypt.js";

export const DataOrders = async (req , res) => {

    
    const {data , validation} = req.body;
    const DecryptData = DecryptAutomated(data)

    if (!data || !validation) {
        return res.status(400).json({ error: 'Tidak sesuai dengan data resmi kami!' });
    }
    if (validation === process.env['APP_VALIDATION_REQUEST']) {
        const Order = await OrderDigiflazz(DecryptData.transactionID , DecryptData.buyer_sku_code , DecryptData.id, DecryptData.verify)
        return res.status(200).json(Order)
    } else {
        return res.status(401).json({message : "unauthorized!"})
    }
    

}