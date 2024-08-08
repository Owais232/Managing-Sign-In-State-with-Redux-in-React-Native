import { combineReducers, createStore, Action } from "redux";
import Usereducer from "./Usereducer";
import { persistReducer, persistStore } from "redux-persist";
import storage from "@react-native-async-storage/async-storage";

// Define the initial state type
interface UserState {
  isSignedin: boolean;
  Usrname: string;
}

// Initial state
const initialstate: UserState = {
  isSignedin: false,
  Usrname: 'Owais'
};

// Define your persist config
const presistconfig = {
  key: "root",
  storage
};

// Combine reducers
const rootReducer = combineReducers({
  userData: persistReducer(presistconfig, Usereducer)
});

// Create the store with typed reducers and actions
export const Store = createStore(rootReducer);

// Define RootState type
export type RootState = ReturnType<typeof rootReducer>;

// Create a persistor
export const persistor = persistStore(Store);
