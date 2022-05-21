import React, { useContext } from 'react'
import axios from 'axios'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import CircularProgress from "@material-ui/core/CircularProgress";
import Posts from './Posts'
import Banner from './Banner'
//import {useNavigate} from 'react-router-dom'
import {Grid,Button,makeStyles} from '@material-ui/core'
import { Link } from 'react-router-dom'
import { Context } from '../../Context/Context'

const useStyle=makeStyles({
  
upward:{
  backgroundColor: 'white',
  borderRadius: '50%',
  border: '1px solid grey',
  padding: '10px',
  float:'right'

 },

});
function OwnPosts() {
const classes=useStyle();

//const history=useNavigate();
const{user}=useContext(Context);

const[C,setC]=React.useState("");
  const[posts,setPostss]=React.useState([]);
  const[isLoading,setLoading]=React.useState();
 const fetchPost=async ()=>{
   console.log(user._id);
   setLoading(true);
  const res=await axios.get(`/api/post/myPosts/${user._id}`
);
setLoading(false)
  const{data}=res;
  if(res.status === 201){
    setC("No Thoughts,Create It");
    window.location.replace('/create');
  }
  if(res.status === 200){
    setPostss(data);
  }
 }
 React.useEffect(()=>{
   fetchPost();
 },[]);

 
  // let p=['a','b','c','d','e','f','g','h','i','j','k']
  return (
    <><Banner/>
    <Link to='/' style={{textDecoration:'none',color:'inherit'}}>
<Button  variant='contained'>Back</Button>
</Link>
{isLoading ?<CircularProgress/> :
  <Grid container>
  
   <Grid  container item lg={10} ss={10} xs={12}><Posts posts={posts}/></Grid>
     {<h2>{C}</h2>}

</Grid>
}
<a href='#'><KeyboardArrowUpIcon className={classes.upward}/></a>
    </>
  
      
    
  )
}

export default OwnPosts;