import React  from "react"

import {createStackNavigator} from "@react-navigation/stack"
import Splash from 'src/screens/authScreens/Common/Splash/Splash'
import DjSelect from 'src/screens/authScreens/Common/DjSelect'
import Login from 'src/screens/authScreens/Common/Login'
import Signup from 'src/screens/authScreens/Common/Signup'
import ProfileSetup from 'src/screens/authScreens/SelfDJ/ProfileSetup'
import Subscription from 'src/screens/authScreens/SelfDJ/Subscription'
import Payment from 'src/screens/authScreens/SelfDJ/Payment'
import PaymentMethod from 'src/screens/authScreens/SelfDJ/PaymentMethod'
import LookingSetupProfile from 'src/screens/authScreens/LookingForDJ/LookingSetupProfile'
import CityForDj from 'src/screens/authScreens/LookingForDJ/CityForDj'


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
            <AuthNavigator.Screen name="Subscription" component={Subscription}/>
            <AuthNavigator.Screen name="Payment" component={Payment}/>
            <AuthNavigator.Screen name="PaymentMethod" component={PaymentMethod}/>
            <AuthNavigator.Screen name="LookingSetupProfile" component={LookingSetupProfile}/>
            <AuthNavigator.Screen name="CityForDj" component={CityForDj}/>
        </AuthNavigator.Navigator>
    )
}
 export default MainNavigator