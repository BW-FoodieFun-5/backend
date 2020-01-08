
exports.seed = function (knex) {
  // Inserts seed entries, 000-cleanup.js deleted data from the tables
  return knex('menuItems').insert([
    { restaurants_id: '1', itemName: 'chicken sandwich', cuisineType: 'chicken', price: '$5', description: 'chicken, bun, pickles', image: 'https://unsplash.com/photos/PpGsqDOaNdI', itemRating: '5', itemReview: `The Lord's chicken!` }
  ]);
};
