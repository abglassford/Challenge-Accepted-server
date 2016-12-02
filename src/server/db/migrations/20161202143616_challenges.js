exports.up = function(knex, Promise) {
  return knex.schema.createTable('challenges', table => {
    table.increments();
    table.integer('challenge_template_id');
    table.foreign('challenge_template_id').references('challenge_templates.id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('challenges');
};
