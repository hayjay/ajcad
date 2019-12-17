require('dotenv').config(); // this is important!
const CONFIG = require('../config/app_config');
module.exports = {
    "development": {
        "username": CONFIG.db_user,
        "password": CONFIG.db_password,
        "database": CONFIG.db_name,
        "host": CONFIG.db_host,
        "dialect": CONFIG.db_dialect
    },
    "test": {
        "username": "root",
        "password": null,
        "database": "database_test",
        "host": "127.0.0.1",
        "dialect": "mysql"
    },
    "production": {
        "username": "root",
        "password": null,
        "database": "database_production",
        "host": "127.0.0.1",
        "dialect": "mysql"
    }
};
