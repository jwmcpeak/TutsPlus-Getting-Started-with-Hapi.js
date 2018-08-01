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
},{
    method: 'POST',
    path: '/contact',
    handler: (request, h) => {
        let email = request.payload.email.trim();
        let message = request.payload.message.trim();
        let errors = [];

        if (!email) {
            errors.push('Please enter your email address');
        }

        if (!message) {
            errors.push('Please enter a message.');
        }

        if (errors.length > 0) {
            return h.view('default/contact', {
                pageTitle: 'Contact Us',
                errors,
                email,
                message
            });
        }

        return h.redirect('/');

    }
}];