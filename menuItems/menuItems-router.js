const router = require('express').Router();

const MenuItems = require('./menuItems-model');

// endpoints for Menu Items

// GET all menu items

router.get('/', (req, res) => {
    MenuItems.find()
        .then(menuItems => {
            res.status(200).json(menuItems);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ message: 'Error retrieving the menu items' })
        })
})

// POST a new Menu Item

router.post('/', (req, res) => {
    MenuItems.add(req.body)
        .then(menuItems => {
            res.status(201).json(menuItems);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ message: 'Error adding the menu item' });
        })
})

// PUT request to edit a menu item

router.put('/:id', (req, res) => {
    const edits = req.body;
    MenuItems.update(req.params.id, edits)
        .then(menuItem => {
            if (menuItem) {
                res.status(200).json(menuItem);
            } else {
                res.status(404).json({ message: 'The menu item could not be found' });
            }
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ message: 'Error updating the menu item' });
        })
})

// DEL endpoint to remove a menu item

router.delete('/:id', (req, res) => {
    MenuItems.remove(req.params.id)
        .then(removed => {
            if (removed) {
                res.status(200).json({ message: 'Menu item successfully deleted', removed });
            } else {
                res.status(404).json({ message: 'The menu item with that ID does not exist' });
            }
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ message: 'The menu item could not be deleted' });
        })
})

module.exports = router;