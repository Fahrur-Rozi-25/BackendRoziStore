import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
    transaction_id: {
        type: String,
        unique: true,
        required: true
    },
    product_name: String,
    price: String,
    seller_name: String,
    buyer_sku_code: String,
    ref_id: String,
    userId: String,
    verify: String,


    createdAt: {
        type: Date,
        default: Date.now,
      },
})

OrderSchema.index({ createdAt: 1 }, { expireAfterSeconds: 604800 });

const Order = mongoose.models.Order || mongoose.model('Order' , OrderSchema)
export default Order

