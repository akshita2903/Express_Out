import React from 'react'
import {Box,makeStyles,Typography,FormControl,InputBase,Button, TextareaAutosize} from '@material-ui/core'

const useStyle=makeStyles((theme)=>({
image:{
  background:`url(${'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGxhcHRvcHxlbnwwfHwwfHw%3D&w=1000&q=80'})`

        // background:`url(${'https://img.freepik.com/free-photo/close-up-laptop-spectacles-pen-diary-desk_23-2147879878.jpg?size=626&ext=jpg'})`,
        ,width:'100%',
        height:'50vh',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        '& :first-child':{
          fontSize:60,
           color:'#f56f21',
          lineHeight:1,
        }
   
    },
    form:{
      display:'flex',
      flexDirection:'row',
      marginTop:'5px'
    },
    titlearea:{
      color:'blue',
fontSize:20, 
border:'2px solid #332',
borderRadius:2,
flex:1,
margin:'0 10px',



    },
    textarea:{
width:'100%',
border:'none',
fontSize:'18px',
marginTop:'5px',
'&:focus-visible':{
  outline:'none'
}
    }
    
  }));

export default function Create_Wali() {
   const classes=useStyle();
   
    // const url='https://img.freepik.com/free-photo/close-up-laptop-spectacles-pen-diary-desk_23-2147879878.jpg?size=626&ext=jpg'
  return (
      <Box>
   <Box className={classes.image}>
<Typography>Let Express</Typography>
   </Box>
   <FormControl className={classes.form}>
<InputBase placeholder='title' className={classes.titlearea}/>
<Button variant='contained' color='primary'>Update</Button>
   </FormControl>
   <TextareaAutosize class={classes.textarea} rowsMin={7} placeholder='Write what u feel like'/>
   </Box>
  )
}
