const faker = require('faker');

exports.seed = function(knex, Promise) {
  return knex('challenges').del()
    .then(function () {
      return Promise.all([
        knex('challenge_templates').insert({
          name: 'Mr. Nice Guy',
          description: 'Do nice things for people!',
          points: 2,
          creator: 'Alex Glassford',
          step1: 'Tell someone they look good today!',
          step2: 'Hold the door for someone!',
          step3: 'Call your mom!',
          step4: 'Let someone merge onto the highway without throwing a fit!',
          step5: 'Smile!'
        }),
        knex('challenge_templates').insert({
          name: 'Get Learned',
          description: 'Spend your time doing things to increase your intelligence',
          points: 4,
          creator: 'Alex Glassford',
          step1: 'Read a book!',
          step2: 'Watch a documentary!',
          step3: 'Ask an old person how it was in the good ol days!',
          step4: 'Sign up for a class!',
          step5: 'Teach someone something you know!'
        }),
        knex('challenge_templates').insert({
          name: 'Take It In',
          description: 'Enjoy the world around you',
          points: 3,
          creator: 'Alex Glassford',
          step1: 'Go for a walk!',
          step2: 'Sit in the grass!',
          step3: 'Climb a tree!',
          step4: 'Have a picnic!',
          step5: 'Spend an entire hour outside'
        })
      ]);
    });
};
