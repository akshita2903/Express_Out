const express=require('express');
const asyncHandler=require('express-async-handler');
const router=express.Router();
const Post=require('../models/postsModel');


//CREATE
router.post('/create',asyncHandler(async(req,res)=>{
    const newPost=new Post(req.body);

    try{
        const savedPost=newPost.save();
        res.status(200).json({

            savedPost,
            message:"Expressed Successfully"
        });
    }
    catch(err){
        res.status(500).json({
            message:"Something Went Wrong!!"
        });
    }
}));

//UPDATE
router.post("/update/:id",asyncHandler(async(req,res)=>{
    try{
const post=await Post.findById(req.params.id);
if(post.name === req.body.name){
    

try{
const updatedPost=await Post.findByIdAndUpdate(req.params.id,{
    $set:req.body,
},
{
    new:true
});
res.status(200).json({
    updatedPost,
    message:"You succeeded in changing your views"
});
}
catch(err){
    res.status(500).json({
        message:"Something Went Wrong!!"
    })
}
}
else{
    res.status(401).json({
        message:"You can change your Own Views Only"
    })
}
    }
    catch(err){
        res.status(500).json({
            message:"Something Went Wrong!!"
        })
    }
}))

//DELETE
router.delete("/delete/:id",asyncHandler(async(req,res)=>{
    try{
const post=await Post.findById(req.params.id);
if(post.name === req.body.name){
    

try{
await post.delete();
res.send(200).json({
    message:"You deleted your Own View"
})
}
catch(err){
    res.status(500).json({
        message:"Something Went Wrong!!"
    })
}
}
else{
    res.status(401).json({
        message:"You can delete your Own Views Only"
    })
}
    }
    catch(err){
        res.status(500).json({
            message:"Something Went Wrong!!"
        })
    }
}))


//GET Users Post

router.get("/detail/:id",asyncHandler(async(req,res)=>{
    try{
const post=await Post.findById(req.params.id);
// console.log(post)
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
}))


module.exports=router;