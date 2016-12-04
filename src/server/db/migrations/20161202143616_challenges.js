exports.up = function(knex, Promise) {
  return knex.schema.createTable('challenges', table => {
    table.increments();
    table.integer('user_id');
    table.integer('chalenge_id');
    table.boolean('completed');
    table.float('progress');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('challenges');
};
