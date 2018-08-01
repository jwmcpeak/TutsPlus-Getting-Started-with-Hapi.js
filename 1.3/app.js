const Hapi = require('hapi');

const server = Hapi.server({
    host: 'localhost',
    port: '8000'
});

const start = async () => {
    await server.register(require('inert'));

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

    await server.start();
 
    console.log(`Server started at ${server.info.uri}`);
};

start();