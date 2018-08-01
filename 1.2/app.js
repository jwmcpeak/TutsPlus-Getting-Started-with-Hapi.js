const Hapi = require('hapi');

const server = Hapi.server({
    host: 'localhost',
    port: '8000'
});

server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => {
        return '<script>alert("hi");</script><b>Hello, Hapi!</b>';
    }
});


server.start();

console.log(`Server started at ${server.info.uri}`);