import React from 'react'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { Box,makeStyles,Typography } from '@material-ui/core';
import Banner from './Banner'
const useStyles =makeStyles({
title:{
    textAlign:'center',
    textDecoration:'underline'
},
detail:{
    fontSize:'20px',
    fontWeight:'bold',
    color:'#333',
    background:'#fff2',   
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
});
export default function About() {
    const classes=useStyles();
  return (
   <Box>
       <Banner/>
       <Box>
           <h1 className={classes.title}><i>About us</i></h1>
           <Typography className={classes.detail}>This is an Express View website where a user can <span className={classes.span_s}>,express,post,write</span>
           the thoughts or anything that is disturbing the mental Peace of him/her self or anything
           that he/she want to say but unable to do.</Typography>
           <Typography><span>Aim:</span>After the pandemic ,the cause of mental stress has been increased,and thus resulting increased
           larger __________ ,there has been lot social distancing a lot apart from physical distancing,where people are distancing
           from each other which is resulting in loneliness among individuals.They are unable to speak out 
           the wants of their hearts ,so this website is giving them a platform where they can write their life experiences,
           anything that is impacting their mental state causing mental stress,they can also help other individuals
           who are having career pressure by telling them how one dealt with this when they were in that situation.
           To give some relaxation,the platform for poery lovers is also there.:)</Typography>
       </Box>
       <a href='#'><KeyboardArrowUpIcon className={classes.upward}/></a>
   </Box>
  )
}
