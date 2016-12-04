(function (routeConfig) {

  'use strict';

  routeConfig.init = function (app) {

    // *** routes *** //
    const routes = require('../routes/index');
    const users = require('../routes/users');
    const challenges = require('../routes/challenges');
    const challenge_templates = require('../routes/challenge_templates');

    // *** register routes *** //
    app.use('/', routes);
    app.use('/users', users);
    app.use('/challenges', challenges);
    app.use('/challenge_templates', challenge_templates);
  };

})(module.exports);
