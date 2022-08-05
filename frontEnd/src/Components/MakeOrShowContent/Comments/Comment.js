import React,{ useContext } from "react";

import { Typography, Box, makeStyles } from "@material-ui/core";
import ClearIcon from '@material-ui/icons/Clear';
import { Context } from "../../../Context/Context";
import axios from 'axios';
const useStyles=makeStyles({
    c1:{
        width:'100%',
        height:'auto',
        color:'#c9dbe0',
        textDecoration:'underline'
    }
    ,
    box:{
        display:'flex',
        marginBottom:'5px'
    },
    icon:{
        color:'#c9dbe0',
        float:'right',
        cursor:'pointer',
        '&:hover': {
            color:'auqamarine',
            
          }

    }
});




 const Comment = ({ comment }) => {


const URL='https://express-itt.herokuapp.com/'
    const {user}=useContext(Context);
    const removeComment = async () => {
       
        
     try{
const res=await axios.delete(`${URL}api/comments/delete/${comment._id}`);

if(res.status === 200)
{
    alert("Comment Deleted");
    window.location.reload();
    return ;
}
else{
    alert("Try later");
}
}
     catch(err)
     {
        console.log(err+" : error")
        alert("Some error Occured");
     }
    
  
      
    }
const classes=useStyles();
    return (
        <Box>
           
               <Typography className={classes.c1}>{comment.name}:
              
               </Typography>
                
               
            <Typography><span style={{color:'aquamarine'}}>{comment.commented}</span>
            { comment.name === user.name && <ClearIcon className={classes.icon}onClick={() => removeComment()} /> }
            </Typography>
          
        </Box>
    )
}

export default Comment;