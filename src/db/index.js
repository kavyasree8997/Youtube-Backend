import mongoose from "mongoose";
import { dbName } from "../constants.js";

const connectDB = async()=>{
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${dbName}`);
        console.log(`MongoDB connected... ${connectionInstance.connection.host}`);
    }
    catch(error){
        console.log(`MongoDB connection error ${error}`);
        process.exit(1)
    }
    
}


export {connectDB};
















// async function connectDB(){
    
// }