import mongoose from "mongoose";
import timestamps from "mongoose-timestamp";

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  name: {
    type: String,
    required: true,
  },
  orderItems: [
    {
      name: { type: String, required: true },
      price: { type: Number, required: true },
      qty: { type: Number, required: true },
      image: { type: String, required: true },
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
    },
  ],

  shippingAddresses: {
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true },
    zip: { type: String, required: true },
  },
  paymentResult: {
    Id: { type: String, required: true },
    status: { type: String, required: true },
    update_time: { type: String, required: true },
    email_address: { type: String, required: true },
  },
  taxPrice: {
    type: Number,
    required: true,
    default: 0.0,
  },
  totalPrice: {
    type: Number,
    required: true,
    default: 0.0,
  },
  shippingPrice: {
    type: Number,
    required: true,
    default: 0.0,
  },
  isPaid: {
    type: Boolean,
    required: true,
    default: false,
  },
  paidAt: {
    type: Date,
  },
  isDelivered: {
    type: Boolean,
    required: true,
    default: false,
  },
  deliveredAt: {
    type: Date,
  },

  paymentMethod: {
    type: String,
    default: false,
    required: true,
  },
});

const Order = mongoose.model("Order", orderSchema);

export default Order;
