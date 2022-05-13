import React from 'react'
import './login.css'
import {Link } from 'react-router-dom'
import axios from 'axios';
export default function Login() {


  const [detail,setDetail]=React.useState({
    //name:'',
    email:"",
    password:""
  });
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
    const {email,password}=detail;
    console.log(email+" "+password);
    try{
      console.log("try")
const config={
  headers:{
    "Content-Type":"application/json"
  }
}
const{data}=await axios.post(
  "/api/auth/login",
  {
  email,password
},
config);
if(data.status===300)
{
  alert("Email does not exist or password is incorrect");
  return ;
}
window.alert("Login Successfull");
window.location.replace("/")
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
      <span className="material-icons">Log In</span>
      {/* <input type="text" placeholder="Name" required='true'/> */}
      <input type="email" placeholder="example@gmail.com" required={true} value={detail.email} name='email' onChange={handleChange}/>
      <input type="password" placeholder="password" value={detail.password} name='password' onChange= {handleChange} required ={true}>
      {/* <span toggle="#password-field" class="fa fa-fw fa-eye field-icon toggle-password"></span> */}
      </input>
      
      <button type='submit' onClick={handleSubmit}>login</button>
     
     <h3   className="cp_fi">
       Forgot Password?
     
      <Link to='/changePass' style={{textDecoration:'none',color:'inherit'}}>
<h4>Change Password</h4>

 </Link></h3>

 <span>New User ? </span>
      <Link to='/signup' style={{textDecoration:'none',color:'inherit'}}>

 <button className='signin'>Sign up</button>
  </Link>

    </form>  
  </div>
</div>
    </div>
  )
}
