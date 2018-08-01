module.exports = [{
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
            template: 'default/index',
            context: {
                pageTitle: 'Index',
                message: 'Welcome to our site'
            }
        }
    }
},{
    method: 'GET',
    path: '/contact',
    handler: (request, h) => {
        return h.view('default/contact', {
            pageTitle: 'Contact Us'
        });
    }
}];