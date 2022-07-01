module.exports = (app) => {
    const orders = require('./order.controller');

    // Create a new operation
    app.post('/orders', orders.create);

    // Retrieve all orders
    app.get('/orders', orders.findAll);

    // Retrieve a single operation with objectId
    app.get('/orders/:orderID', orders.findOne);

    // Update a operation with orderID
    //app.put('/orders/:orderID', orders.update);

    // Delete a operation with orderID
    app.delete('/orders/:orderID', orders.delete);
}