const express=require('express');
const asyncHandler=require('express-async-handler');
const router=express.Router();
const Post=require('../models/postsModel');
const Comments=require('../models/commentModel');
const User=require('../models/userModel')


//CREATE
router.post('/create',asyncHandler(async(req,res)=>{
    const newPost=new Post(req.body);
// console.log(req.body +":Cerate")
    try{
        const savedPost= await newPost.save()
        // console.log(savedPost+" asve sjdjkd");
        res.status(200).json({

            savedPost,
            message:"Expressed Successfully"
        });
    }
    catch(err){
        // console.log(req.body+" data");
        console.log("Error :"+err)
        res.status(400).send(err);
    }
}));

//UPDATE
router.put("/update/:id",asyncHandler(async(req,res)=>{
    const post=await Post.findById(req.params.id);
  post.title=req.body.title;
  post.description=req.body.description;
    try{
const updatedPost=await post.save();

    
    
  
    res.status(200).json({
        _id:updatedPost._id,
        title:updatedPost.title,
        description:updatedPost.description,

      
    });
        }
    
    catch(err){
        console.log("Update error "+err);
        res.status(400).send(err);
    }
}));

//DELETE
router.delete("/delete/:id",asyncHandler(async(req,res)=>{
    try{
        //  console.log("andar");
const post=await Post.findById(req.params.id);
await post.delete();
try{
const commented=await Comments.findOneAndDelete({postId:req.params.id});

}
catch(err)
{
    console.log("error "+err);
}

res.status(200).json("Post deleted..");
    

    }
    catch(err){
res.status(400).json("Try after Sometime")
    }
}));




//GET USERS POSTS by UserId
router.get('/myPosts/:id',asyncHandler(async(req,res)=>{
  
  try{
    const user=await User.findById(req.params.id);


    const{name}=user;
    
//  console.log(name+"  :names")
    // console.log(name +" name");
    try{
        const posts=await Post.find({name});
        // console.log("Posts   : "+posts);
        if(posts){
            res.status(200).send(posts);
        }
        else{
            res.status(201).send("Try Later");
        }
    }
    catch(err){
        res.status(400).send("Please,Try After Sometime");
    }
    }
    catch(err){
        res.status(400).send("try later")
    }

}));


//GET Posts using ID

router.get("/detail/:id",asyncHandler(async(req,res)=>{
    try{
const post=await Post.findById(req.params.id);
//  console.log(post+"called  ")
res.status(200).json(post);
    }
    catch(err){
res.status(501).json({
    message:"Something Went Wrong!!"
})
    }
}));

//Get ALL POSTS
router.get('/getAll',asyncHandler(async(req,res)=>{
 try{
const posts=await Post.find({});
// console.log(posts)
res.status(200).json(
    posts
)
 }
 catch(err){
     res.status(501).json({
         message:"Something Wnet Wrong!!"
     })
 }
}));

//GET USER POSTS


module.exports=router;