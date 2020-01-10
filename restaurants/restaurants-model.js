const db = require('../data/dbConfig');

module.exports = {
    add,
    find,
    findBy,
    findById,
    update,
    remove,
};

function find() {
    return db('restaurants').select('id', 'name', 'cuisineType', 'location', 'hoursOperation', 'description', 'image', 'rating', 'review');
}

function findBy(filter) {
    return db('restaurants').where(filter);
}

async function add(restaurant) {
    const [id] = await db('restaurants').insert(restaurant);

    return findById(id);
}

function findById(id) {
    return db('restaurants')
        .where({ id })
        .first();
}

function update(id, changes) {
    return db('restaurants').where('id', id).update(changes).then(count => (count > 0 ? this.find(id) : null));
}

function remove(id) {
    return db('restaurants').where('id', id).del();
}
