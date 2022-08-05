const express=require('express');
const cors=require('cors');
const sample=require("./testing_data/sample")
const authroute=require('./routes/authroute')
const postroute=require('./routes/postroute')
const commentroute=require('./routes/commentroute')
const dotenv=require('dotenv');
const app=express();
dotenv.config();
const connectDB=require('./config/db');
const { errorHandler, notFound } = require('./middleWares/error_MiddleWare');


connectDB();
app.use(express.json());
app.use(cors());
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    next();
})

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
app.use('/api/comments',commentroute);


 app.get('/',(req,res)=>{
     res.send("Server is running")
 })
 
//creating first server
app.listen(process.env.PORT || 5001,console.log("Server started on PORT 5000"));