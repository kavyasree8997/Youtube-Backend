import mongoose from "mongoose"

const videoSchema = new mongoose.Schema(
    {
        videoFile : {
            type : String,
            required : true
        },
        title : {
            type : String,
            required : true
        },
        thumbnail : {
            type : String,
            required : true,
        },
        description : {
            type : String,
            required : true
        },
        duration : {
            type : String,
            required : true
        },
        views : {
            type : Number,
            default : 0
        },
        isPublished : {
            type : Boolean,
            default : false
        },
        owner : {
            type : mongoose.Schema.Types.ObjectId,
            ref : "User"
            
        }
    },
    {timestamps : true})

export const Video = mongoose.model("Video",videoSchema);

//video model created