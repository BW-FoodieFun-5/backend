
exports.up = function (knex) {
    return knex.schema.createTable('menuItems', tbl => {
        tbl.increments();
        tbl.integer('restaurants_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('restaurants')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');

        tbl.string('itemName', 128)
            .notNullable()
            .unique();
        tbl.string('cuisineType', 128)
            .notNullable();
        tbl.string('price', 255)
            .notNullable();
        tbl.string('itemRating', 128)
            .notNullable();
        tbl.string('itemReview', 255)
            .notNullable();
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('menuItems');
};