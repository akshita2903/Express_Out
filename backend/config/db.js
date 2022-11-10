
require('dotenv').config();
const mongoose=require('mongoose');
const connectDB=async()=>{
    const url=process.env.MONGO_URI;
    console.log(url)
    try{
       
const conn=await mongoose.connect(url,{
  useUnifiedTopology:true,
  useNewUrlParser:true,

 
});
console.log('MOngoDB  Connected:');
    }
    catch(err){
console.error(`Error :: ${err.message}`);
process.exit();
    }
};
module.exports=connectDB;