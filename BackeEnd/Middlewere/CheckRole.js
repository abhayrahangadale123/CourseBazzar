
 
// let jwt = require("jsonwebtoken")

// function checkRole(role){

//     return async (req,res,next)=>{
//         let token = req.headers.authorization;
//         if(!token){
//             return res.send("unauthorization user");
//         }
//         else{
//            let decodeToken = jwt.verify(token,"abcxyz");
//            console.log(decodeToken,'kkkkkkkkkkkkkkkkk');
//            req.user = await User.findById(decoded.id).select('-password');
//            next();
           
       
           
//         //    if(decodeToken.role!=role){  // this right and ..
//         if (!role.includes(decodeToken.role)) {  // this is also right..
//             return res.send("acesss denideeeee")
//            }
//            else{
//             next();
//            }
//         }
//     }
// }
// module.exports=checkRole



const jwt = require('jsonwebtoken');
const User = require('../Models/userModel');


const protect = async (req, res, next) => {
  let token;

  if (req.headers.authorization) {
    try {
      token = req.headers.authorization;
      console.log(token,"tttttttttttttttttttttt");
      
      const decoded = jwt.verify(token,process.env.jwt_key);
      req.user = await User.findById(decoded.id).select('-password');
      next();  
    } catch (error) {
      res.status(401).json({ message: 'Not authorized, token failed' });
    }
  }

  if (!token) {
    res.status(401).json({ message: 'Not authorized, no token' });
  }
};

// admin check course Approved and Reject for using
const adminProtect = (req, res, next) => {
  if (req.user.role === 'admin') {
    next();
  } else {
    res.status(403).json({ message: 'Access denied, admin only' });
  }
};

// course create for using
const  createCourse = (req, res, next) => {
  if (req.user.role === 'admin'||req.user.role === 'Instructor') {
    next();
  } else {
    res.status(403).json({ message: 'Access denied, admin  and Instructors only' });
  }
};

module.exports = { protect, adminProtect,createCourse};

 