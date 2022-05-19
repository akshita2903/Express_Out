import React from 'react'
import Banner from './Banner';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import CircularProgress from "@material-ui/core/CircularProgress";
import { Link } from 'react-router-dom';
import axios from 'axios';
import{Button,makeStyles} from '@material-ui/core';

import Posts from './Posts'
import {Grid} from '@material-ui/core'
const useStyle=makeStyles({
  create:{
      background:'#62fff',
      color:'#f2321',
      width:'50%'   
  },
  bar:{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign:'center',
  },
  own:{
    background:'#291aff',
    color:'#f2321',
    width:'50%'   
},
upward:{
  backgroundColor: 'white',
  borderRadius: '50%',
  border: '1px solid grey',
  padding: '10px',
  float:'right'

 },

});
export default function HomePage() {
  const classes=useStyle();
  const[posts,setPostss]=React.useState([]);
  const[isLoading,setLoading]=React.useState();
  const fetchPosts =async()=>{
    setLoading(true);
  const res=await axios.get("/api/post/getAll");
  setLoading(false);
  console.log("All "+res.data);
  setPostss(res.data)
  }
    React.useEffect(()=>{
  fetchPosts();
  //setCount(pp=>pp+1)
    },[])
  return (



    <div><Banner/>
     <Link to='/create' style={{textDecoration:'none',color:'inherit'}}>
<Button className={classes.create} variant='contained' >Wanna Tell?</Button>
</Link>
<Link to='/userPost' style={{textDecoration:'none',color:'inherit'}}>
<Button className={classes.own} variant='contained'>Own Thoughts</Button>
</Link>
{isLoading?<CircularProgress className={classes.bar}/>:
    <Grid container>
   
       <Grid  container item lg={10} ss={10} xs={12}><Posts posts={posts}/></Grid>

  
    </Grid>}
    <a href='#'><KeyboardArrowUpIcon className={classes.upward}/></a>

    </div>
  )
}
