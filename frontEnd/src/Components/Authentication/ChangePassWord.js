import React from 'react';
import './login.css';
import axios from 'axios';
 function ChangePassword() {
  const[text,setText]=React.useState("Password");


  const[display,setDisplay]=React.useState("show");
 
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
      const res=await axios.put('/api/auth/changePassW',{
        email,
        password,
      });
      if(res.status === 201){
        setEmailW("Email does not exist");
        return ;
      }
      if(res.status ===401){
        setCPW("Something Went Wrong!!,Try afetr sometime :)");
        return ;
      }
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
      
      <button type='submit' onClick={handleSubmit}>Reset PassWord</button>
     
   

 

    </form>  
  </div>
</div>
    </div>
  )
}
export default ChangePassword;