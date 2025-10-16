const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt")
const cacheClient = require("../services/cache.services")

const registerController = async(req , res)=>{
    try {
        let {fullname , username, email , mobile, password} = req.body;

        if(!fullname || !username || !email || !mobile || !password ){
            return res.status(422).json({
                message : "All field are required",
            })
        };
        let existingUser = await userModel.findOne({
            $or: [{email},{username},{mobile}]
        })

        if(existingUser){
            return res.status(401).json({
                message : "user already exist"
            })
        }

        let newUser = await userModel.create({
            fullname,
            username,
            email,
            mobile,
            password,
        })

        if(!newUser){
            return res.status(400).json({
                message : "error in registration"
            })
        }
        let token = jwt.sign({id: newUser._id},process.env.JWT_SECRET,{
            expiresIn :"1h",
        })
        res.cookie("token",token)

        res.status(201).json({
            message : "user registered successfully",
            user : newUser
        })
    } catch (error) {
        console.error("error in register", error)
        return res.status(500).json({
            message :" Internal server error",
            error: error
        })
    }
}

const loginController = async(req,res)=>{
    try {
        let {email, mobile,username, password} = req.body;

    let user = await userModel.findOne({
        $or:[{username},{email},{mobile}]
    })
    if(!user){
        return res.status(404).json({
            message : "user not found"
        })
    }
    let decryptPassword = await bcrypt.compare(password, user.password);
    if(!decryptPassword){
        return res.status(401).json({
            message : "Invalid credential"
        })
    }

    let token = jwt.sign({id: user._id},process.env.JWT_SECRET,{
        expiresIn : "1h"
    })

    res.cookie("token", token);

    res.status(200).json({
        message : "user loggedIn successfully"
    })
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error"
        })
    }
};

const logoutController = async (req, res) => {
  try {
    let token = res.cookies.token;

    if (!token) {
      return res.status(404).json({
        message: "Token not found, Unauthorize user",
      });
    }

    await cacheClient.set(token, "blacklisted");

    res.clearCookies("token");

    return res.status(200).json({
      message: "user logged out",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error: error,
    });
  }
};

module.exports ={registerController,loginController,logoutController}