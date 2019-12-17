'use strict';
const Helper = require('../utils/Helper');
const bcrypt = require('bcrypt');
const Agent = require('../models/agent').Agent;
module.exports = {
    create (req, res) {
        //first off, create user record for this customer
        return Agent.create({
            name : req.body.name,
            email : req.body.email,
            password : req.body.password,
            role_id : 1
        })
        .then(function(resp){
            Customer.create({
                user_id : resp.dataValues.id,
                address : req.body.address,
                gender : req.body.gender,
                whatsapp_phone_number : req.body.whatsapp_phone_number
            }).then(function(cust_resp) {
                //pull the created user by its user id along with the customer object
                Customer.findOne({
                    where : {id : cust_resp.id},
                    include : 'user'
                }).then((customer) => {
                    var data = {
                            token : Helper.generateToken(customer.user_id.toString()),
                            customer : customer,
                    };
                    res.status(400).send(Helper.apiResponseFormat(true, 201, 'Registration successful!', data));
                }).catch((error) => {

                });
                
            }).catch(errs => res.status(500).send(errs))
        })
        .catch(function(error) {
            res.status(500).send(error);
        })
        //afterwards, create customer record 
        // and associate the user with the customer using the foreign key
        
        // if(errors.length > 0) {
        //     return res.status(201).send(customer_response)
        // }else{
        //     return res.status(201).send(errors)
        // }
    },

    fundWallet (req, res) {
        return res.send('Wallet funded successfully!!');
    },

    transactions (req, res) {
        return res.send('Agent transactions!');
    }
}
