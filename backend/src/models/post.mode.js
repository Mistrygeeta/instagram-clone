const mongoose = require("mongoose");


const postSchema = new mongoose.Schema({
    user_id:{
        type: mongoose.Schema.Types.objectId,
        ref : "user"
    },
    imageUrl:{
        type : [string],
        required : true
    },
    location:{
        type: String
    },
    caption:{
        type: String
    },
    tags:[{
        type : mongoose.Schema.Types.objectId,
        ref :"user"
    }],
},
{
    timestamps : true
},
)


const postModel = mongoose.model("posts", postSchema);

module.exports = postModel