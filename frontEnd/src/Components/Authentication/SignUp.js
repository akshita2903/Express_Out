import React from 'react'
import './login.css'
import axios from 'axios';
import Login from './Login';
export default function SignUp() {
  const [detail,setDetail]=React.useState({
    name:'',
    email:"",
    password:"",
    confirmPassword:""
  });
  const[login,setLogin]=React.useState();
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
    console.log(name+" "+email+" "+password);
    if(!name || !email || !password || !confirmPassword)
    {
      window.alert("Please Enter all the details");
    }
    if(confirmPassword!== password){
      window.alert("Password And confirm Password are not same");
      return ;
    }
    try{
      console.log("try")
const config={
  headers:{
    "Content-Type":"application/json"
  }
}
const{data}=await axios.post(
  "/api/auth/signup",
  {
 name, email,password
},
config);
if(data.status === 300)
{
  window.alert("Email already  Exists");
  return ;
}
if(data.status===400){
  window.alert("Some Error Occured,Please try after sometime");
  return ;
}
window.alert("Sign Up Successfully");
window.location.replace("/login")

 //localStorage.setItem("SignUp info",JSON.stringify(data));
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
      <input type="text" placeholder="Name"  vale={detail.name} name='name' onChange={handleChange}required='true'/>
      <input type="email" placeholder="example@gmail.com" value={detail.email} name='email' onChange={handleChange} required='true'/>
      <input type="password" placeholder="password" value={detail.password} name='password' onChange={handleChange} required ='true'>
      {/* <span toggle="#password-field" class="fa fa-fw fa-eye field-icon toggle-password"></span> */}
      </input>
      <input type="password" placeholder="ConfirmPassword" value={detail.confirmPassword} name='confirmPassword' onChange={handleChange} required ='true'>
      {/* <span toggle="#password-field" class="fa fa-fw fa-eye field-icon toggle-password"></span> */}
      </input>
    
     <button type='submit' onClick={handleSubmit}className='signin'>Sign up</button>
    </form>  
  </div>
</div>
    </div>
  )
}
