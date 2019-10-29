
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('category').del()
    .then(function () {
      // Inserts seed entries
      return knex('category').insert([
        {name: 'Grocery', chart_color: ''},
        {name: 'Travel', chart_color: ''},
        {name: 'Entertainment', chart_color: ''},
        {name: 'Others', chart_color: ''},
      ]);
    });
};
