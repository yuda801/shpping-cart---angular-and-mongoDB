module.exports = (app) => {
    const carts = require('./cart.controller');

    // Create a new operation
    app.post('/carts', carts.create);

    // Retrieve all carts
    app.get('/carts', carts.findAll);

    // Retrieve a single operation with objectId
    app.get('/carts/:id', carts.findOne);

    // Update a operation with cartID
    //app.put('/carts/:cartID', carts.update);

    // Delete a operation with cartIDs
    app.delete('/carts/:id', carts.delete);
}