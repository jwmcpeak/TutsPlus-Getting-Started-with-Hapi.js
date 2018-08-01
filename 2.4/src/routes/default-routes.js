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
            handler: {
                view: {
                    template: 'index',
                    context: {
                        pageTitle: 'Index',
                        message: 'Welcome to our site'
                    }
                }
            }
            // handler: (request, h) => {
            //     return h.view('index', {
            //         pageTitle: 'Index',
            //         message: 'Welcome to our site'
            //     });
            // }
        },{
            method: 'GET',
            path: '/contact',
            handler: (request, h) => {
                return h.view('contact', {
                    pageTitle: 'Contact Us'
                });
            }
        }]);
    }
};