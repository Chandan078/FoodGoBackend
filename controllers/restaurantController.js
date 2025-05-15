import Restaurant from '../models/Restaurant.js';

//getRestaurants
export const getRestaurants = async (req, res) => {
  const restaurants = await Restaurant.find()
  res.json(restaurants)
}

//getRestaurantById
export const getRestaurantById = async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id);
    if (!restaurant) {
      return res.status(404).json({ message: "Restaurant not found" });
    }
    res.json(restaurant);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//addRestaurants
export const addRestaurants = async (req, res) => {
  try {
    // If the request body is an array of restaurants
    if (Array.isArray(req.body)) {
      const createdRestaurants = await Restaurant.insertMany(req.body);
      return res.status(201).json(createdRestaurants);
    }

    // If it's a single restaurant
    const newRestaurant = new Restaurant(req.body);
    const createdRestaurant = await newRestaurant.save();
    res.status(201).json(createdRestaurant);

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error inserting restaurants' });
  }
};

//updateRestaurant
export const updateRestaurant = async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;

  try {
    const updatedRestaurant = await Restaurant.findByIdAndUpdate(
      id,
      updateData,
      { new: true } // Return the updated document
    );

    if (!updatedRestaurant) {
      return res.status(404).json({ message: "Restaurant not found" });
    }

    res.status(200).json(updatedRestaurant);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};