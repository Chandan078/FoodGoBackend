import mongoose from 'mongoose';

const foodSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String },
  description: { type: String },
  isVeg: { type: Boolean, required: true },
  restaurant: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant', required: true }, // Reference to Restaurant model
  type: { type: String}, // Example: 'Main Course', 'Appetizer', 'Dessert'
});

export default mongoose.model('Food', foodSchema);
