import express from 'express'
import { getFoods, addFood, updateFood, deleteFood } from '../controllers/foodController.js'

const router = express.Router()

router.get('/', getFoods)
router.post('/', addFood)
router.put('/:id', updateFood)
router.delete('/:id', deleteFood)

export default router
