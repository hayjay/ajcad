const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const CONFIG = require('../config/app_config');

module.exports = {
    /**
     * Hash Password Method
     * @param {string} password
     * @returns {string} returns hashed password
     */
    hashPassword(pin) {
        return bcrypt.hashSync(pin, bcrypt.genSaltSync(12))
    },
    /**
     * comparePassword
     * @param {string} hashPin 
     * @param {string} pin
     * @returns {Boolean} return True or False
     */
        //   this helper method will be needed when an agent wants to log in to the system
    comparePin(hashPin, pin) {
        return bcrypt.compareSync(pin, hashPin);
    },
    /**
     * isValidEmail helper method
     * @param {string} email
     * @returns {Boolean} True or False
     */
    /**
     * Gnerate Token
     * @param {string} id
     * @returns {string} token
     */
    generateToken(id) {
        const token = jwt.sign({
            _id: id
        },
        CONFIG.jwt_encryption, { expiresIn: '7d' }
        );
        return token;
    },

    apiResponseFormat(status, code, message, data){
        data = {
            status : status,
            code : code,
            message : message,
            data : data
        };
        return data;
    }
}
