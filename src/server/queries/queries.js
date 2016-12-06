const knex = require('../db/knex');

function getOne (table, id, table_id) {
  return knex.select('*')
  .from(`${table}`)
  .where(`${table_id}`, id);
}

function getAll (table) {
  return knex.select('*')
  .from(`${table}`);
}

function del (table, id) {
  return knex(`${table}`)
  .where('id', id)
  .del();
}

function postUser (body) {
  return knex('users')
  .insert({
    fb_id: body.fb_id,
    first_name: body.first_name.toLowerCase(),
    last_name: body.last_name.toLowerCase(),
    email: body.email
  });
}

function updateUser (body, id) {
  return knex('users')
  .where('id', id)
  .update({
    email: body.email
  });
}

function postChallenge (body) {
  return knex('challenges')
  .insert({
    user_id: body.user_id,
    challenge_id: body.challenge_id,
    completed: body.completed,
    progress: body.progress
  });
}

function postChallenge_template (body) {
  return knex('challenge_templates')
  .insert({
    name: body.name,
    description: body.description,
    points: body.points
  });
}

function updateChallenge (body) {
  return knex('challenges')
  .where('challenge_id', body.challenge_id)
  .andWhere('user_id', body.user_id)
  .update({
    progress: body.progress
  })
  .returning('*');
}

function getAllChallenges (user_id) {
  return knex.select('*')
  .from('challenges')
  .innerJoin('challenge_templates', 'challenge_id', 'challenges.id');
}

function getByName (name) {
  let first_name = name.split(' ')[0] || 'b'
  let last_name = name.split(' ')[1] || 'a'
  return knex.select('*')
  .from('users')
  .where('first_name', first_name)
  .andWhere('last_name', last_name)
  .orWhere('last_name', first_name)
  .orWhere('first_name', last_name)
}


module.exports = {
  getOne,
  getAll,
  del,
  postUser,
  updateUser,
  postChallenge,
  postChallenge_template,
  updateChallenge,
  getAllChallenges,
  getByName
};
