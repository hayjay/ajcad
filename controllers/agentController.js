'use strict';
const Helper = require('../utils/Helper');
const bcrypt = require('bcrypt');
const Agent = require('../models/agent').Agent;
module.exports = {
    create (req, res) {
        //first off, create user record for this customer
        return Agent.create({
        })
        .then(function(resp){

        })
        .catch(function(error) {
            res.status(500).send(error);
        })
    },

    fundWallet (req, res) {
        return res.send('Wallet funded successfully!!');
    },

    transactions (req, res) {
        return res.send('Agent transactions!');
    }
}
