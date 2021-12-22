import React  from "react"

import {createStackNavigator} from "@react-navigation/stack"
import Splash from 'src/screens//authScreens/Splash/Splash'
import DjSelect from 'src/screens//authScreens/DjSelect'
import Login from 'src/screens//authScreens/Login'
import Signup from 'src/screens//authScreens/Signup'
import ProfileSetup from 'src/screens//authScreens/ProfileSetup'


const AuthNavigator = createStackNavigator()


 
const MainNavigator =() => {
    return(
        
        <AuthNavigator.Navigator  
        screenOptions = {{
            headerShown: false
        }}>
            <AuthNavigator.Screen name="Splash" component={Splash}/>
            <AuthNavigator.Screen name="DjSelect" component={DjSelect}/>
            <AuthNavigator.Screen name="Login" component={Login}/>
            <AuthNavigator.Screen name="Signup" component={Signup}/>
            <AuthNavigator.Screen name="ProfileSetup" component={ProfileSetup}/>
        </AuthNavigator.Navigator>
    )
}
 export default MainNavigator