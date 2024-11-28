import { ApiError } from "../utils/ApiError.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import { User } from "../models/user.model.js"
import { asyncHandler } from "../utils/AsyncHandler.js"

const registerUser = asyncHandler(async (req,res) =>{
    // get user details from req 
    // validate details
    // check if user already exists
    // create entry in user collection 
    // check user is created or not
    // return response without passwords,refresh token


    const {fullName,userName,email,password} = req.body
    if([fullName,userName,email,password].some((variable)=> variable?.trim()==="")){
        throw new ApiError(404,"All fields are required")
    }
    const existedUser = await User.findOne(email)
    if(existedUser){
        throw new ApiError(404,"User already exists")
    }
    const newUser = await User.create({userName,fullName,email,password,avatar : "",coverImage : "", refreshToken : ""})
    const createdUser = await User.findById(newUser?._id).select("-password -refreshToken")
    if(!createdUser){
        throw new ApiError(505,"Error while regestering user")
    }
    
    return res.status(200).json(new ApiResponse(200,createdUser,"User created successfully"))


    
})





