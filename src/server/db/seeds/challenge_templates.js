const faker = require('faker');

exports.seed = function(knex, Promise) {
  return knex('challenges').del()
    .then(function () {
      return Promise.all([
        knex('challenge_templates').insert({
          name: 'Mr. Nice Guy',
          description: 'Do something nice for someone',
          points: 2,
          creator: 'Alex'
        }),
        knex('challenge_templates').insert({
          name: 'Get Learned',
          description: 'Read a book',
          points: 4,
          creator: 'Alex'
        }),
        knex('challenge_templates').insert({
          name: 'Take It In',
          description: 'Spend 5 minutes of every hour outside',
          points: 3,
          creator: 'Alex'
        })
      ]);
    });
};
