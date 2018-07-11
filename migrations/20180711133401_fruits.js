
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('fruits', table => {
      table.increments('id')
      table.string('name')
      table.integer('rating')
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('fruits')
};
