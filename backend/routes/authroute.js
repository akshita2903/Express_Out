const express=require('express');
const asyncHandler=require('express-async-handler');
const router=express.Router();
const User=require('../models/userModel');
const generateToken = require('../util/generateToken');

router.post('/signup',asyncHandler(async(req,res)=>{



    const{name,email,password}=req.body
    console.log(req.body)
    try{

    const doesexist=await User.findOne({email});
    if(doesexist){
        res.status(200).json({
            status:300,
           // message:"Email already exist"
        })
      //  throw new Error("User already Exists");
    }
    else{
        const user=await User.create({
            name,email,password
        });
        if(user) {
            res.status(201).json({
                status:200,
                _id:user._id,
                name:user.name,
                email:user.email,
                token:generateToken(user._id),
               // message:"Sign Up Successfully"
            })
        }
        else{
            res.status(200).json({
                status:400,
                message:"Some Error occured"
            })
           // throw new Error("Error occured")
        }
       res.json({
           name,email
       })
    }

    }
    catch(err){
        console.log(err)
    }
}));
router.post('/login',asyncHandler(async(req,res)=>{
const {email,password}=req.body;
try{
    // console.log(email+" backend "+password);
const user=await User.findOne({email});
//console.log(user);
const validP=await user.matchPassword(password);
console.log(validP);


if(user  && validP){
    res.status(200).json({
        status:200,
        _id:user._id,
        name:user.name,
        email:user.email,
        token:generateToken(user._id),
        message:"Login Successfully"
        
    });
  //  windows.alert("Logged In successfully");
}
else {
    res.status(200).json({
        status:300
    });
//throw new Error("Errorrrr")
}
}
catch(err){
    console.log(err);
}
}));
module.exports=router;