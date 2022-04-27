import React from 'react'
import axios from 'axios'
import Post_daalne_or_show_walaPage from './Post_daalne_or_show_walaPage'
import {Grid} from '@material-ui/core'
import { Link } from 'react-router-dom'
function Posts() {



  const[postss,setPostss]=React.useState([]);
  const fetchPosts =async()=>{

    const {data }=await axios.get('/api/notes');
    setPostss(data);
   console.log(postss);
  }
    React.useEffect(()=>{
  fetchPosts();
    },[])
  // let p=['a','b','c','d','e','f','g','h','i','j','k']
  return (
    postss.map(pp => (
      <Grid item lg={3} ss={4} xs={12}>
        <Link to="/details" style={{textDecoration:'none',color:'inherit'}}>
      <Post_daalne_or_show_walaPage 
      category_type={pp.category_type}
      title={pp.title}
      description={pp.Description}/>
      </Link>
    </Grid>
    ))
  
      
    
  )
}

export default Posts