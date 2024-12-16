let express = require("express")
let router = express.Router()

const CourseSchema = require("../Models/courseSchema");
const {protect,adminProtect} = require("../Middlewere/CheckRole");

router.post("/ApprovedStatus",protect,adminProtect, async (req, res) => {

    let { _id } = req.body;
    console.log(_id);


    const course = await CourseSchema.findById(_id);
    if (!course) {
        return res.status(404).json({ message: 'Course not found' });
    }
    course.status = 'Approved';
    await course.save();
    res.status(200).json({ message: 'Course approved successfully', course })


})


// reject course....
router.post("/RejectStatus",protect,adminProtect, async (req, res) => {

    let { _id,reason} = req.body;
    console.log(_id);
    

    const course = await CourseSchema.findById(_id);
    if (!course) {
        return res.status(404).json({ message: 'Course not found' });
    }
    course.status = 'Rejected';
    course.reason=reason;
    await course.save();
    res.status(200).json({ message: 'Course  Rejected successfully', course })


})

module.exports = router;
