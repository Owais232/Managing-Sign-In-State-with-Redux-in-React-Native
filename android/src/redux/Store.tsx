import { combineReducers,createStore } from "redux";
import Usereducer from "./Usereducer";


const initialstate={
    isSignedin: false,
    Usrname:'Owais'
}

const rootReducer=combineReducers({

    userData:Usereducer

})

export const Store=createStore(rootReducer)