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


// midle were json ka
app.use(express.json())

// from ke liye midle were
app.use(express.urlencoded({ extended: true }))
 
 

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("MongoDB Connected successfully !!");
    
}).then((err)=>{
    console.log('Error connecting to  MongoDB:',err);
    
})

app.get("/",(req,res)=>{
    res.send("Final connectionssssssssss");
})


//singup call
app.use("/api",signup)
//Login call
app.use("/api",Login)
// forgest password
app.use('/api',forgetRouter) 
// reset_Password
app.use("/api",Reset_Pass)


function checkRole(role){
    return(req,res,next)=>{
        let token = req.headers.authorization;
        if(!token){
            return res.send("unauthorization user");
        }
        else{
           let decodeToken = jwt.verify(token,process.env.jwt_key);
       
           
           if(decodeToken.role!=role){
            return res.send("acesss denideeeee")
           }
           else{
            next();
           }
        }
    }
}

// tokan create and fillter data Admin ka ya user ka haiiiiiii

app.get("/admin",checkRole("admin"),(req,res)=>{
    res.send("admin accesss onlyyyy admin")
})
app.get("/student",checkRole("student"),(req,res)=>{
    res.send("user access onlyyyyy user")
})


app.listen(port||8000,(req,res)=>{
    console.log(`server connect and working  port no ${port}`);
    
})