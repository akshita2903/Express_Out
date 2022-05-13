const mongoose=require('mongoose');
const postSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
type:String,
required:true,
    }
    ,
    name:{
        type:String,
        required:true,
    },
    
});
//const User=mongoose.model('User',userSchema);
const Posts=mongoose.model('Posts',postSchema);

// const new_u=new Posts({
//     name:'AB',
//     title:"Stress",
//     description:"Cause negative effect on ur mind.You start dreaming the undreamt things.With fear or over confident,you start believing the unexpcted thing."
// });
// new_u.save();
module.exports=Posts;