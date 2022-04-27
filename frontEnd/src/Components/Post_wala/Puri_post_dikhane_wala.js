import React from 'react'
import Banner from '../HomePage/Banner'
import {makeStyles,Box,Typography,Grid} from '@material-ui/core';
import BorderColorTwoToneIcon from '@material-ui/icons/BorderColorTwoTone';
 import DeleteSharpIcon from '@material-ui/icons/DeleteSharp';
 import { Link } from 'react-router-dom'
const useStyles=makeStyles({
  

 icons:{
  margin:5,
  border:'1px solid black',
  padding:'5px'
  
 },
 heading:{
   fontSize:38,
   fontWeight:'bold',
   textAlign:'center'
 },
 subheading:{
   color:"#878787",
display:'flex',
margin:'20px 0',



 }
    
});
export default function Puri_post_dikhane_wala() {

   const classes=useStyles();
  return (
<>

<Banner />
<Box>
  <Grid container justifyContent="flex-end" >
  <Link to='/update' style={{textDecoration:'none',color:'inherit'}}>
  <BorderColorTwoToneIcon color='primary' className={classes.icons}  />
  </Link>
<DeleteSharpIcon color='secondary' className={classes.icons} />
  </Grid>
  <Typography className={classes.heading}>Title</Typography>
 <Box className={classes.subheading}>
   <Typography>Author:<span style={{fontWeight:600}}>aks</span></Typography>
   <Typography style={{marginLeft:'auto'}}>Today Date</Typography>
 </Box>
 <Typography>Post ki DEtails
 Post ki DEtails Post ki DEtails Post ki DEtails Post ki DEtailsPost ki DEtails
 Post ki DEtails Post ki DEtails Post ki DEtails Post ki DEtails
 Post ki DEtails Post ki DEtails Post ki DEtailsv variantPost ki DEtails
 Post ki DEtails
 Post ki DEtails
 </Typography>
  </Box>



</>
  
  
  )
}
