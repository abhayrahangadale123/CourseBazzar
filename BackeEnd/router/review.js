let express = require("express")
let router = express.Router()

const reviewSchema = require("../Models/review");
const courseSchema = require("../Models/courseSchema")
const {protect} = require("../Middlewere/CheckRole");


router.post("/review",protect ,async (req,res)=>{
    let {_id,rating,comment} = req.body;
    console.log(_id);
    

    let course = await  courseSchema.findOne(_id);
    // let  review = await   reviewSchema.findOne();
    if(!course){
        res.send("course not found")
    }
     // Check if the user has already reviewed this course
  const alreadyReviewed = await  reviewSchema.findOne({
    course:_id,
    user: req.user._id,
  });

  if (alreadyReviewed) {
    return res.status(400).json({ message: 'You have already reviewed this course' });
  }

  // Create a new review
  const review = new  reviewSchema({
    course:_id,
    user: req.user._id,
    rating,
    comment,
  });

  await review.save();

  res.status(201).json({ message: 'Review added successfully', review });
})
module.exports = router;