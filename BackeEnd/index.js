let express =require("express");
 let app = express();
 let jwt = require("jsonwebtoken")
 let cors = require("cors")
 app.use(cors())
 
 let mongoose = require("mongoose");
 
 const env = require('dotenv');
 env.config();
 const port = process.env.PORT;
 
 
 let signup = require("../BackeEnd/router/singup")
 let Login = require("../BackeEnd/router/Login")
 let forgetRouter=require('./router/forgest')
 let Reset_Pass = require("../BackeEnd/router/Reset_Pass")
 let Course = require("../BackeEnd/router/Course")
 let GetAllCourse = require("../BackeEnd/router/GetAllCourse")
 let ApprovedStatus=require("../BackeEnd/router/CheckStatus")
 let RejectStatus=require("../BackeEnd/router/CheckStatus")
 let review = require("../BackeEnd/router/review")
 let UserCount = require("../BackeEnd/router/UserCount")


// midle were json ka
app.use(express.json())

// from ke liye midle were
app.use(express.urlencoded({ extended: true }))
 
 

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("MongoDB Connected successfully !!");
    
}).then((err)=>{
    console.log('Error connecting to  MongoDB:',err);
    
})



//singup call
app.use("/api",signup)
//Login call
app.use("/api",Login)
// forgest password
app.use('/api',forgetRouter) 
// reset_Password
app.use("/api",Reset_Pass)
// Course api
app.use("/api",Course)
//  GetAllCourse api
app.use("/api",GetAllCourse)
// CheckStatus ApprovedStatus api
app.use("/api",ApprovedStatus)
// CheckStatus RejectStatus  api
app.use("/api",RejectStatus)
//  review  api
app.use("/api",review)
//  user count  api user kitne hai
app.use("/api",UserCount)




 
app.listen(port||8000,(req,res)=>{
    console.log(`server connect and working  port no ${port}`);
    
})