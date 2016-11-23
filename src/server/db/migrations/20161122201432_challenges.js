
exports.up = function(knex, Promise) {
  knex.schema.createTable('challenges', (table) => {
    table.increments();
    table.string('name').notNullable();
    table.text('description').notNullable();
    table.boolean('completed').notNullable();
    table.boolean('accepted').notNullable();
  })
};

exports.down = function(knex, Promise) {
  knex.schema.dropTable('challenges');
};
