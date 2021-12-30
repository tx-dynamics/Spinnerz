import React from "react"
import {Image, View, } from 'react-native';

import { createStackNavigator } from "@react-navigation/stack"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider as PaperProvider } from 'react-native-paper';
import { BottomFabBar } from 'src/bottomTab';
import { Colors, Images,  } from 'src/utils'
import {useSelector} from 'react-redux'


import Home from 'src/screens/appScreens/Home'
import ChatMember from 'src/screens/appScreens/ChatMember'
import Notification from 'src/screens/appScreens/Notification'
import MyBooking from 'src/screens/appScreens/MyBooking'
import CreatePost from 'src/screens/appScreens/CreatePost'
import Profile from 'src/screens/appScreens/Profile'
import UserProfile from 'src/screens/appScreens/UserProfile'
import BoostingPost from 'src/screens/appScreens/BoostingPost'
import ViewProfile from 'src/screens/appScreens/ViewProfile'
import LookingDJHome from 'src/screens/appScreens/LookingDJHome'





const StackNavigator = createStackNavigator()
const Tab = createBottomTabNavigator();

const tabBarIcon1 =
    (name) =>
        ({ focused, color, size, index }) =>
            focused ?
                <Image
                    source={Images.ActiveHome}
                    style={{ height: 34, width: 32, }}
                    resizeMode={"contain"} /> :
                <Image
                    source={Images.Home}
                    style={{ height: 20, width: 18 }}
                    resizeMode={"contain"} />
const tabBarIcon2 =
    (name) =>
        ({ focused, color, size, index }) =>
            focused ?
                <View style={{ backgroundColor: Colors.sky, height: 34, width: 32, borderRadius: 7, justifyContent: "center", alignItems: "center" }}>
                    <Image
                        source={Images.WhiteChat}
                        style={{ height: 18, width: 19 }}
                        resizeMode={"contain"} />
                </View>

                : <Image
                    source={Images.Chat}
                    style={{ height: 18, width: 19 }}
                    resizeMode={"contain"} />
const tabBarIcon3 =
    (name) =>
        ({ focused, color, size, index }) =>
            focused ?
                <View style={{ backgroundColor: Colors.sky, height: 34, width: 32, borderRadius: 7, justifyContent: "center", alignItems: "center" }}>
                    <Image
                        source={Images.WhiteNotification}
                        style={{ height: 18, width: 19 }}
                        resizeMode={"contain"} />
                </View> :
                <Image
                    source={Images.Notification}
                    style={{ height: 19, width: 15 }}
                    resizeMode={"contain"} />
const tabBarIcon4 =
    (name) =>
        ({ focused, color, size, index }) =>
            focused ?
                <View style={{ backgroundColor: Colors.sky, height: 34, width: 32, borderRadius: 7, justifyContent: "center", alignItems: "center" }}>
                    <Image
                        source={Images.Collection}
                        style={{ height: 18, width: 19, tintColor: Colors.white }}
                        resizeMode={"contain"} />
                </View> :
                <Image
                    source={Images.Collection}
                    style={{ height: 20, width: 20 }}
                    resizeMode={"contain"} />
const tabBarIconn =
    (name) =>
        ({ focused, color, size, index }) =>
            <Image source={focused ? Images.Plus : Images.Plus} style={{ height: 60, width: 60, marginBottom: 20 }} />;

const HomeNavigator =() => {
const djHimself = useSelector((state) => state.auth.djHimself)

    return (
        <StackNavigator.Navigator
        screenOptions={{
            headerShown: false
        }}>
        <StackNavigator.Screen name="Home" component={djHimself === true ?Home : LookingDJHome} />
        <StackNavigator.Screen name="Profile" component={Profile} />
        <StackNavigator.Screen name="UserProfile" component={UserProfile} />
        <StackNavigator.Screen name="BoostingPost" component={BoostingPost} />
        <StackNavigator.Screen name="ViewProfile" component={ViewProfile} />


    </StackNavigator.Navigator>
    )
}

const bottomTabNavigator = () => {
    return (
        <PaperProvider>
            <Tab.Navigator
                screenOptions={{
                    tabBarActiveTintColor: 'linear-gradient(136.42deg, rgba(255, 196, 69, 0.6) 4.8%, rgba(168, 115, 0, 0.6) 99.39%)',
                    tabBarActiveBackgroundColor: '#FFFFFF',
                    tabBarInactiveBackgroundColor: 'red',
                    headerShown: false,
                    tabBarHideOnKeyboard: true,
                }}
                tabBar={(props) => (
                    <BottomFabBar
                        // Add Shadow for active tab bar button
                        focusedButtonStyle={{
                            shadowColor: '#000',
                            shadowOffset: {
                                width: 0,
                                height: 7,
                            },
                            shadowOpacity: 0.41,
                            shadowRadius: 9.11,
                            elevation: 14,

                        }}
                        // - You can add the style below to show content screen under the tab-bar
                        // - It will makes the "transparent tab bar" effect.
                        bottomBarContainerStyle={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                        }}
                        {...props}
                    />
                )}

            >
                <Tab.Screen
                    options={{
                        tabBarIcon: tabBarIcon1(),
                    }}
                    name="TabScreens"
                    component={HomeNavigator}
                />
                <Tab.Screen
                    name="ChatMember"
                    options={{ tabBarIcon: tabBarIcon2() }}
                    component={ChatMember}
                />
                <Tab.Screen
                    options={{
                        tabBarIcon: tabBarIconn()

                        // tabBarActiveBackgroundColor: '#45014A',
                        // tabBarActiveTintColor: 'purple',
                    }}
                    name="CreatePost"
                    component={CreatePost}
                />
                <Tab.Screen
                    options={{ tabBarIcon: tabBarIcon3() }}
                    name="Notification"
                    component={Notification}
                />
                <Tab.Screen
                    options={{ tabBarIcon: tabBarIcon4() }}
                    name="MyBooking"
                    component={MyBooking}
                />
            </Tab.Navigator>
        </PaperProvider>
    )
}


export default bottomTabNavigator
