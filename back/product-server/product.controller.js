const Product = require('./product.model');

// Create and Save a new product
exports.create = (req, res) => {
    // Validate request
    if (!req.body.firstName) {
        return res.status(400).send({
            message: "firstName can not be empty"
        });
    }

    // Create a product
    let tempID = 0
    const product = new Product({
        productID: req.body.productID || ++tempID,
        name: req.body.name || "name",
        price: req.body.price || 11111111,
        imagePath: req.body.imagePath || "imagePath"
    });

    // Save product in the database
    product.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the product."
            });
        });
};

// Retrieve and return all product from the database.
exports.findAll = (_, res) => {
    Product.find().then(product => {
        res.send(product);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving product."
        });
    });
};

// Find a single product with a id
exports.findOne = (req, res) => {
    Product.findById(req.params.id)
        .then(product => {
            if (!product) {
                return res.status(404).send({
                    message: "product not found with id " + req.params.id
                });
            }
            res.send(product);
        }).catch(err => {
            if (err.kind === 'id') {
                return res.status(404).send({
                    message: "product not found with id " + req.params.id
                });
            }
            return res.status(500).send({
                message: "Error retrieving product with id " + req.params.id
            });
        });
};

// Find a single product with a id and delete it
exports.delete = (req, res) => {
    Product.deleteOne(req.params.id)
        .then(product => {
            if (!product) {
                return res.status(404).send({
                    message: "product not found with id " + req.params.id
                });
            }
            res.send(product);
        }).catch(err => {
            if (err.kind === 'id') {
                return res.status(404).send({
                    message: "product not found with id " + req.params.id
                });
            }
            return res.status(500).send({
                message: "Error deleting product with id " + req.params.id
            });
        });
};
