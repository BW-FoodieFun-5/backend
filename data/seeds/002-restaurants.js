
exports.seed = function (knex) {
  // Inserts seed entries, 000-cleanup.js deleted data from the tables
  return knex('restaurants').insert([
    { name: 'Chik-fil-A', cuisineType: 'chicken', location: 'Spanish Fork', hoursOperation: '9am-10:30pm', description: 'a chicken restaurant', image: 'https://images.unsplash.com/photo-1558883188-817ab9ecf395?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80', rating: '5', review: 'It was delicious' }
  ]);
};
