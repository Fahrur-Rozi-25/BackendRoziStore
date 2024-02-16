import { OrderDigiflazz } from "../Digiflazz/orderDigiflazz.js";
import { DecryptAutomated } from "../utils/encrypt.js";

export const DataOrdersMobile = async (req , res) => {

    
    const {transactionID , buyer_sku_code , id , verify ,statusPembayaran , buyerName ,validation , profit} = req.body;
    
    if (!validation) {
        return res.status(400).json({ error: 'Tidak sesuai dengan data resmi kami!' });
    }
    if (validation === 'FahrurRoziAPIMobileAPP') {
        console.log("OKK");
        const Order = await OrderDigiflazz(transactionID , buyer_sku_code , id, verify , statusPembayaran , buyerName , profit)
        return res.status(200).json(Order)
    } else {
        return res.status(401).json({message : "unauthorized!"})
    }
    

}