import React, { useState } from "react";
import { Button, Text, Vibration, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Changeusername } from "../redux/UserActions";
import { RootState } from "../redux/Store";


const Profile=()=>{
    const isSignedin=useSelector((state: RootState)=>state.userData.isSignedin);
    const name=useSelector((state: RootState)=>state.userData.Usrname);
    const dispatch=useDispatch();
    return(
        <View style={{justifyContent:'center',alignContent:'center',alignItems:'center',flex:1}}>
            {isSignedin?(
                <View>
                <Text>Hello{name} </Text>
                <Button title="Change name" onPress={()=>dispatch(Changeusername("ali"))}/>
                
                </View>
            ):(
                <View>
                <Text>Please Sign In First </Text>
                
                </View>


            )}
            

        </View>
    );
};
export default Profile;