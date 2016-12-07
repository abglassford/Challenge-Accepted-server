
exports.up = function(knex, Promise) {
  return knex.schema.createTable('challenge_templates', table => {
    table.increments();
    table.string('name').notNullable();
    table.text('description').notNullable();
    table.integer('points').notNullable();
    table.string('creator').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('challenge_templates');
};
