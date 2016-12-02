const knex = require('../db/knex');

function getOne (table, id) {
  return knex.select('*')
  .from(`${table}`)
  .where('id', id);
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
    fb_id: body.id,
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
    name: body.name,
    description: body.description,
    points: body.points,
    progress: body.progress
  });
}

function updateChallenge (body, id) {
  return knex('challenges')
  .where('id', id)
  .update({
    name: body.name,
    description: body.description,
    completed: body.completed,
    accepted: body.accepted
  });
}

module.exports = {
  getOne,
  getAll,
  del,
  postUser,
  updateUser,
  postChallenge,
  updateChallenge
};
