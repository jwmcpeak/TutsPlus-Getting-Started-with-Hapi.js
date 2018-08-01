module.exports = {
    name: 'default routes',
    version: '1.0',
    register(server, options) {
        server.route([{
            method: 'GET',
            path: '/{param*}',
            handler: {
                directory: {
                    path: './public',
                    index: ['index.html', 'default.html']
                }
            }
        },{
            method: 'GET',
            path: '/',
            handler: (request, h) => {
                return '<b>Hello, Hapi!</b>';
            }
        }]);
    }
};