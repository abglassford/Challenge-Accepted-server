
const faker = require('faker');

exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return Promise.all([
        knex('users').insert({
          fb_obj: 'stuff',
          fb_token: '12345'
        })
      ]);
    });
};
