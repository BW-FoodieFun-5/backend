
exports.up = function (knex) {
    return knex.schema.createTable('restaurants', tbl => {
        tbl.increments();
        tbl.string('name', 128)
            .notNullable()
            .unique();
        tbl.string('cuisineType', 128)
            .notNullable();
        tbl.string('location', 255)
            .notNullable();
        tbl.string('hoursOperation', 128)
            .notNullable();
        tbl.string('rating', 128)
            .notNullable();
        tbl.string('review', 255)
            .notNullable();
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('restaurants');
};
