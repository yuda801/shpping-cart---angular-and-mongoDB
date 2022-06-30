module.exports = (app) => {
    const users = require('./user.controller');

    // Create a new operation
    app.post('/users', users.create);

    // Retrieve all users
    app.get('/users', users.findAll);

    // Retrieve a single operation with objectId
    app.get('/users/:userID', users.findOne);

    // Update a operation with userID
    //app.put('/users/:userID', users.update);

    // Delete a operation with userID
    app.delete('/users/:userID', users.delete);
}