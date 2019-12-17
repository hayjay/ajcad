const jwt  = require('jsonwebtoken')
const User = require('../models/user')
const CONFIG = require('../config/app_config');

const auth = async (req,res,next) => {
    try {
        const token = req.header('Authorization').replace('Bearer', '').trim()
        
        const decoded  = jwt.verify(token, CONFIG.jwt_encryption)
       
        const user  = await User.findOne({ id:decoded._id, 'tokens.token': token})

        if(!user){
            throw new Error()
        }
        req.token = token
        req.user = user
        next()
    } catch (error) {
        console.log(error)
        res.status(401).send({error:'Please authenticate!'})
    }
}

module.exports = auth