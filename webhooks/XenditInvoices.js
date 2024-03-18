import Order from "../Database/models/orderSchema.js";
import { OrderDigiflazz } from "../Digiflazz/orderDigiflazz.js";


const xenditCallbackToken = process.env['XENDIT_CALLBACK_TOKEN']

export const CallbackInvoicesXendit = async (req , res) => {

    const xIncomingCallbackTokenHeader = req.headers['x-callback-token'];

    if (xIncomingCallbackTokenHeader === xenditCallbackToken) {
      // Permintaan masuk diverifikasi berasal dari Xendit
  
      const arrRequestInput = req.body;
      console.log(arrRequestInput);
  
      const {
        id: _id,
        external_id: _externalId,
        user_id: _userId,
        status: _status,
        paid_amount: _paidAmount,
        paid_at: _paidAt,
        payment_channel: _paymentChannel,
        payment_destination: _paymentDestination
      } = arrRequestInput;
      
      if (_status === "PAID") {
        try {
          const getData = await Order.findOne({ transaction_id: _externalId });
          const verify = process.env['APP_VERIFICATION_ORDER']
          const Orders = await OrderDigiflazz(_externalId , getData.buyer_sku_code , getData.userId , verify , "PAID" , "XENDIT" , 0)
          console.log(Orders);
        } catch (error) {
          console.log(error);
        }
      }
      // Kamu bisa menggunakan nilai di atas untuk melakukan pengecekan atau aktifasi tertentu di aplikasi atau sistem kamu.
      res.status(200).json(arrRequestInput);
    } else {
      // Permintaan bukan dari Xendit, tolak dan buang pesan dengan HTTP status 403
      res.status(403).send('Forbidden');
    }

}