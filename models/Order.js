import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema({
  foodItems: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Food', required: true }],
  totalPrice: { type: Number, required: true },
  customerName: { type: String, required: false },
  address: { type: String, required: false },
  restaurant: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant', required: true }, // Reference to Restaurant
  status: { 
    type: String, 
    enum: ['Pending', 'Preparing', 'Completed', 'Cancelled'], 
    default: 'Pending' 
  },
  createdAt: { type: Date, default: Date.now }
})

export default mongoose.model('Order', orderSchema)
