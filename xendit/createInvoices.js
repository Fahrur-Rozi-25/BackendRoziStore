import { Invoice as InvoiceClient } from 'xendit-node';

const xenditInvoiceClient = new InvoiceClient({secretKey: process.env['XENDIT_SCREET_CODE_PRODUCTION']})

export const createInvoice = async (id , price , items , redirectUrl) => {

  const data = {
    "amount" : price,
    "invoiceDuration" : 600,
    "externalId" : id,
    "currency" : "IDR",
    "reminderTime" : 1,
    "items": [{
      "name": items,
      "quantity": 1,
      "price": price
    }],
    "successRedirectUrl": `https://tokorozy.my.id/status-transaction/${redirectUrl}`,
    "locale": "id",
    "failureRedirectUrl": "https://tokorozy.my.id/OthersPage/failurePayment",
}
const response = await xenditInvoiceClient.createInvoice({data})
return response
}