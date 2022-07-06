import React from 'react';

import {Box, Typography,makeStyles} from '@material-ui/core'

const useStyle=makeStyles({
box_design:{
  margin:10,
  borderRadius:10,
  border:'1px solid #d3cede',
  display:'flex',
  alignItems:'center',
  flexDirection:'column',
   height: 350, 
  
    },
image:{
   height:150, 
  width:'100%',
  objectFit:'cover',
  borderRadius:10,
  border:'1px solid #d3cede'
},
text:{
  color:'white',
  fontSize:12
},
title:{
  fontSize:18,
  fontWeight:550
},
desc:{
  fontSize:14,
  wordBreak:'break-word'
}
});

export default function Post_daalne_or_show_walaPage(props) {
  //backend to front_end

  const classes=useStyle();
 const url='https://primarywall.com/wp-content/uploads/2021/03/5082979-1500x1000.jpeg'
 
const addEllips=(str,limit)=>{
  let len=str.length;
  return len >limit ?str.substring(0,limit)+ '...' :str;
}

  return (
  
   <Box className={classes.box_design}>
    <img src={url} alt='post' className={classes.image}></img>
   
    <Typography className={classes.title}>{props.title}</Typography>
    <Typography className={classes.text}>{props.name}</Typography>
    <Typography className={classes.desc}>{addEllips(props.description,300)}</Typography>

   </Box>
   
  );
}
