let express = require("express");
const courseSchema = require("../Models/courseSchema");
const userScehma = require("../Models/userModel")
let router = express.Router();
let  {sendEmail} = require("../utils/SendEmail")
const { model } = require("mongoose");
let { protect, createCourse } = require("../Middlewere/CheckRole")

router.post("/course", protect, createCourse, async (req, res) => {
    let course = req.body;


    console.log(course);
    let dbUser = await courseSchema.create({

        title: course.title,
        description: course.description,
        category: course.category,
        price: course.price,
        level: course.level,
        language: course.language,
        status: course.status,
        videos: course.videos,
        image: course.image,
        resources: course.resources

    })
    await dbUser.save();   // data base me course ko save kr ke use "GetAllCourse" me get kr lenge yha se GetAllCourse me jayenge
    

    const users = await  userScehma.find({ role: 'user' });
    // console.log(users, "Userrrrrrr");

    // if (users.role === 'Student') {
    var emailList = users
        .map((user) => user.email)
        .filter((email) => email);
    // }
    console.log(emailList , "listtttt");
    



    const subject = `New Course Added: ${course.title}`;
    const text = `
  Hello,

  A new course titled "${course.title}" has been added to our platform.

  Category: ${course.category}
  Price: $${ course.price}
  Level: ${ course.level}
  Language: ${ course.language}

  Check it out on our website!

  Regards,
  Your Platform Team
`;


    for (const email of emailList) {
        console.log(subject, text);

        await  sendEmail(email, subject, text);
    }
      
    res.status(201).json({ message: 'Course created successfully', course });

    
  
})

// router.get("/AllCourse", async (req,res)=>{
//     let allCourses = req.body;
//     // console.log("all",allCourses); 
//     let showCourse = await courseSchema.find();
//     res.send(showCourse);


// })


module.exports = router