const express=require("express");
const {loadCourses,grabCourse, searchCourses, filterQuestions} = require("../controllers/loadCourses");

const router=express.Router();

router.route('/course').post(loadCourses);
router.route('/grabCourse').post(grabCourse);
router.route('/searchCourse').post(searchCourses);
router.route('/filter').post(filterQuestions);


module.exports=router;