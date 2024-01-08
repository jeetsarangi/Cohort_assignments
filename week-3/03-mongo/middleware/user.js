const { User } = require('../db');
async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const username = req.headers.username;
    const password = req.headers.password;

    // console.log(username);
    try{
        const exists = await User.findOne({username,password});
        if(exists)
        next();
        else
        res.status(404).send("Access Denied");
    }
    catch(error){
        console.log(error);
        res.status(404).send("Error database Connection");
    }
}

module.exports = userMiddleware;