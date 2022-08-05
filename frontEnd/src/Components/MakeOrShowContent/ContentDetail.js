import React,{useContext} from 'react'
import Banner from '../HomePage/Banner';
import CircularProgress from "@material-ui/core/CircularProgress";

import MicIcon from '@material-ui/icons/Mic';
import MicOffIcon from '@material-ui/icons/MicOff';

import {makeStyles,Box,Typography,Grid,FormControl,Button,InputBase,TextareaAutosize} from '@material-ui/core';
import BorderColorTwoToneIcon from '@material-ui/icons/BorderColorTwoTone';
 import DeleteSharpIcon from '@material-ui/icons/DeleteSharp';
 import {useLocation } from 'react-router-dom'
 import { Context } from '../../Context/Context';
 import Comments from './Comments/Comments';
//  import { useSpeechSynthesis } from "react-speech-kit";

 import axios from 'axios'
const useStyles=makeStyles({
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
      },

 icons:{
   
  margin:5,
  border:'1px solid black',
  padding:'5px',
  cursor:'pointer',
  
 },
 
 heading:{
   fontSize:38,
   fontWeight:'bold',
   textAlign:'center'
 },
 subheading:{
   color:"#29674",
display:'flex',
alignItem:'center',
margin:'20px 0',



 },
 mic:{
  backgroundColor: 'white',
  borderRadius: '50%',
  border: '1px solid grey',
  padding: '10px',
  color:'blue',
  marginBottom:'0px',
  cursor:'pointer',
  float:'right'
 },
 
 
 
    
});
export default function Puri_post_dikhane_wala() {
  const URL='https://express-itt.herokuapp.com/'
 
   const classes=useStyles();
   const{user}=useContext(Context);
  //  console.log("Hello "+(user ? user.name+" Email "+user.email :" User Looged nhi hua"))
   const[detail,setDetail]=React.useState({});
   const[isSpeaking,setSpeaking]=React.useState(false);
 

    const msg = new SpeechSynthesisUtterance();
   const location=useLocation();
   

   const[isLoading,setLoading]=React.useState();
  
  const[Isupdate,setUpdate]=React.useState(false);
 
   const id=location.pathname.split("/")[2];
   const fetchPosts =async()=>{
     setLoading(true);
    const res=await axios.get(`${URL}api/post/detail/${id}`);
    setLoading(false);
    //console.log(res.data);
  setDetail(res.data)


    }
      
/*Update start */
      function handleUpdate(){
        console.log("update it");
     setUpdate(true);

  
}
      
      function handleChange(event){
        setDetail({...detail,[event.target.name]:event.target.value})
       }
       const UpdateIt=async()=>{
         const{title,description}=detail;
         if(!title){
          alert("title can not be empty");
          return ;
         }
         if(!description){
           alert("description can not be empty");
           return ;
         }
       try{
        
         setLoading(true);
         const res=await axios.put(`${URL}api/post/update/${detail._id}`,{
         
           title,
           description
         });
         setLoading(false);
         if(res.status === 200)
         {
           alert("Updated Successfully");
        
       }
       else{
         alert("Try After Sometime");
       }
       window.location.replace(`/details/${detail._id}`);
       }
       catch(err){
alert("try after Sometime");
       }
        
       }
  /*Upadte ends .......................................... */    

  /*Delete Starts */
      const handleDelete=async()=>{
        console.log("Deleting");
        let permission=window.confirm("Are you Sure? This will be deleted permanently")
        if(permission){
        try{
setLoading(true);
          const res=await axios.delete(`${URL}api/post/delete/${detail._id}`);
       
          setLoading(false);
          if(res.status === 200)
          {

            alert("Deleted Successfully");
            window.location.replace('/userPost')
          }

        }
        catch(err){
          alert("Try later !!");
          window.location.replace('/userPost');
        }
      }
      
      }
      /*Delete ends */

      /*handle mic*/
      const sayhello=()=>{
       
        setSpeaking(p=>!p);
    
   
      
         
        
      }
      const speakOrNot=()=>{
        speechSynthesis.cancel();
       
        if(isSpeaking)
    {
      const{title,description,name}=detail;

 let text="This is Written By "+name+". The author Expresses about "+title+"."+"It expresses out "+description+".";
      speechSynthesis.cancel(); // if it errors, this clears out the error.
// it was not working for length >=200,so splittted it by (.)
    var sentences = text.split(".");
    for (var i=0;i< sentences.length;i++)
    {
         var toSay = sayit();
        toSay.text = sentences[i];
        speechSynthesis.speak(toSay);
    }

    
    
  }

else{    
  console.log("ruko  ");
  speechSynthesis.pause();
 

    }
       
      }
      var sayit = function ()
{
    var msg = new SpeechSynthesisUtterance();

   msg.rate=0.85;
    msg.onstart = function (event) {

        console.log("started");
    };
    msg.onend = function(event) {
        // console.log('Finished in ' + event.elapsedTime + ' seconds.');
    };
    msg.onerror = function(event)
    {

        console.log('Errored ' + event);
        alert("Some error occured!");
    }
    msg.onpause = function (event)
    {
        console.log('paused ' + event);

    }
    msg.onboundary = function (event)
    {
        console.log('onboundary ' + event);
    }

    return msg;
}
      /*mic handled*/
      React.useEffect(()=>{
      
        fetchPosts();
        speakOrNot();
    
          },[isSpeaking]);
  return (
<>

<Box>
 
    
 
 {
Isupdate?  <Box>
<Box className={classes.image}>
<Typography>Let Express</Typography>
</Box>
<FormControl className={classes.form}>
<InputBase placeholder='title' name='title' className={classes.titlearea} value={detail.title} onChange={handleChange} />
<Button variant='contained' color='primary' onClick={UpdateIt}>Update</Button>
</FormControl>
<TextareaAutosize className={classes.textarea} name='description' minRows={7} value={detail.description}  onChange={handleChange}/>
{isLoading ?<CircularProgress/>:""}
</Box> : <Box> 
<Banner /> 
{user && user.name === detail.name  ?
  
  <Grid container justifyContent="flex-end" >
  {/* <Link to={`/update/${detail._id}`} style={{textDecoration:'none',color:'inherit'}}> */}
  <BorderColorTwoToneIcon color='primary' className={classes.icons} onClick={handleUpdate}  />
  {/* </Link> */}
<DeleteSharpIcon color='secondary' className={classes.icons} onClick={handleDelete} />
</Grid> 
 :"" }
{ isLoading ? <CircularProgress/>:<Box><Typography className={classes.heading}>{detail.title}</Typography>
{ isSpeaking?<Box><MicIcon className={classes.mic} onClick={sayhello}/>   
  </Box> :
<Box><MicOffIcon className={classes.mic} onClick={sayhello}/></Box>}
 <Box className={classes.subheading}>
 
   <Typography>By:<span style={{fontWeight:600}}>{detail.name}</span></Typography>
 
   {/* <Typography style={{marginLeft:'auto'}}>Today Date</Typography> */}
 </Box>
 <Typography>{detail.description}
 </Typography></Box>}</Box>

 }


{/**Comments Sections */}
<span style={{color:'#c9dbe0'}}>Comments:</span>
<Comments post={detail}/>


  </Box>





</>
  
  
  )
}
