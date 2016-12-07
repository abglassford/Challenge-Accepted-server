
exports.up = function(knex, Promise) {
  return knex.schema.createTable('challenge_templates', table => {
    table.increments();
    table.string('name').notNullable();
    table.text('description').notNullable();
    table.integer('points').notNullable();
    table.string('creator').notNullable();
    table.text('step1').notNullable();
    table.text('step2').notNullable();
    table.text('step3').notNullable();
    table.text('step4').notNullable();
    table.text('step5').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('challenge_templates');
};
