const express=require('express');
const asyncHandler=require('express-async-handler');
const router=express.Router();
const bcrypt=require('bcryptjs');
const User=require('../models/userModel');
const generateToken = require('../util/generateToken');
//router.use(cookie);
router.post('/signup',asyncHandler(async(req,res)=>{

const{name,email,password}=req.body;
const userExist=await User.findOne({email});
const nameExist=await User.findOne({name});
if(nameExist){
    res.status(202).send("Name Already Exsist");
}
if(userExist)
{
    console.log("Already Exist");
    res.status(201).send("User Already Exist");
}
else{
    const user=await User.create({
        name,
        email,
        password
    });
    if(user){
        res.status(200).json({
            _id:user._id,
            name:user.name,
            email:user.email,
            token:generateToken(user._id),
        })
    }
    else{
        res.status(400).send("User not Found");
    }
}
}));
router.post('/login',asyncHandler(async(req,res)=>{
const {email,password}=req.body;
try{
    // console.log(email+" backend "+password);
const user=await User.findOne({email});
//console.log(user);
const validP=await user.matchPassword(password);


if( !user || !validP){
    
      res.status(201).send("Incorrect Details")
  //  windows.alert("Logged In successfully");
}

    else{
        res.status(200).json({
            status:200,
            _id:user._id,
            name:user.name,
            email:user.email,
            token:generateToken(user._id),
            
            
        });
    }
//throw new Error("Errorrrr")

}
catch(err){
    
    res.status(400).send("Try After Sometime");
}
}));
//Update Password
 router.put('/changePassW',async(req,res)=>{
    const{email}=req.body;
    
    const user=await User.findOne({email});
    if(!user){
        res.status(201).send("Email Not exist");
    }
   else{
    //    console.log(user._id);
if(req.body.password){
   user.password=req.body.password;
}
    try{
// console.log(password)
console.log("Before saving");


const updatedUser=await user.save();
res.status(200).json({
    _id:updatedUser._id,
    email:updatedUser.email,
    token:generateToken(updatedUser._id),
});
    }

    
catch(err){
    console.log(err+" error")
res.status(401).send("Something Went Wrong!!");
}
 }
}
 );


module.exports=router;