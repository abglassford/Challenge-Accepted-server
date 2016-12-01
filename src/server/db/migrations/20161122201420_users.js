exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (table) => {
    table.increments();
    table.string('fb_token').unique().notNullable();
    table.text('fb_obj');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
