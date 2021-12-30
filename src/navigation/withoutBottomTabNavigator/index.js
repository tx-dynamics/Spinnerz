import React from "react"

import { createStackNavigator } from "@react-navigation/stack"
import ChatScreen from 'src/screens/appScreens/ChatScreen'
import FilterScreen from 'src/screens/appScreens/FilterScreen'
import BoostPost from 'src/screens/appScreens/BoostPost'
import AddPaymentMethod from 'src/screens/appScreens/AddPaymentMethod'
import BoostingDashboard from 'src/screens/appScreens/BoostingDashboard'
import Advertisement from 'src/screens/appScreens/Advertisement'
import Setting from 'src/screens/appScreens/Setting'
import Friends from 'src/screens/appScreens/Friends'
import FriendRequest from 'src/screens/appScreens/FriendRequest'
import EditProfile from 'src/screens/appScreens/EditProfile'
import UploadDemo from 'src/screens/appScreens/UploadDemo'
import UploadAudio from 'src/screens/appScreens/UploadAudio'
import UploadVideo from 'src/screens/appScreens/UploadVideo'
import UploadedVideo from 'src/screens/appScreens/UploadedVideo'
import UploadedAudio from 'src/screens/appScreens/UploadedAudio'
import SelectTimeAndDate from 'src/screens/appScreens/SelectTimeAndDate'

const StackNavigator = createStackNavigator()



const withoutBottomTabNavigator = () => {

    return (

        <StackNavigator.Navigator
            screenOptions={{
                headerShown: false
            }}>
            <StackNavigator.Screen name="ChatScreen" component={ChatScreen} />
            <StackNavigator.Screen name="FilterScreen" component={FilterScreen} />
            <StackNavigator.Screen name="BoostPost" component={BoostPost} />
            <StackNavigator.Screen name="AddPaymentMethod" component={AddPaymentMethod} />
            <StackNavigator.Screen name="BoostingDashboard" component={BoostingDashboard} />
            <StackNavigator.Screen name="Advertisement" component={Advertisement} />
            <StackNavigator.Screen name="Setting" component={Setting} />
            <StackNavigator.Screen name="Friends" component={Friends} />
            <StackNavigator.Screen name="FriendRequest" component={FriendRequest} />
            <StackNavigator.Screen name="EditProfile" component={EditProfile} />
            <StackNavigator.Screen name="UploadDemo" component={UploadDemo} />
            <StackNavigator.Screen name="UploadAudio" component={UploadAudio} />
            <StackNavigator.Screen name="UploadVideo" component={UploadVideo} />
            <StackNavigator.Screen name="UploadedVideo" component={UploadedVideo} />
            <StackNavigator.Screen name="UploadedAudio" component={UploadedAudio} />
            <StackNavigator.Screen name="SelectTimeAndDate" component={SelectTimeAndDate} />

        </StackNavigator.Navigator>
    )
}




export default withoutBottomTabNavigator

