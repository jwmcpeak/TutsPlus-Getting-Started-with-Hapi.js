let defaultRoutes = require('./default');
let guitarsRoutes = require('./guitars');

module.exports = {
    name: 'default routes',
    version: '1.0',
    register(server, options) {
        server.route(defaultRoutes.concat(guitarsRoutes));
    }
};