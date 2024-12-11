let express = require("express");
const courseSchema = require("../Models/courseSchema");
let router = express.Router();

router.post("/course",async (req,res)=>{
    let course = req.body;
    console.log(course);
    
    let dbUser = await courseSchema.create({
        title:course.title,
        description:course.description,
        category:course.category,
        price:course.price,
        level:course.level,
        language:course.language,
        status:course.status,
        videos:course.videos,
        resources:course.resources       

    })
    await dbUser.save();
    res.send("Corse create succefully")
    console.log("couse done");
    
  
})


module.exports = router