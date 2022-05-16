export const LoginStart=(useCredentials)=>({
    type:"LOGIN_START"
})






export const LoginSuccess=(user)=>({
    type:"LOGIN_SUCCESS",
    payload:user,
});;

export const LoginFailure=()=>({
    type:"LOGIN_FAILED",
});
export const LogOut=()=>({
    type:"LOGOUT",
});
export const UpdateStart=(userCredentials)=>({
    type:"UPDATE_START",
})
export const UpdateSuccess=(user)=>({
    type:"UPDATE_SUCCESS",
})
export const UpdateFailure=(userCredentials)=>({
    type:"UPDATE_FAILED",
})

