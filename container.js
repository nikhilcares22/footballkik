const dependable = require('dependable');
const path = require('path');

const container = dependable.container();

const simpleDependencies = [
    ['_', 'lodash'],
    ['passport', 'passport'],
    ['async', 'async'],
    ['validator', 'validator'],
    ['Users', './models/users'],
    ['formidable', 'formidable'],
    ['Club', './models/clubs'],
    ['Group', './models/groupmessage'],
    ['Message', './models/message']
];

simpleDependencies.forEach(val => {
    container.register(val[0], function () {
        return require(val[1]);
    });
});

container.load(path.join(__dirname, '/helpers'));
container.load(path.join(__dirname, '/controllers'));

container.register('container', function () {
    return container;
});

module.exports = container;