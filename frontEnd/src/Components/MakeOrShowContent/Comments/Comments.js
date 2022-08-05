import React ,{useContext} from 'react';
// import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { Box, FormControl,InputBase, Button,makeStyles } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import { Context } from '../../../Context/Context';
import axios from 'axios';
import CircularProgress from "@material-ui/core/CircularProgress";
//components
import Comment from './Comment';
const useStyle=makeStyles((theme)=>({
   
    form:{
        display:'flex',
        flexDirection:'row',
        marginTop:'5px',
        color:'#c9dbe0',
        
        textDecoration:'underline'
        
      },
      titlearea:{
        color:'aquamarine',
  fontSize:17, 
  borderBottom:'1px aquamarine',
  flex:1,
  margin:'0',
  
  
  
      },
        sendc:{
            backgroundColor: 'white',
            borderRadius: '50%',
            border: '1px solid grey',
            padding: '10px',
            color:'pink',
            marginBottom:'0px',
            cursor:'pointer',
            '&:hover':{
                color:'skyBlue'
            }
           },
           buttons:{
            height:'30px',
            color:'white',
            border:'2px solid pink',
            width:'100%',
            '&:hover': {
              color:'pink',
              border:'2px solid white'
            }
           },
          //  upward:{
          //   backgroundColor: 'white',
          //   borderRadius: '50%',
          //   border: '1px solid grey',
          //   padding: '10px',
          //   float:'right',
            
          
          //  },
      }));





const Comments = ({ post }) => {
    const classes=useStyle();
    const{user}=useContext(Context);
   
     const URL='https://express-itt.herokuapp.com/'
 
    const [comment, setComment] = React.useState({
      name: '',
      postId: '', 
      commented: ''
    });
    const [comments, setComments] = React.useState([]);
    const[isLoading,setLoading]=React.useState(false);
   
    const[showComments,setshowComments]=React.useState(false);

   
    //LOAD ALL COMMENTS
    const fetchComments =async()=>{
      setshowComments(true);
      setLoading(true);
  // console.log("fetch ke andar");
    const res=await axios.get(`${URL}api/comments/getComments/${post._id}`);
    setLoading(false);
    // console.log("All "+res.data);
    setComments(res.data)
    }

    const handleChange = (e) => {
        setComment({
            ...comment,
            name: user.name,
            postId: post._id,
            commented: e.target.value
        });
        // console.log("Wrire c");
    }
//ADD A COMMENT
    const addComment = async(e) => {
      e.preventDefault();
      const{name,postId,commented}=comment
    // console.log(name+" "+postId+" "+commented+" ghhh");
    if(commented){
      try{
        setLoading(true);
        const config={
          headers:{
            "Content-Type":"application/json"
          }
        }
        const res=await axios.post(
         `${URL}api/comments/createComment`,
          {
        name,postId,
        commented
        },
        config);
   if(res.status === 200)
   {
    console.log("C Adeds");
   setComment({
    name:'',
    postId:'',
    commented:''
   })
 
   }
   else {
    console.log("Try later");
   }
   setLoading(false);
      }

      catch(err){
        console.log("Err "+err);
  alert("try later!!");
  
      }
    }
    else{
      return ;
    }
        // console.log("Added comment");
    }
  
    return (
        <Box>
          
            <FormControl className={classes.form}>
           
<InputBase placeholder='Did it inspired You? Leave your views here....' className={classes.titlearea}
onChange={(e)=> handleChange(e)}
name="comment" value={comment.commented}
/>
{isLoading?<CircularProgress/>:<SendIcon className={classes.sendc} onClick={addComment}/>}
   
   </FormControl>
  <div></div>
                {
                    
                    showComments?<Box>{isLoading?<Box><CircularProgress/></Box>:<Box>{comments.length>0 ?<Box>{comments.map(p=>(
                      <Comment  comment={p}
                      key={p._id}
                      />
                                          )
                                      )
                                         }</Box>:<span style={{color:'aquamarine'}}>No Comments</span>}</Box>}
<Button className={classes.buttons} onClick={()=> setshowComments(false)}>Hide Comments</Button>
</Box>:<Box><Button className={classes.buttons} onClick={fetchComments}>Load Comments</Button>
 </Box>}
                  
 {/* <a href='#'><KeyboardArrowUpIcon className={classes.upward}/></a>   */}
        </Box>
    )
    
}

export default Comments;