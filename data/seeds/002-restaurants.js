
exports.seed = function (knex) {
  // Inserts seed entries, 000-cleanup.js deleted data from the tables
  return knex('restaurants').insert([
    { name: 'Chik-fil-A', cuisineType: 'chicken', location: 'Spanish Fork', hoursOperation: '9am-10:30pm', rating: '5', review: 'It was delicious' }
  ]);
};
