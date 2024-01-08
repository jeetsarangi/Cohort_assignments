const jwt = require('jsonwebtoken');
const JWT_SECRET = require('../config');

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization;
    const token_array = token.split(" ");
    const jwtToken = token_array[1];

    try{
        const decode_res = jwt.verify(jwtToken, JWT_SECRET);
        if (decode_res.username) {
            req.headers.username = decode_res.username;
            next();
        } else {
            res.status(403).json({
                msg: "You are not authenticated"
            })
        }
    }
    catch(error){
        console.log(error);
        res.status(404).json({
            msg: "Incorrect inputs"
        })
    }
}

module.exports = userMiddleware;