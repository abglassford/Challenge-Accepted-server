exports.up = function(knex, Promise) {
  return knex.schema.createTable('challenges', table => {
    table.increments();
    table.string('user_id').notNullable();
    table.integer('challenge_id').notNullable();
    table.boolean('completed').notNullable();
    table.float('progress').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('challenges');
};
