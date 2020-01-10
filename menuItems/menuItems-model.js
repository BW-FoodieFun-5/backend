const db = require('../data/dbConfig');

module.exports = {
    add,
    find,
    findBy,
    findById,
    update,
    remove,
    getRestaurantMenuItems,
};

function find() {
    return db('menuItems').select('id', 'restaurants_id', 'itemName', 'cuisineType', 'price', 'description', 'image', 'itemRating', 'itemReview');
}

function getRestaurantMenuItems(restaurants_id) {
    return db('menuItems')
        .innerJoin('restaurants', 'menuItems.restaurants_id', '=', 'restaurant.id')
        .where({ restaurants_id })
}

function findBy(filter) {
    return db('menuItems').where(filter);
}

async function add(menuItem) {
    const [id] = await db('menuItems').insert(menuItem);

    return findById(id);
}

function findById(id) {
    return db('menuItems')
        .where({ id })
        .first();
}

function update(id, changes) {
    return db('menuItems').where('id', id).update(changes).then(count => (count > 0 ? this.find(id) : null));
}

function remove(id) {
    return db('menuItems').where('id', id).del();
}
