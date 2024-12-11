let express = require("express");
const courseSchema = require("../Models/courseSchema");
const { model } = require("mongoose");
let router = express.Router();

router.get("/AllCourse", async (req,res)=>{
    let allCourses = req.body;
    console.log("all",allCourses);
    
    let showCourse = await courseSchema.find();
    res.send(showCourse);
    // console.log(showCourse);
    
})
module.exports=router