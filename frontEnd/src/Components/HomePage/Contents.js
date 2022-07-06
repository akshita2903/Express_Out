import React from 'react'

import CardContent from './CardContent'
import {Grid} from '@material-ui/core'
import { Link } from 'react-router-dom'
function Posts({content}) {


//const[count,setCount]=React.useState(0);
  // const[postss,setPostss]=React.useState([]);
  
  // const fetchPosts =async()=>{
  // const res=await axios.get("/api/post/getAll")
  // console.log("All "+res.data);
  // setPostss(res.data)
  // }
  //   React.useEffect(()=>{
  // fetchPosts();
  // //setCount(pp=>pp+1)
  //   },[])
  // let p=['a','b','c','d','e','f','g','h','i','j','k']
  return (
    <>
   { content.map(pp => (
      <Grid item lg={4} ss={6} xs={12}>
        <Link to={`/details/${pp._id}`} style={{textDecoration:'none',color:'inherit'}}>
      <CardContent 
   key={pp._id}
      title={pp.title}
      name={pp.name}
      description={pp.description}/>
      </Link>
    </Grid>
    ))}
    </>
  
      
    
  )
}

export default Posts