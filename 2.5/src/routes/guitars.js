let repository = require('./../data/guitar-repository');

module.exports = [{
    method: 'GET',
    path: '/guitars',
    handler: (request, h) => {
        let guitars = repository.all();

        return h.view('guitars/index', {
            pageTitle: 'My Guitars',
            guitars
        });
    }
}];