const Operation = require('./operation.model');

// Create and Save a new Note
exports.create = (req, res) => {
    if (!req.body.accountNumber) {
        return res.status(400).send({
            message: "account number can not be empty"
        });
    }

    // Create an operation
    const operation = new Operation({
        operationId: req.body.operationId || 0000,
        accountNumber: req.body.accountNumber || 0000,
        type: req.body.type || 'NUll',
        ammount: req.body.ammount || 0,
        interest: req.body.interest || 0,
        payments: req.body.payments || 0,
        operationDate: req.body.operationDate || '0-0-0'
    });

    // Save Operation in the database
    operation.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the operation."
            });
        });
};

// Retrieve and return all operation from the database.
exports.findAll = (req, res) => {
    Operation.find().then(operation => {
        res.send(operation);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving operation."
        });
    });
};

// Find a single operation with a operationId
exports.findOne = (req, res) => {
    Operation.findById(req.params.operationId)
        .then(operation => {
            if (!operation) {
                return res.status(404).send({
                    message: "Operation not found with id " + req.params.operationId
                });
            }
            res.send(operation);
        }).catch(err => {
            if (err.kind === 'operationId') {
                return res.status(404).send({
                    message: "operation not found with id " + req.params.operationId
                });
            }
            return res.status(500).send({
                message: "Error retrieving operation with id " + req.params.operationId
            });
        });
};

