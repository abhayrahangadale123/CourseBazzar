let express = require("express")
let router = express.Router()

const UserSchema = require("../Models/userModel");
const {protect,adminProtect} = require("../Middlewere/CheckRole");


router.get("/user/profile", protect,adminProtect ,async (req,res)=>{
    
    let UserData = await  UserSchema.find({role:"user"});
    if(!UserData){
        res.send("user Not found")
    }
    res.status(200).json({
        count: UserData.length,
        users: UserData
    });
    

})

module.exports = router