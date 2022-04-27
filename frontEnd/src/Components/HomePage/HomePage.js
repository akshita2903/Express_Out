import React from 'react'
import Banner from './Banner'
import Catgories from './Catgories'
import Posts from './Posts'
import {Grid} from '@material-ui/core'
export default function HomePage() {
  return (







    <div><Banner/>
    <Grid container>
        <Grid item lg={2} xs={12} ss={2}>
        {/* <Catgories/> */}
    
        </Grid>
       <Grid  container item lg={10} ss={10} xs={12}><Posts/></Grid>

  
    </Grid>
 
    </div>
  )
}
