import React from 'react'
import {makeStyles,Box,Typography} from '@material-ui/core'
const useStyles=makeStyles({
    image:{
background:`url(${'https://primarywall.com/wp-content/uploads/2021/03/pen.jpg'})`,
width:'100%',
height:'50vh',
display:'flex',
flexDirection:'column',
alignItems:'center',
justifyContent:'center',
'& :first-child':{
  fontSize:60,
   color:'#fff',
  lineHeight:1,
},
'& :last-child':{
    fontSize:30,
    color:'#f2faff',
    background:'#fff2'
    
 }
    }
});
export default function Banner(props) {

   const classes=useStyles();
  return (
<>
<Box className={classes.image} >
   <Typography>Let your story inspire Someone</Typography>
<Typography>Express It</Typography>
</Box>
</>
  
  
  )
}
