exports.up = function(knex, Promise) {
  return knex.schema.createTable('challenges', table => {
    table.increments();
    table.string('user_id').notNullable();
    table.integer('challenge_id').notNullable();
    table.boolean('completed').notNullable();
    table.float('progress').notNullable();
    table.boolean('step1_complete').notNullable().defaultTo(false);
    table.boolean('step2_complete').notNullable().defaultTo(false);
    table.boolean('step3_complete').notNullable().defaultTo(false);
    table.boolean('step4_complete').notNullable().defaultTo(false);
    table.boolean('step5_complete').notNullable().defaultTo(false);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('challenges');
};
