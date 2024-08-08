import React, { useState } from "react";
import { Button, Text, Vibration, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Logout } from "../redux/UserActions";
import { RootState } from "../redux/Store";


const Setting=()=>{
    
    const isSignedin=useSelector((state: RootState)=>state.userData.isSignedin);
    const name=useSelector((state: RootState)=>state.userData.Usrname);

    const dispatch=useDispatch();
    return(
        <View style={{justifyContent:'center',alignContent:'center',alignItems:'center',flex:1}}>
            {isSignedin?(
                <View>
                <Text>Your name :{name} </Text>
                
                </View>
            ):(
                <View>
                <Text>Please Sign In First </Text>
              
                
                </View>


            )}
              <Button title="Log out " onPress={()=>dispatch(Logout())}/>

        </View>
    );
};
export default Setting;