const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const {Admin, Course} = require("../db");

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic

    console.log("In admin");
    const username = req.body.username;
    const password = req.body.password;

    console.log(username+" "+password);
    const newAdmin = new Admin({
        username: username,
        password: password
    });

    await newAdmin.save();

    res.json({
        message: 'Admin created successfully'
    })

});

router.post('/courses', adminMiddleware,async (req, res) => {
    // Implement course creation logic

    const title = req.body.title;
    const desc = req.body.description;
    const price = req.body.price;
    const imagelink = req.body.imagelink;

    const newCourse = new Course({title, desc, price, imagelink});

    const courseCreated = await newCourse.save();

    res.status(201).json({
        msg:"New Course Created",
        courseId: courseCreated._id 
    });


});

router.get('/courses', adminMiddleware,async (req, res) => {
    // Implement fetching all courses logic
    const response = await Course.find();
    res.json({
        Courses:response
    });
});

module.exports = router;