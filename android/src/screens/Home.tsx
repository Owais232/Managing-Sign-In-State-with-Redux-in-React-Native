import { useState } from "react";
import { Button, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Login } from "../redux/UserActions";
import { RootState } from "../redux/Store";


const Home=()=>{
    
    const isSignedin=useSelector((state: RootState)=>state.userData.isSignedin);

    const dispatch=useDispatch();
    return(

    <View style={{justifyContent:'center',alignContent:'center',alignItems:'center',flex:1}}>
        <Text>
            Signed in status {isSignedin? 'yes': 'no'}
        </Text>

        {isSignedin?(
            <View>
                <Text>Welcome to the home screen </Text>
            </View>
            
        ):(
            <View>
                <Text>Please Sign in </Text>
                <Button title="Log In " onPress={()=>dispatch(Login())}/>
            </View>
            
        )}
       </View>
    );

}

export default Home;