import React from 'react'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { Box,makeStyles,Typography } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Banner from './Banner'
const useStyles =makeStyles({
  
title:{
    textAlign:'center',
    textDecoration:'underline'
},
detail:{
    fontSize:'20px',
    fontWeight:'bold',
    color:'darkblue',
     
},
span_s:{
    color:'black',
    fontSize:'21px'
},
upward:{
    backgroundColor: 'white',
    borderRadius: '50%',
    border: '1px solid grey',
    padding: '10px',
    float:'right'
  
   },
   bottom:{
       color:'#f12487',
       textAlign:'center',
       fontSize:'50px'
   },
   icon:{
       fill:'#f12387',
      fontSize:94,
   
       
   }
});
export default function About() {
    const classes=useStyles();
  return (
   <Box>
       <Banner/>
       <Box >
           <h1 className={classes.title}><i>About us</i></h1>
           <Typography className={classes.detail}>This is an Express View website where a user can <span className={classes.span_s}>,express,post,write</span>
           the thoughts or anything that is disturbing the mental Peace of him/her self or anything
           that he/she want to say but unable to do.</Typography>
           <Typography className={classes.detail}><span style={{color:'white',textDecoration:'underline',fontSize:'large'}}>Aim:</span>After the pandemic ,the cause of mental stress has been increased,due to physical distancing,people have started maintaining
           social distancing also.They are unable to spoke out about the matter of contemplation and hence resulting in 
           mental stress.so this website is giving them a platform where they can write their life experiences, anything that is impacting their mental state causing mental stress,
        .and hence can help themselves by <span style={{color:'white'}}>Unleasing it</span>.They can also 
        indirectly help others who get inspired by reading their stories and may take some inspiration from it.
         <span style={{color:'lightblue'}}>So express it Out</span>  </Typography>
           <Typography className={classes.bottom}>Release The STRESS by Unleasing it  <FavoriteIcon className={classes.icon}/></Typography>
          
       </Box>
       <a href='#'><KeyboardArrowUpIcon className={classes.upward}/></a>
   </Box>
  )
}
