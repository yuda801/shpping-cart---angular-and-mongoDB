const User = require('./user.model');

// Create and Save a new Note
exports.create = (req, res) => {
    // Validate request
    if (!req.body.name) {
        return res.status(400).send({
            message: "name can not be empty"
        });
    }

    // Create an operation
    const user = new User({
        name: req.body.name || "UnNamed",
        id: req.body.id || 0000
    });

    // Save user in the database
    user.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the user."
            });
        });
};

// Retrieve and return all user from the database.
exports.findAll = (req, res) => {
    User.find().then(user => {
        res.send(user);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving user."
        });
    });
};

// Find a single user with a id
exports.findOne = (req, res) => {
    User.findById(req.params.id)
        .then(user => {
            if (!user) {
                return res.status(404).send({
                    message: "User not found with id " + req.params.id
                });
            }
            res.send(user);
        }).catch(err => {
            if (err.kind === 'id') {
                return res.status(404).send({
                    message: "user not found with id " + req.params.id
                });
            }
            return res.status(500).send({
                message: "Error retrieving user with id " + req.params.id
            });
        });
};
