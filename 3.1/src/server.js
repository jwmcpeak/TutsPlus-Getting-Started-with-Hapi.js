const Hapi = require('hapi');

const server = Hapi.server({
    host: 'localhost',
    port: '8000'
});

module.exports = {
    start: async () => {
        await server.register([
            require('inert'),
            require('vision'),
            require('./routes/routes')
        ]);

        server.views({
            engines: { html: require('handlebars')},
            path: './src/views',
            context: {
                siteTitle: 'Our First Hapi App'
            },
            layout: true,
            layoutPath: './src/views/layouts',
            partialsPath: './src/views/partials',
            helpersPath: './src/views/helpers'
        });
        
        await server.start();
     
        console.log(`Server started at ${server.info.uri}`);
    }
};