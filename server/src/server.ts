import express ,{Request,Response,Express} from "express";
import session from 'express-session'
import passport from 'passport'
import userRoutes from "./../routes/userRoute";
import PersonRoutes from "./../routes/robotroute"
import dotenv from "dotenv";
import bodyParser,{ json } from "body-parser";
import connectDB from "../config/db"
import './../config/passport'; 
dotenv.config();

const app:Express=express();
connectDB();
app.use(session({
    secret: 'usersession',
    resave: false,
    saveUninitialized: false
  }));
  app.use(passport.initialize());
  app.use(passport.session());
  
app.use(json())
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/",(req:Request,res:Response)=>{
    res.send("Hello world ")
})

app.use("/user",userRoutes);
app.use("/robot",PersonRoutes)
app.listen(process.env.PORT,()=>{console.log(`server started at port ${process.env.PORT}`)});