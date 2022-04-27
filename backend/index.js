const express=require('express');
const sample=require("./testing_data/sample")
const authroute=require('./routes/authroute')
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


app.get('/api/notes/:category_type',(req,res)=>{
    const s_dat=sample.find((n)=> n.category_type == req.params.category_type);
    console.log(s_dat);
res.send(s_dat);
});
//routers
 app.use('/api/auth',authroute);
app.use(notFound);
app.use(errorHandler);
//creating first server
app.listen(5000,console.log("Server started on PORT 5000"));