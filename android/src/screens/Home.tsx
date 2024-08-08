import { useState } from "react";
import { Button, Text, View } from "react-native";
import { useSelector } from "react-redux";


const Home=()=>{
    
    const isSignedin=useSelector(state=>state.userData.isSignedin);
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
            </View>
            
        )}
       </View>
    );

}

export default Home;