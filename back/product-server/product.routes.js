module.exports = (app) => {
    const products = require('./product.controller');

    // Create a new products
    app.post('/products', products.create);

    // Retrieve all products
    app.get('/products', products.findAll);

    // Retrieve a single products with objectId
    app.get('/products/:id', products.findOne);

    // Update a products with productsId
    // app.put('/products/:productsId', products.update);

    // Delete a products with productsId
    app.delete('/products/:productsId', products.delete);
}