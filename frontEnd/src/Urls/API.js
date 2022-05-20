const URL=process.env.API_URL;




export const PostUrl=()=>{
    return(`${URL}/api/post`);
}





export const AuthUrl=()=>{
return  (`${URL}/api/auth`);
}