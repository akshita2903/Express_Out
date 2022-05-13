import React from 'react'
import Banner from './Banner'
import { Link } from 'react-router-dom'
import axios from 'axios';
import{Button,makeStyles} from '@material-ui/core'

import Posts from './Posts'
import {Grid} from '@material-ui/core'
const useStyle=makeStyles({
  create:{
      background:'#62fff',
      color:'#f2321',
      width:'50%'   
  },
  own:{
    background:'#291aff',
    color:'#f2321',
    width:'50%'   
},

});
export default function HomePage() {
  const classes=useStyle();
  
  return (



    <div><Banner/>
     <Link to='/create' style={{textDecoration:'none',color:'inherit'}}>
<Button className={classes.create} variant='contained' >Wanna Tell?</Button>
</Link>
<Link to='/userPost' style={{textDecoration:'none',color:'inherit'}}>
<Button className={classes.own} variant='contained'>Own Thoughts</Button>
</Link>
    <Grid container>
   
       <Grid  container item lg={10} ss={10} xs={12}><Posts/></Grid>

  
    </Grid>
 
    </div>
  )
}
