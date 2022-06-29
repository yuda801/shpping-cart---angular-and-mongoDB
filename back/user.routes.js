module.exports = (app) => {
    const users = require('./user.controller');

    // Create a new operation
    app.post('/users', users.create);

    // Retrieve all users
    app.get('/users', users.findAll);

    // Retrieve a single operation with objectId
    app.get('/users/:id', users.findOne);

    // Update a operation with operationId
    // app.put('/users/:operationId', users.update);

    // Delete a operation with operationId
    // app.delete('/users/:operationId', users.delete);
}