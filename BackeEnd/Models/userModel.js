// const mongoose = require("mongoose");

// let userSchema = mongoose.Schema({
//      username:{
//         type:String,
//         required:true,
//     },
      
//     email:{
//         type:String,
//         required:true,
//     },
//     password:{
//         type:String,
//         required:true,
//     },
//     role:{
//         type:String,
//         enum:["admin","student","Instructor"],
//         default:"student"
//     },
//     resetToken: String,
//     resetTokenExpiry: Date,
// })

// let User = mongoose.model("user",userSchema);
// module.exports=User;
 

const mongoose = require("mongoose");

// User Schema define karte hain
let userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ["admin", "user", "Instructor"],
        default: "user",
    },
    resetToken: String,
    resetTokenExpiry: Date,
});

// Pehle se exist karte model ko reuse karo, ya naye model ko define karo
const User = mongoose.models.User || mongoose.model("User", userSchema);
module.exports = User;
