const mongoose=require('mongoose');
const commentSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    postId:{
type:String,
required:true,
    }
    ,
    commented:{
        type:String,
        required:true,
    },
      
    
});
//const User=mongoose.model('User',userSchema);
const Comments=mongoose.model('Comments',commentSchema);
module.exports=Comments;