module.exports = (app) => {
    const product = require('./product.controller');

    // Create a new product
    app.post('/product', product.create);

    // Retrieve all product
    app.get('/product', product.findAll);

    // Retrieve a single product with objectId
    app.get('/product/:id', product.findOne);

    // Update a product with productId
    // app.put('/product/:productId', product.update);

    // Delete a product with productId
    app.delete('/product/:productId', product.delete);
}