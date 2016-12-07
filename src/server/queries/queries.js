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
    email: body.email,
    photo: body.photo
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
  console.log(body);
  return knex('challenge_templates')
  .insert({
    name: body.name,
    description: body.description,
    points: body.points,
    creator: body.creator,
    step1: body.step1,
    step2: body.step2,
    step3: body.step3,
    step4: body.step4,
    step5: body.step5
  });
}

function updateChallenge (body) {
  return knex('challenges')
  .where('challenge_id', body.challenge_id)
  .andWhere('user_id', body.user_id)
  .update({
    progress: body.progress,
    step1_complete: true
  })
  .returning('*');
}

function getAllChallenges (user_id) {
  return knex.select('*')
  .from('challenges')
  .innerJoin('challenge_templates', 'challenge_id', 'challenges.id');
}

function getAllUserData (user_id) {
  console.log('hit getAllUserData');
  return knex.select('*')
  .from('users')
  .where('fb_id', user_id)
  .innerJoin('challenges', 'fb_id', 'user_id')
  .innerJoin('challenge_templates', 'challenges.challenge_id', 'challenge_templates.id')

}

function getByName (name) {
  let first_name = name.split(' ')[0] || 'b'
  let last_name = name.split(' ')[1] || 'a'
  return knex.select('*')
  .from('users')
  .where('first_name', first_name)
  .andWhere('last_name', last_name)
  .orWhere('first_name', first_name)
  .orWhere('last_name', last_name)
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
  getAllUserData,
  getByName
};
