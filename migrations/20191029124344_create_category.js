
exports.up = async function(knex) {
    await knex.schema.createTable('category', (table) => {
        table.increments('id').primary(),
        table.string('name').notNullable(),
        table.string('chart_color').notNullable()
    })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('category')
};
