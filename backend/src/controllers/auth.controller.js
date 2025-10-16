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
        let token = newUser.JWTTokenGeneration();

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
    let decryptPassword = await user.comparePassword(password);
    if(!decryptPassword){
        return res.status(401).json({
            message : "Invalid credential"
        })
    }

    let token = user.JWTTokenGeneration();

    res.cookie("token", token);

    res.status(200).json({
        message : "user loggedIn successfully"
    })
    } catch (error) {
        console.log("error in login", error)
        return res.status(500).json({
            message: "Internal server error"
        })
    }
};

const logoutController = async (req, res) => {
  try {
    let token = req.cookies?.token;

    if (!token) {
        console.log("token error", error)
      return res.status(404).json({
        message: "Token not found, Unauthorize user",
      });
    }

    await cacheClient.set(token, "blacklisted");

    res.clearCookie("token");

    return res.status(200).json({
      message: "user logged out",
    });
  } catch (error) {
    console.log("error in logout", error)
    return res.status(500).json({
      message: "Internal server error",
      error: error,
    });
  }
};

const forgotpasswordController = async(req, res)=>{
    try {
        let {email, password}= req.body;

        let user = await userModel.findOne({
            $or: [{email},{mobile}]
        });

        if(!user){
            return res.status(404).json({
                message: "user not found"
            })
        };

    } catch (error) {
        return res.status(500).json({
            message : "Internal server error",
            error: error
        })
    }
}

module.exports ={registerController,loginController,logoutController}