import React from 'react'
import './login.css'
import {Link } from 'react-router-dom'
import axios from 'axios';

export default function Login() {

let id;
const[text,setText]=React.useState("password");
const[W,setW]=React.useState("");

const[display,setDisplay]=React.useState('show');
  const [detail,setDetail]=React.useState({
    //name:'',
    email:"",
    password:""
  });
  function handleType(e){
    setText((p)=> p === "password"?"text":"password");
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
    const {email,password}=detail;
    if(!email){
      W("Email Required");
      return ;
    }
    if(!password){
      W("PassWord Required");
      return ;
    }
    console.log(email+" "+password);
    try{
      console.log("try login")

const res=await axios.post(
  "/api/auth/login",
  {
  email,password
},
);
console.log("Response is "+res)

console.log(res+" response");
if(res.status === 201){
  // alert("Email does not exist");
  setW("Email or Password is incorrect");
  return ;
  // window.location.replace('/signup');
}



if(res.status === 200){
window.alert("Login Successfull");
setW("");
window.location.replace("/")
    }
    }
    catch(err){
      console.log("Error: Catch me "+err);
      setW("Something Went Wrong.Try AFter Sometime!!")
    }
 }
  return (
    <div>
<div className="login">
  <div className="form">
    <form className="login-form">
      <span className="material-icons">Log In</span>
      {/* <input type="text" placeholder="Name" required='true'/> */}
    
      <input type="email" required={true} placeholder="example@gmail.com"  value={detail.email} name='email' onChange={handleChange}/>
    
      <h5 className='toggle' onClick={handleType}>{display}</h5>
      <h5 className="error" >{W}</h5 >
      <input type={text} placeholder="password" value={detail.password} name='password' onChange= {handleChange} />
      {/* <span toggle="#password-field" class="fa fa-fw fa-eye field-icon toggle-password"></span> */}
   
      
      
      <button type='submit' onClick={handleSubmit}>login</button>
     
   
     {/* //{`/details/${pp._id}`}  */}
      <Link to='/changePassW' style={{textDecoration:'none',color:'inherit'}}>
      <span><u>Forgot Password? </u>
 </span>
 </Link>


 <span>New User ? </span>
      <Link to='/signup' style={{textDecoration:'none',color:'inherit'}}>

 <h3>Sign Up</h3>
  </Link>

    </form>  
  </div>
</div>
    </div>
  )
}
