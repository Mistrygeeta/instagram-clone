const userModel = require("../models/user.model");

const registrationController = async(req , res)=>{
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
    } catch (error) {
        return res.status(500).json({
            message :" Internal server error",
            error: error
        })
    }
}