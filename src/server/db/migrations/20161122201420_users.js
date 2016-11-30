exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (table) => {
    table.string('id')notNullable.unique();
    table.string('email').notNullable().unique();
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
    table.string('fb_obj')
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
