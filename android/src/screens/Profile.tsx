import React, { useState } from "react";
import { Button, Text, Vibration, View } from "react-native";
import { useSelector } from "react-redux";


const Profile=()=>{
    const isSignedin=useSelector(state=>state.userData.isSignedin);
    const name=useSelector(state=>state.userData.Usrname);
    return(
        <View style={{justifyContent:'center',alignContent:'center',alignItems:'center',flex:1}}>
            {isSignedin?(
                <View>
                <Text>Hello{name} </Text>
                
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