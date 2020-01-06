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
    return db('menuItems').select('id', 'itemName', 'cuisineType', 'price', 'itemRating', 'itemReview');
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
