import express from 'express';
const app = express();
// app.use(express.urlencoded({extended : true}))
// app.use(express.static("public"))
import userRouter from "./routes/user.routes.js";


app.use("/users",userRouter)
export {app};