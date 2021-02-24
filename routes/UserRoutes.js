const express = require('express');
const Router = express.Router();
const { postUsers, signIn } = require('../controllers/UserControllers');
const { protected } = require('../middleware/Protected');

Router.route('/signUp')
    .post(postUsers)

Router.route('/signIn')
    .post(signIn)
    .get(protected, function (req, res, next) {
        console.log(req.user);
        res.status(200).json({
            msg: 'salut'
        });
    })

module.exports = Router;