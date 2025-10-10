const mongoose = require("mongoose");

const connectDB = async()=>{
    try {
        let res = await mongoose.connect(process.env.MONGODB_URI)
        if(res){
            console.log("DB connected successfully")
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDB