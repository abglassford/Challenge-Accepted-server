exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (table) => {
    table.increments();
    table.string('email').unique().notNullable();
    table.string('fb_id').unique().notNullable();
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
    table.string('photo');
    table.integer('total_points').notNullable().defaultTo(0);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
