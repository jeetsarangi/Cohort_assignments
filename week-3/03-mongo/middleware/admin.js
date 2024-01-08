const { Admin } = require('../db');
// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const username = req.headers.username;
    const password = req.headers.password;
    console.log(username+" "+password);
    try{
        const exists = await Admin.findOne({username,password});
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

module.exports = adminMiddleware;