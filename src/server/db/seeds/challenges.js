
const faker = require('faker');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('challenges').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('challenges').insert({
          name: faker.name.firstName(),
          description: faker.lorem.sentences(),
          completed: faker.random.boolean(),
          accepted: faker.random.boolean()
        }),
        knex('challenges').insert({
          name: faker.name.firstName(),
          description: faker.lorem.sentences(),
          completed: faker.random.boolean(),
          accepted: faker.random.boolean()
        }),
        knex('challenges').insert({
          name: faker.name.firstName(),
          description: faker.lorem.sentences(),
          completed: faker.random.boolean(),
          accepted: faker.random.boolean()
        }),
        knex('challenges').insert({
          name: faker.name.firstName(),
          description: faker.lorem.sentences(),
          completed: faker.random.boolean(),
          accepted: faker.random.boolean()
        })
      ]);
    });
};
