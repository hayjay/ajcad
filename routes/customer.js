'use strict';
module.exports = function(app){
    let customer = require('../controllers/customerController')
    app.route('/customer/create')
        .post(customer.create)
}