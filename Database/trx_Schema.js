import mongoose from 'mongoose';

const TransactionSchema = new mongoose.Schema({
    transaction_id: {
        type: String,
        unique: true,
        required: true
    },
    ref_id: {
        type: String
    },
    userID: String,
    metodePembayaran: {
        type: String
    },
    statusMetodePembayaran: {
        type: String
    },
    status: {
        type: String
    },
    message: {
        type: String
    },
    sn: {
        type: String
    },
    customer_no: {
        type: String
    },
    category: String,
    orderTime: String,
    brand: String,
    product: String,
    buyerPrice: String,
    sellerPrice: String,
    telegram: String,
    createdAt: {
        type: Date,
        default: Date.now,
      },
})

TransactionSchema.index({ createdAt: 1 }, { expireAfterSeconds: 300 });

const Transaction = mongoose.models.Transaction || mongoose.model('Transaction' , TransactionSchema)
export default Transaction

