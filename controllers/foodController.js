import Food from '../models/Food.js'

export const getFoods = async (req, res) => {
  const foods = await Food.find().populate('restaurant')
  res.json(foods)
}

export const addFood = async (req, res) => {
  try {
    if (Array.isArray(req.body)) {
      const foods = await Food.insertMany(req.body)
      res.status(201).json(foods)
    } else {
      const food = new Food(req.body)
      await food.save()
      res.status(201).json(food)
    }
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}

export const updateFood = async (req, res) => {
  const food = await Food.findByIdAndUpdate(req.params.id, req.body, { new: true })
  res.json(food)
}

export const deleteFood = async (req, res) => {
  await Food.findByIdAndDelete(req.params.id)
  res.json({ message: 'Food deleted' })
}
