
const faker = require('faker');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({
          name: faker.name.firstName(),
          email: faker.internet.email(),
          fb_obj: 'stuff',
          fb_token: '12345'
        })
      ]);
    });
};
