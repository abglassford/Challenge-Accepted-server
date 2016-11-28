exports.up = function(knex, Promise) {
  return knex.schema.createTable('challenges', (table) => {
    table.increments();
    table.string('name').notNullable();
    table.text('description').notNullable();
    table.boolean('completed').notNullable();
    table.boolean('accepted').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('challenges');
};
