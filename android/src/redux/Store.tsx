import { combineReducers,createStore } from "redux";


const initialstate={
    isSignedin: true,
    Usrname:'Owais'
}

const rootReducer=combineReducers({

    userData:()=>initialstate

})

export const Store=createStore(rootReducer)