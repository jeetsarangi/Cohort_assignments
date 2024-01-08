const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const {User, Course} = require("../db");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    console.log(username+" "+password);
    const newUser = new User({
        username: username,
        password: password
    });

    await newUser.save();

    res.json({
        message: 'User created successfully'
    })

});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const response = await Course.find();
    res.json({
        Courses:response
    });
});

router.post('/courses/:courseId', userMiddleware,async (req, res) => {
    // Implement course purchase logic

    await User.updateOne({username:req.headers.username},{
        '$push':{
            purchasedCourses: req.params.courseId
        }
    });

    res.json({
        'msg':'Purchased Complete'
    });


});

router.get('/purchasedCourses', userMiddleware,async (req, res) => {
    // Implement fetching purchased courses logic

    const user_res = await User.findOne({
        username: req.headers.username
    });
    // console.log(req.headers.username);
    // console.log(user_res);
    // console.log(user_res.purchasedCourses);
    const courses = await Course.find({
        _id:{
            '$in':user_res.purchasedCourses
        }
    });

    res.json(courses);

});

module.exports = router