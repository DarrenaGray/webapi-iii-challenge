const express = require('express');

const Users = require('./userDb');

const router = express.Router();

router.get('/', (req, res) => {
    Users
        .get()
        .then(users => {
            res.status(200).json(users);
        })
        .catch(err => {
            res.status(500).json({
                error: err,
                message: "The user information could not be retrieved"
            });
        });
});

router.get('/:id', (req, res) => {
    const userId = req.params.id;
    Users
        .getById(userId)
        .then(user => {
            if (user) {
                res.json(user);
            } else {
                res.status(404).json({
                    message: "The user with the specified ID does not exist."
                });
            }
        })
        .catch(err => {
            res.status(500).json({
                error: err,
                message: "The user information could not be retrieved."
            })
        });
});

router.post('/', (req, res) => {
    const userInfo = req.body;
    Users
        .insert(userInfo)
        .then(user => {
            res.status(201).json(user);
        })
        .catch(err => {
            res.status(500).json({
                error: err,
                message: "There was an error while saving the user to the database."
            })
        });
});

router.delete('/:id', (req, res) => {
    const userId = req.params.id;
    Users
        .remove(userId)
        .then(deletedUser => {
            if (deletedUser) {
                res.status(201).json({
                    message: "The user was deleted."
                });
            } else {
                res.status(404).json({
                    message: "The user with the specified ID does not exist."
                });
            }
        })
        .catch(err => {
            res.status(500).json({
                error: err,
                message: "The user could not be deleted."
            })
        })
})

module.exports = router;