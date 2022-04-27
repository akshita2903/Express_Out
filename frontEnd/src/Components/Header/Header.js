import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import  {Toolbar ,Typography,makeStyles }from '@material-ui/core';
import {Link} from 'react-router-dom'
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
    }
}));
export default function Header() {
    const classes=useStyle();
  return (
   <>
   <AppBar className={classes.component}>
       <Toolbar className={classes.container}>
           <Link to='/' className={classes.link}>
           <Typography>HOME</Typography>
           </Link>
           <Link to='/about' className={classes.link}>
           <Typography>ABOUT</Typography>
           </Link>
           <Link to='/login' className={classes.link}>
           <Typography>LOGIN</Typography>
           </Link>
           <Link to='/signup' className={classes.link}>
           <Typography>SIGNUP</Typography>
           </Link>
       </Toolbar>
       </AppBar></>
  );
}
