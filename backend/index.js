const express=require('express');
const cookie=require('cookie-parser')
const sample=require("./testing_data/sample")
const authroute=require('./routes/authroute')
const postroute=require('./routes/postroute')
const dotenv=require('dotenv');
const app=express();
dotenv.config();
const connectDB=require('./config/db');
const { errorHandler, notFound } = require('./middleWares/error_MiddleWare');


connectDB();
app.use(express.json())

//it serves backend to front end
app.get('/api',(req,res)=>{
    res.send("API is running");
});

app.get("/api/notes",(req,res)=>{
    res.json(sample)
});



//routers
 app.use('/api/auth',authroute);
 app.use('/api/post',postroute);

//creating first server
app.listen(process.env.PORT,console.log("Server started on PORT 5000"));