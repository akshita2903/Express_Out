import React, { useContext } from 'react';
import './login.css';
import CircularProgress from "@material-ui/core/CircularProgress";
import axios from 'axios';
import { Context } from '../../Context/Context';

 function ChangePassword() {
  const[text,setText]=React.useState("Password");

const{dispatch}=useContext(Context);
  const[display,setDisplay]=React.useState("show");
 const[isLoading,setLoading]=React.useState();
  function handleType(e){
    setText((p)=> p === "password"?"text":"password");
    setDisplay((p)=> p === "show" ?"hide":"show");
  }
const[emailW,setEmailW]=React.useState("");
const[cpw,setCPW]=React.useState("");
  const [detail,setDetail]=React.useState({
    //name:'',
  email:"",
    password:"",
    confirmPassword:""
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
    const {email,password,confirmPassword}=detail;
    console.log(password+" "+confirmPassword);
    if(!email){
      setEmailW("Email is required");
    }
    if(password !== confirmPassword){
    setCPW("Confirm Password is incorrect");
    return ;
    }
    try{
      setLoading(true);
      const res=await axios.put('/api/auth/changePassW',{
        email,
        password,
      });
      setLoading(false);
      if(res.status === 201){
        dispatch({type:"UPDATE_FAILED"});
        setEmailW("Email does not exist");
        return ;
      }
      if(res.status ===401){
        dispatch({type:"UPDATE_FAILED"});

        setCPW("Something Went Wrong!!,Try afetr sometime :)");
        return ;
      }
      dispatch({type:"UPDATE_SUCCESS`",payload:res.data})
      setCPW("");
      setEmailW('');
      window.location.replace('/login');
    }
    catch(err){
      setCPW("Something Went Wrong");
    }

 }
  return (
    <div>
<div className="login">
  <div className="form">
    <form className="login-form">
    <span className="material-icons">Reset Password</span>
    <h5 className="error" >{emailW}</h5 >
      <input type="email" required={true} placeholder="example@gmail.com"  value={detail.email} name='email' onChange={handleChange}/>
      
      {/* <input type="text" placeholder="Name" required='true'/> */}
      <h5 className='toggle' onClick={handleType}>{display}</h5>
      <input type={text} placeholder="new password" required={true} value={detail.password} name='password' onChange={handleChange}>
     
      </input>
      <h5 className='toggle' onClick={handleType}>{display}</h5>
      <h5 className="error" >{cpw}</h5 >
      <input type={text} placeholder="confirm password" value={detail.confirmPassword} name='confirmPassword' onChange= {handleChange} required ={true}>
      {/* <span toggle="#password-field" class="fa fa-fw fa-eye field-icon toggle-password"></span> */}
     
      </input>
         
    {isLoading ?<CircularProgress/>:""}
      <button type='submit' onClick={handleSubmit}>Reset PassWord</button>
     
   

 

    </form>  
  </div>
</div>
    </div>
  )
}
export default ChangePassword;