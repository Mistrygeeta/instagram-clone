const userModel = require("../models/user.model");
const cacheClient = require("../services/cache.services");
const jwt = require("jsonwebtoken");


const authMiddleware = async(req, res,next)=>{
    try {
        let token = req.cookies?.token;

        if(!token){
            return res.status(404).json({
                message : "Token not foundd, unauthorized user"
            })
        };

        let isBlackListed = await cacheClient.get(token);

        if(isBlackListed){
            return res.status(401).json({
                message: "Token is Blacklisted or expired"
            })
        } ;
        
        let decode = jwt.verify(token,process.env.JWT_SECRET);

        if(!decode){
            return res.status(403).json({
                message : "Invalid Token"
            })
        }
        let user = await  userModel.findById(decode.id);
        req.user = user
        
        next();
    } catch (error) {
        console.log("error in authmiddleware", error)
        return res.status(500).json({
            message : "Internal server error"
        })
    }
};

module.exports = authMiddleware;