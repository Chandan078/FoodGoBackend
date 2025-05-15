import express from 'express'
import { getRestaurants, getRestaurantById,updateRestaurant,addRestaurants } from '../controllers/restaurantController.js'

const router = express.Router()

router.get('/', getRestaurants)
router.get('/:id', getRestaurantById)
router.post('/', addRestaurants)
router.put("/restaurants/:id", updateRestaurant);
export default router
