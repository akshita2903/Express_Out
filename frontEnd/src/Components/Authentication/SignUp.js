import React from 'react'
import './login.css';

import axios from 'axios';
import CircularProgress from "@material-ui/core/CircularProgress";

export default function SignUp() {
  const [detail,setDetail]=React.useState({
    name:'',
    email:"",
    password:"",
    confirmPassword:""
  });
 
  const[text,setText]=React.useState("password");

const[E,setE]=React.useState("");
const[P,setP]=React.useState("");
const[isLoading,setLoading]=React.useState();
const[CP,setCP]=React.useState("");
const[N,setN]=React.useState("");
const[display,setDisplay]=React.useState('show');
  
  function handleType(e){
    setText((p)=> p === "password"?"text":"password" );
    setDisplay((p)=> p === "show" ?"hide":"show");
  }
  function handleChange(e){
const {name,value}=e.target;
setDetail((prev)=>{
  return {...prev,
  [name]:value
  }
})
  }
 async function handleSubmit(e){
  e.preventDefault();
    const {name,email,password,confirmPassword}=detail;
    // console.log(name+" "+email+" "+password);
    if(!name){
      setN("User Name is Required");
      return ;
    }
    if(!email){
      setE("Email is Required");
      return ;
    }
    if(!password){
      setP("Password is Required");
      return ;
    }
    if(!confirmPassword){
   setCP("Confirm Password is Required");
   return ;
    }
    if(confirmPassword!== password){
     CP("Confirm Password must be same as Password");
     return ;
    }
    try{
      // console.log("try")
      setLoading(true);
const config={
  headers:{
    "Content-Type":"application/json"
  }
}
const res=await axios.post(
  'https://express-itt.herokuapp.com/api/auth/signup',
  {
 name, email,password
},
config);
setLoading(false)
if(res.status === 202){
  
  setN("User name must be Unique");
  return ;
}
if(res.status === 201)
{
 setE("Email already exists");
  return ;
}
if(res.status===400){
CP("Some Error occur ,try after sometime or refresh the Page");
  return ;
}
else{
window.alert("Sign Up Successfully");
setE(""); setP(""); setCP("");
window.location.replace("/login")

 //localStorage.setItem("SignUp info",JSON.stringify(data));
}
    }
    catch(err){
      console.log("Error: "+err);
    }
 }
  return (
    <div>
      <div className="login">
  <div className="form">
    <form className="login-form">
      <span className="material-icons">Sign Up</span>
      <h5 className="error" >{N}</h5 >
      <input type="text" placeholder="Name"  vale={detail.name} name='name' onChange={handleChange}/>
      <h5 className="error" >{E}</h5 >
      <input type="email" placeholder="example@gmail.com" value={detail.email} name='email' onChange={handleChange} />
      <h5 className="error" >{P}</h5 >
      <h5 className='toggle' onClick={handleType}>{display}</h5>
      <input type={text} placeholder="password" value={detail.password} name='password' onChange={handleChange} >
      {/* <span toggle="#password-field" class="fa fa-fw fa-eye field-icon toggle-password"></span> */}
      </input>
      <h5 className="error" >{CP}</h5 >
      <h5 className='toggle' onClick={handleType}>{display}</h5>
      <input type={text} placeholder="ConfirmPassword" value={detail.confirmPassword} name='confirmPassword' onChange={handleChange} >
      {/* <span toggle="#password-field" class="fa fa-fw fa-eye field-icon toggle-password"></span> */}
      </input>
      
    {isLoading ?<CircularProgress/>:""}
     <button type='submit' onClick={handleSubmit}className='signin'>Sign up</button>
    </form>  
  </div>
</div>
    </div>
  )
}
