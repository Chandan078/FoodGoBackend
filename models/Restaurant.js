import mongoose from 'mongoose';

// Restaurant Schema
const restaurantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  rating: { type: Number, required: true },
  description: { type: String, required: true },
  cuisines: [{ type: String, required: true }],
  is_open: { type: Boolean, required: true }
}, { timestamps: true });

// Restaurant Model
const Restaurant = mongoose.model('Restaurant', restaurantSchema);

export default Restaurant;
