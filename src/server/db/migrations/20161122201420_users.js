exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (table) => {
    table.increments();
    table.string('email').notNullable().unique();
    table.string('name').notNullable();
    table.string('fb_token').unique();
    table.string('fb_obj');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
