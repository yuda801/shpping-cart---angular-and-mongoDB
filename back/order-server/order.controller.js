const Order = require('./order.model');

// Create and Save a new order
exports.create = (req, res) => {
    // Validate request
    if (!req.body.userID) {
        return res.status(400).send({
            message: "userID can not be empty"
        });
    }



    // Create a order
    let tempID = 0
    const order = new Order({
        
        orderID: req.body._id || ++tempID,
        userID: req.body.userID || ++tempID,
        cartID: req.body.cartID || 0,
        city: req.body.city || "city",
        street: req.body.street || "street",
        deliveryDate: req.body.deliveryDate || "0-0-0",
        fourDigits: req.body.fourDigits || 0
        
    });

    // Save order in the database
    order.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the order."
            });
        });
};

// Retrieve and return all order from the database.
exports.findAll = (req, res) => {
    Order.find().then(order => {
        res.send(order);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving order."
        });
    });
};

// Find a single order with a id
exports.findOne = (req, res) => {
    Order.findById(req.params.id)
        .then(order => {
            if (!order) {
                return res.status(404).send({
                    message: "order not found with id " + req.params.id
                });
            }
            res.send(order);
        }).catch(err => {
            if (err.kind === 'id') {
                return res.status(404).send({
                    message: "order not found with id " + req.params.id
                });
            }
            return res.status(500).send({
                message: "Error retrieving order with id " + req.params.id
            });
        });
};

// Find a single order with a id and delete it
exports.delete = (req, res) => {
    Order.deleteOne(req.params.id)
        .then(order => {
            if (!order) {
                return res.status(404).send({
                    message: "order not found with id " + req.params.id
                });
            }
            res.send(order);
        }).catch(err => {
            if (err.kind === 'id') {
                return res.status(404).send({
                    message: "order not found with id " + req.params.id
                });
            }
            return res.status(500).send({
                message: "Error deleting order with id " + req.params.id
            });
        });
};
