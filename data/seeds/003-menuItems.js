
exports.seed = function (knex) {
  // Inserts seed entries, 000-cleanup.js deleted data from the tables
  return knex('menuItems').insert([
    { restaurants_id: '1', itemName: 'spaghetti', cuisineType: 'Italian', price: '$20', description: 'A saucy dish', image: 'image', itemRating: '5', itemReview: 'Just like mamma mia used to make' }
  ]);
};
