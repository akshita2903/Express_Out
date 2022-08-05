const express=require('express');
const asyncHandler=require('express-async-handler');
const router=express.Router();
const Post=require('../models/postsModel');

const User=require('../models/userModel');
const Comments=require('../models/commentModel');
//CREATE

router.post('/createComment',asyncHandler(async(req,res)=>{
    const newComment=new Comments(req.body);
// console.log(req.body +":Cerate")
// console.log(newComment);
    try{
        const savedComment= await newComment.save()
        //  console.log(savedComment+" asve sjdjkd");
        res.status(200).json({

            savedComment,
            message:"Expressed Successfully"
        });
    }
    catch(err){
        // console.log(req.body+" data");
        console.log("Error :"+err)
        res.status(400).send(err);
    }
}));
//DELETE
router.delete("/delete/:id",asyncHandler(async(req,res)=>{
    try{
const comment=await Comments.findByIdAndDelete(req.params.id);
// await comment.delete();
// console.log("deleted");
res.status(200).json("comment deleted..");
    

    }
    catch(err){
res.status(400).json("Try after Sometime")
    }
}));
//get
//GET ALL COMMENTS FOR PARTICULAR THOUGHTS
router.get('/getComments/:id',asyncHandler(async(req,res)=>{
    try{
        const comments=await Comments.find({postId:req.params.id});
        // console.log(comments);
        res.status(200).json(comments);
    }
    catch(err)
    {
        res.status(400).json(err);
    }
}));
module.exports=router;