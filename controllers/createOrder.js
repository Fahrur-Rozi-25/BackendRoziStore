import Order from "../Database/models/orderSchema.js"


export const createOrder = async (req, res) => {
    const {
        transaction_id,
        key,
        product_name,
        price,
        seller_name,
        buyer_sku_code,
        userId,
    } = req.body;

    if (!transaction_id || !key || !product_name || !price || !seller_name || !buyer_sku_code || !userId) {
        return res.status(400).json({ message: "ada yang kurang dari data yang di kirim , silahkan cek kembali datanya!" });
    }

    if (key === process.env['CREATE_ORDER_KEY']) {
        try {
            await Order.create({
                transaction_id,
                product_name,
                price,
                seller_name,
                buyer_sku_code,
                userId,
            });
            return res.status(201).json({ message: "Order berhasil dibuat" });
        } catch (error) {
            return res.status(500).json({ message: "Gagal membuat order", error: error.message });
        }
    } else {
        return res.status(500).json({ message: "wrong api key!" });
    }
};
