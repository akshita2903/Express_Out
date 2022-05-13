import React from 'react'
import axios from 'axios'
import Post_daalne_or_show_walaPage from './Post_daalne_or_show_walaPage'
import Banner from './Banner'
//import {useNavigate} from 'react-router-dom'
import {Grid,Button} from '@material-ui/core'
import { Link } from 'react-router-dom'
function OwnPosts() {

//const history=useNavigate();

  const[postss,setPostss]=React.useState([]);
  const fetchPosts =async()=>{

 
  }
    React.useEffect(()=>{
  fetchPosts();
    },[])
  // let p=['a','b','c','d','e','f','g','h','i','j','k']
  return (
    <><Banner/>
    <Link to='/' style={{textDecoration:'none',color:'inherit'}}>
<Button  variant='contained'>Back</Button>
</Link>
    {
    postss.map(pp => (
      <Grid container>
        <Grid container item lg={3} ss={4} xs={12}>
        <Link to="/details" style={{textDecoration:'none',color:'inherit'}}>
      <Post_daalne_or_show_walaPage 
   
      title={pp.title}
      name={pp.name}
      description={pp.description}/>
      </Link>
    </Grid>
      </Grid>
      
    ))}
    </>
  
      
    
  )
}

export default OwnPosts;