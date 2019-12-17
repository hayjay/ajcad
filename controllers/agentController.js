'use strict';
const Helper = require('../utils/Helper');
const bcrypt = require('bcrypt');
const Agent = require('../models/agent').Agent;
module.exports = {
    create (req, res) {
        //first off, create user record for this customer
        return Agent.create({
            unique_id : (new Date().getTime()).toString(12),
            pin : req.body.pin,
            phone_number : req.body.phone_number,
            // phone_number : req.body.phone_number
        })
        .then(function(agent_response){
            var data = {
                agent : agent_response,
            };
        res.status(400).send(Helper.apiResponseFormat(true, 201, 'Agent Registration successful!', data));
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
