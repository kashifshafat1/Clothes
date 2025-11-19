import express from "express";
import cors  from "cors";
import 'dotenv/config';
import connectionDB from "./config/mongodb";
import connectCloudinary from "./config/cloudinary";

//APP CONFIG
const app = express()
const port  = process.env.PORT || 4000;
connectionDB()
connectCloudinary()


//Middlewares
app.use(express.json())
app.use(cors())

//API ENDPOINT
app.get('/',(req, res)=>{
    res.send('API Working now!!')
})


app.listen(port, ()=>console.log('server started on port: '+ port))