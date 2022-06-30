const Cart = require('./cart.model');

// Create and Save a new cart
exports.create = (req, res) => {
    // Validate request
    if (!req.body.userID) {
        return res.status(400).send({
            message: "userID can not be empty"
        });
    }

    // cartId: Number,
    // userID: Number,
    // creationDate: Date,
    // itemsInCart: [Object]

    // Create a cart
    let tempID = 0
    const cart = new Cart({
        cartID: req.body.cartID || ++tempID,
        userID: req.body.userID || ++tempID,
        itemsInCart: req.body.itemsInCart || {"item":3}
    });

    // Save cart in the database
    cart.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the cart."
            });
        });
};

// Retrieve and return all cart from the database.
exports.findAll = (req, res) => {
    Cart.find().then(cart => {
        res.send(cart);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving cart."
        });
    });
};

// Find a single cart with a id
exports.findOne = (req, res) => {
    Cart.findById(req.params.id)
        .then(cart => {
            if (!cart) {
                return res.status(404).send({
                    message: "cart not found with id " + req.params.id
                });
            }
            res.send(cart);
        }).catch(err => {
            if (err.kind === 'id') {
                return res.status(404).send({
                    message: "cart not found with id " + req.params.id
                });
            }
            return res.status(500).send({
                message: "Error retrieving cart with id " + req.params.id
            });
        });
};

// Find a single cart with a id and delete it
exports.delete = (req, res) => {
    Cart.deleteOne(req.params.id)
        .then(cart => {
            if (!cart) {
                return res.status(404).send({
                    message: "cart not found with id " + req.params.id
                });
            }
            res.send(cart);
        }).catch(err => {
            if (err.kind === 'id') {
                return res.status(404).send({
                    message: "cart not found with id " + req.params.id
                });
            }
            return res.status(500).send({
                message: "Error deleting cart with id " + req.params.id
            });
        });
};
