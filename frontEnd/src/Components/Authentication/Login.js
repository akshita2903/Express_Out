import React, { useContext, useRef } from 'react'
import './login.css';

import CircularProgress from "@material-ui/core/CircularProgress";
import {Link } from 'react-router-dom'
import axios from 'axios';
import{Context} from '../../Context/Context'
export default function Login() {
  const userREf=useRef();
  const passwordRef=useRef();
  const[isLoading,setLoading]=React.useState();
  const{dispatch,isFetching}=useContext(Context);

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
    dispatch({type:"LOGIN_START"});
    console.log(isFetching+"Kya pata")
    const {email,password}=detail;
    if(!email){
      W("Email Required");
      return ;
    }
    if(!password){
      W("PassWord Required");
      return ;
    }
    // console.log(email+" "+password);
    try{
      console.log("try login")
setLoading(true);
const res=await axios.post(
 'https://express-itt.herokuapp.com/api/auth/login',
  {
  email,password
},
);
setLoading(false);
// console.log("Response is "+res)

// console.log(res+" response");

if(res.status === 201){
  // alert("Email does not exist");
  dispatch({type:"LOGIN_FAILED"});
  setW("Email or Passwword is incorrect");
  return ;
  // window.location.replace('/signup');
}
// console.log(isFetching+" fetching")


if(res.status === 200){
  dispatch({type:"LOGIN_SUCCESS",payload:res.data})

setW("");
window.location.replace("/")
    }
    }
    catch(err){
      // console.log("Error: Catch me "+err);
      dispatch({type:"LOGIN_FAILED"});
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
      {isLoading ?<CircularProgress/>:""}
      <input type="email" required={true} placeholder="example@gmail.com" ref={userREf} value={detail.email} name='email' onChange={handleChange}/>
    
      <h5 className='toggle' onClick={handleType}>{display}</h5>
      <h5 className="error" >{W}</h5 >
      <input type={text} placeholder="password" ref={passwordRef}value={detail.password} name='password' onChange= {handleChange} />
      {/* <span toggle="#password-field" class="fa fa-fw fa-eye field-icon toggle-password"></span> */}
   
      
      
      <button type='submit' onClick={handleSubmit} >login</button>
    
   
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
