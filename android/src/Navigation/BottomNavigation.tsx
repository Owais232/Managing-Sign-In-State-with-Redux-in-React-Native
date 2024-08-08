import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/Home";
import { Settings } from "react-native";
import Setting from "../screens/Settings";
import Profile from "../screens/Profile";


const Tab=createBottomTabNavigator();

const BottomNavigation=()=>{
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={Home}/>
                <Tab.Screen name="Setting" component={Setting}/>
                <Tab.Screen name="Profile" component={Profile}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default BottomNavigation;