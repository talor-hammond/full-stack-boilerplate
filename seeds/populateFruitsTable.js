
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('fruits').del()
    .then(function () {
      // Inserts seed entries
      return knex('fruits').insert([
        {id: 1, name: 'Banana', rating: 6},
        {id: 2, name: 'Apple', rating: 7},
        {id: 3, name: 'Watermelon', rating: 9}
      ]);
    });
};
