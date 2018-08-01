let repository = require('./../data/guitar-repository');
let Boom = require('boom');

function single(id, h) {
    let guitar = repository.getById(id);

    if (!guitar) {
        throw Boom.notFound('Cannot find the requested guitar');
    }

    return h.view('guitars/single', {
        pageTitle: guitar.name,
        guitar
    });
}

module.exports = [{
    method: 'GET',
    path: '/guitars/{id?}',
    handler: (request, h) => {
        let id = request.query.id || request.params.id;

        if (!id) {
            let guitars = repository.all();

            return h.view('guitars/index', {
                pageTitle: 'My Guitars',
                guitars
            });
        }

        return single(id, h);
    }
}
// ,{
//     method: 'GET',
//     path: '/guitars/{id}',
//     handler(request, h) {
//         let id = request.params.id;

//         return single(id, h);

//     }
// }
];