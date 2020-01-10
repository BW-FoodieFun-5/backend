
exports.seed = function (knex) {
  // Inserts seed entries, 000-cleanup.js deleted data from the tables
  return knex('menuItems').insert([
    { restaurants_id: '1', itemName: 'chicken sandwich', cuisineType: 'chicken', price: '$5', description: 'chicken, bun, pickles', image: 'https://images.unsplash.com/photo-1558883188-817ab9ecf395?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80', itemRating: '5', itemReview: `The Lord's chicken!` }
  ]);
};
