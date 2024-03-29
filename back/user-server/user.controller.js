const User = require('./user.model');

// Create and Save a new User
exports.create = (req, res) => {
    // Validate request
    if (!req.body.firstName) {
        return res.status(400).send({
            message: "firstName can not be empty"
        });
    }

    // Create a user
    let tempID = 0
    const user = new User({
        roll: req.body.roll || "users role",
        userID: req.body.userID || ++tempID,
        password: req.body.password || "password",
        firstName: req.body.firstName || "first-name",
        lastName: req.body.lastName || "last-name",
        userName: req.body.userName || "usersEmail",
        ssn: req.body.ssn || 11111111,
        buyerCity: req.body.buyerCity || "buyerCity",
        buyerStreet: req.body.buyerStreet || "buyerStreet",
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

// Find a single user with a id and delete it
exports.delete = (req, res) => {
    User.deleteOne(req.params.id)
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
                message: "Error deleting user with id " + req.params.id
            });
        });
};
