const initialstate={
    isSignedin: false,
    Usrname:'Owais'
}


export default(state=initialstate,{type,payload})=>{

    switch(type){
        case "Login":
        return {...state,isSignedin:payload}

        case "Logout":
            return{...state ,isSignedin:payload}

        case "Changeusername":
            return{...state, Usrname:payload}
    }



    return state;
}