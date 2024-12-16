let express = require("express");
 
const User = require("../Models/userModel");
let bcrypt = require("bcryptjs")
let jwt = require("jsonwebtoken")
 

let Router = express.Router();

Router.post("/login", async (req, res) => {
    let user = req.body;
    let data = await User.findOne({ email:user.email });

    if (data) {
        let vaildData = await bcrypt.compare(user.password,data.password);
        if (vaildData) {
       
            let token = jwt.sign({id:data._id, email:data.email, role:data.role }, process.env.jwt_key);
            console.log(token, "tokennnnnnn");
            res.send({ token });
        }
        else {
            res.send("Invalid Passsssssssssssss")
        }

    }
    else {
        res.send("phle account create kro")
    }
})

module.exports = Router