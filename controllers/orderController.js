import Order from '../models/Order.js'

export const placeOrder = async (req, res) => {
  const order = new Order(req.body)
  await order.save()
  res.status(201).json(order)
}

export const getOrders = async (req, res) => {
  const orders = await Order.find().populate('foodItems')
  res.json(orders)
}
