'use strict';
module.exports = function(app){
    let agent = require('../controllers/agentController')
    app.route('/agent/fund-wallet')
        .get(agent.fundWallet)
    app.route('/agent/transactions')
        .get(agent.transactions)
    
}