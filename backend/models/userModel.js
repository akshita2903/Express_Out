const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');

//schema for sign in /up
const userSchema=mongoose.Schema({





    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
}); //schema ends
//decrypting password
userSchema.methods.matchPassword=async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password);
};
//encrypting the password of user
userSchema.pre('save',async function(next){
    try{
console.log("Before saving");
const salt=await bcrypt.genSalt(10);
const hashedPassword=await bcrypt.hash(this.password,salt);
this.password=hashedPassword;
next();
    }
catch(err){
    next(error);
}

});


const User=mongoose.model('User',userSchema);
// const new_u=new User({
//     name:'AB',
//     email:'pq@gmail.com',
//     password:'456'
// });
// new_u.save();
module.exports=User;