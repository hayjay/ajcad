'use strict';
module.exports = function(app){
    let agent = require('../controllers/agentController')
    app.route('/agent/create')
        .post(agent.create)
    app.route('/agent/transactions')
        .get(agent.transactions)
    
}