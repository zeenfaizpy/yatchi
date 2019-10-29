
exports.up = async function(knex) {
    await knex.schema.createTable('expense', (table) => {
        table.increments('id').primary(),
        table.date('date').notNullable(),
        table.decimal('amount', 8, 2).nullable(),
        table.text('notes').notNullable(),
        table.integer('category_id').references('category.id').nullable()
    })

};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('expense')
};
