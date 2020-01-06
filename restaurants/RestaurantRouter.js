const router = require('express').Router();

const Restaurants = require('./restaurants-model');

// endpoints for Restaurants

// GET all restaurants

router.get('/', (req, res) => {
    Restaurants.find()
        .then(restaurants => {
            res.status(200).json(restaurants);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ message: 'Error retrieving the restaurants' })
        })
})

// POST a new restaurant

router.post('/', (req, res) => {
    Restaurants.add(req.body)
        .then(restaurant => {
            res.status(201).json(restaurant);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ message: 'Error adding the restaurant' });
        })
})

// PUT request to edit a restaurant

router.put('/:id', (req, res) => {
    const edits = req.body;
    Restaurants.update(req.params.id, edits)
        .then(restaurant => {
            if (restaurant) {
                res.status(200).json(restaurant);
            } else {
                res.status(404).json({ message: 'The restaurant could not be found' });
            }
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ message: 'Error updating the restaurant' });
        })
})


module.exports = router;