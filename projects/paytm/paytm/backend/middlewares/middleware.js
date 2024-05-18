const jwt = require('jsonwebtoken');
const JWT_SECRET = require('../config');

function authmiddleware(req, res, next) {

    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(403).json({});
    }

    const jwtToken = authHeader.split(' ')[1];
    
    console.log(JWT_SECRET);
    try{
        const decoded_res = jwt.verify(jwtToken, JWT_SECRET);
        req.userId = decoded_res.userId;
        next();
        
    }
    catch(error){
        console.log(error);
        res.status(403).json({})
    }
}

module.exports = authmiddleware;