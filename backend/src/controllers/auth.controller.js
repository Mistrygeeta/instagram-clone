const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

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
        return res.status(500).json({
            message :" Internal server error",
            error: error
        })
    }
}



module.exports ={registerController}