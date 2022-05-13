import React from 'react'
import Banner from '../HomePage/Banner'
import {makeStyles,Box,Typography,Grid} from '@material-ui/core';
import BorderColorTwoToneIcon from '@material-ui/icons/BorderColorTwoTone';
 import DeleteSharpIcon from '@material-ui/icons/DeleteSharp';
 import { Link,useLocation } from 'react-router-dom'
 import axios from 'axios'
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
   const[detail,setDetail]=React.useState({});
   const location=useLocation();
  //  console.log(location.pathname.split("/")[2]);
   const id=location.pathname.split("/")[2];
   const fetchPosts =async()=>{
    const res=await axios.get(`/api/post/detail/${id}`)
    //console.log(res.data);
  setDetail(res.data)

    }
      React.useEffect(()=>{
    fetchPosts();
    
      },[])
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
  <Typography className={classes.heading}>{detail.title}</Typography>
 <Box className={classes.subheading}>
   <Typography>Author:<span style={{fontWeight:600}}>{detail.name}</span></Typography>
   {/* <Typography style={{marginLeft:'auto'}}>Today Date</Typography> */}
 </Box>
 <Typography>{detail.description}
 </Typography>
  </Box>



</>
  
  
  )
}
