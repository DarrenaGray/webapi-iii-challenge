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

module.exports = router;