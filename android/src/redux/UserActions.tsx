
 export const Login=()=>{
    return{
        type:"Login",
        payload: true
 };
};



export const Logout=()=>{
    return{
        type:"Logout",
        payload: false
 };
};


export const Changeusername=(Usrname: string)=>{
    return{
        type:"Changeusername",
        payload: Usrname
 };
};