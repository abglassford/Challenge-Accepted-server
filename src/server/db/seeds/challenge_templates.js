
const faker = require('faker');

exports.seed = function(knex, Promise) {
  return knex('challenges').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('challenge_templates').insert({
          name: faker.name.firstName(),
          description: faker.lorem.sentences(),
          points: 5,
          progress: 3,
          completed: false,
          accepted: true
        }),
        knex('challenge_templates').insert({
          name: faker.name.firstName(),
          description: faker.lorem.sentences(),
          points: 5,
          progress: 10,
          completed: false,
          accepted: true
        }),
        knex('challenge_templates').insert({
          name: faker.name.firstName(),
          description: faker.lorem.sentences(),
          points: 5,
          progress: 1,
          completed: false,
          accepted: true
        }),
        knex('challenge_templates').insert({
          name: faker.name.firstName(),
          description: faker.lorem.sentences(),
          points: 5,
          progress: 6,
          completed: false,
          accepted: true
        })
      ]);
    });
};
