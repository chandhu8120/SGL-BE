
import { Schema, model } from 'mongoose';

const CheckoutSchema = new Schema({
  totalItems: { type: Number, required: true },
  totalCost: { type: Number, required: true },
  shipping: { type: String, required: true },
  estimatedTax: { type: Number, required: true },
  grandTotal: { type: Number, required: true }
});

const Checkout = model('Checkout', CheckoutSchema);

export default Checkout;
