(function (routeConfig) {

  'use strict';

  routeConfig.init = function (app) {

    // *** routes *** //
    const routes = require('../routes/index');
    const users = require('../routes/users');
    const challenges = require('../routes/challenges');

    // *** register routes *** //
    app.use('/', routes);
    app.use('/users', users);
    app.use('/challenges', challenges);

  };

})(module.exports);
