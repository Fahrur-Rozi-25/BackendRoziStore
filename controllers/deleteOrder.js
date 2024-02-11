import Order from "../Database/models/orderSchema.js"
import Transaction from "../Database/models/trx_Schema.js";

export const deleteOrder = async (req, res) => {
  const { id } = req.params;
  const bearerHeader = req.headers['authorization'];
  
  if (typeof bearerHeader !== 'undefined') {
    const bearerToken = bearerHeader.split(' ')[1];
    if (bearerToken === process.env['KEY_DELETE_ORDER']) {
      try {
        const response = await Order.deleteOne({ transaction_id: id });
        const res = await Transaction.deleteOne({ transaction_id: id });
        res.status(200).json(response);
      } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
      }
    } else {
      res.status(401).json({ message: "Unauthorized" });
    }
  } else {
    res.status(403).json({ message: "Forbidden" });
  }
}
