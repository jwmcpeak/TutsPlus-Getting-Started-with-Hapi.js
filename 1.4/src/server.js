const Hapi = require('hapi');

const server = Hapi.server({
    host: 'localhost',
    port: '8000'
});

module.exports = {
    start: async () => {
        await server.register([
            require('inert'),
            require('./routes/default-routes')
        ]);
        
        await server.start();
     
        console.log(`Server started at ${server.info.uri}`);
    }
};