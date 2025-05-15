import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import foodRoutes from './routes/foodRoutes.js'
import restaurantRoutes from './routes/restaurantRoutes.js'

import orderRoutes from './routes/orderRoutes.js'
import connectDB from './config/db.js'
import cors from 'cors'

dotenv.config()
connectDB()

const app = express()
app.use(cors())
app.use(express.json())

app.use('/api/foods', foodRoutes)
app.use('/api/restaurants', restaurantRoutes)
// app.use('/api/restaurants/:id', getRestaurantById)
app.use('/api/orders', orderRoutes)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB')
})
mongoose.connection.on('error', (err) => {
  console.error(`MongoDB connection error: ${err}`)
})