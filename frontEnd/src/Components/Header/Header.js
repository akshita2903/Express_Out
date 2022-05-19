import React, { useContext } from 'react';
import AppBar from '@material-ui/core/AppBar'
import  {Toolbar ,Typography,makeStyles,Button }from '@material-ui/core';
import {Link} from 'react-router-dom'
import { Context } from '../../Context/Context';
const useStyle=makeStyles(theme => ({
    component:{
        background:'#333',
        fontSize:'200',
        fontWeight:'bold'
        
    },
    container:{
       justifyContent:'center',
       '& >*':{
           padding:20,
           color:'#fff',
           textdecoration:'none'
       }
    },
    link:{
        textDecoration:'none',
        color:'inherit'
    },
    container2:{
        padding:20,
        color:'#2898c4',
  fontSize:'20px',
  fontWeight:'bolder',
  fontStyle:'italic',
  textDecoration:"underline",
  alignItem:'right'
    }
}));
export default function Header() {
    const classes=useStyle();
    const{user,dispatch}=useContext(Context);
   
    const handleLogout=()=>{
console.log("logout ke andar");
     
dispatch({type:"LOGOUT"});

 window.location.replace('/');
    }
  return (
   <>
   <AppBar className={classes.component}>
       <Toolbar className={classes.container}>
           <Link to='/' className={classes.link}>
           <Typography>HOME</Typography>
           </Link>
           <Link to='/about' className={classes.link}>
           <Typography>ABOUT</Typography>
           {/* {console.log("use ki stae "+user)} */}
           </Link>
           {
               user?
         
               <Button onClick={handleLogout} style={{
                background: 'unset',
                border: 'none',
                color:'white',
                fontSize:'280',
                textTransform: 'uppercase',
               fontWeight:'5px',
                cursor: 'pointer',
               
            }} >Logout</Button>
           : <Link to='/login' className={classes.link}>
           <Typography>LOGIN</Typography>
           </Link> 
}
         
        {user ? <Typography className={classes.container2}>{user.name}</Typography>:   <Link to='/signup' className={classes.link}>
           <Typography>SIGNUP</Typography>
           </Link>}
       </Toolbar>
     
       </AppBar></>
  );
}
