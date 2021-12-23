import React  from "react"
import { Platform, Keyboard ,Image, View, StyleSheet, Settings} from 'react-native';

import {createStackNavigator} from "@react-navigation/stack"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AuthNavigator from 'src/screens/authScreens/authNavigator'
import {Colors, Images, Fonts} from 'src/utils'
import {useSelector} from 'react-redux'

import Home from 'src/screens/appScreens/Home'
import ChatMember from 'src/screens/appScreens/ChatMember'
import Notification from 'src/screens/appScreens/Notification'
import MyBooking from 'src/screens/appScreens/MyBooking'
import Plus from 'src/screens/appScreens/Plus'
import Profile from 'src/screens/appScreens/Profile'
import Setting from 'src/screens/appScreens/Setting'
import EditProfile from 'src/screens/appScreens/EditProfile'
import Friends from 'src/screens/appScreens/Friends'
import ChatScreen from 'src/screens/appScreens/ChatScreen'


const StackNavigator = createStackNavigator()
const Tab = createBottomTabNavigator();



const HomeNavigator =() => {
    return(
        
        <StackNavigator.Navigator  
        screenOptions = {{
            headerShown: false
        }}>
            <StackNavigator.Screen name="Home" component={Home}/>
            <StackNavigator.Screen name="Profile" component={Profile}/>
            <StackNavigator.Screen name="Setting" component={Setting}/>
            <StackNavigator.Screen name="EditProfile" component={EditProfile}/>
            <StackNavigator.Screen name="Friends" component={Friends}/>
            <StackNavigator.Screen name="ChatScreen" component={ChatScreen}/>
            

        </StackNavigator.Navigator>
    )
}
const MyTabs = () =>  {

  
  
    return (
      <Tab.Navigator
      tabBarOptions={{
        keyboardHidesTabBar: true,
        showLabel:false, 
      }}
        screenOptions={{
            headerShown:false,
            tabBarStyle: {
            borderTopWidth:1,
            borderTopColor:Colors.white,
            borderTopLeftRadius:10,
            borderTopRightRadius:10,
            backgroundColor: Colors.white,
            border:0,
        },
      
       
    }}>
        <Tab.Screen name="TabScreen" component={HomeNavigator}
             options={{
                tabBarIcon: ({focused}) => (
                    focused?
                    <Image
                    source ={Images.ActiveHome}
                    style={{height:34, width:32,}}
                    resizeMode={"contain"}/>:
                   <Image
                    source ={Images.Home}
                    style={{height:20, width:18}}
                    resizeMode={"contain"}/>
                )}}
                />
        <Tab.Screen name="ChatMember" component={ChatMember}
        options={{showLabel: false,
            tabBarIcon: ({focused}) => (
                focused?
                <View style={{backgroundColor:Colors.sky, height:34, width:32, borderRadius:7, justifyContent:"center", alignItems:"center"}}>
                <Image
                source ={Images.WhiteChat}
                style={{height:18, width:19}}
                resizeMode={"contain"}/>
                </View>
                
                :<Image
                source ={Images.Chat}
                style={{height:18, width:19}}
                resizeMode={"contain"}/>
            )
        }} />
        <Tab.Screen name="Plus" component={Plus} 
        options={{
            tabBarIcon: ({focused}) => (
                <Image
                source ={Images.Plus}
                style={{height:51, width:51,}}
                resizeMode={"contain"}/>
            )
        }} 
        />
        <Tab.Screen name="Notification" component={Notification}
        options={{
            tabBarIcon: ({focused}) => (
                focused?
                <View style={{backgroundColor:Colors.sky, height:34, width:32, borderRadius:7, justifyContent:"center", alignItems:"center"}}>
                <Image
                source ={Images.WhiteNotification}
                style={{height:18, width:19}}
                resizeMode={"contain"}/>
                </View>:
                <Image
                source ={Images.Notification}
                style={{height:19, width:15}}
                resizeMode={"contain"}/>
            )
        }}  />
        <Tab.Screen name="MyBooking" component={MyBooking}
        
        options={{
            tabBarIcon: () => (
                <Image
                source ={Images.Collection}
                style={{height:20, width:20}}
                resizeMode={"contain"}/>
            )
        }} />
        
      </Tab.Navigator>
    );
  }

 
const MainNavigator =() => {
    
    const user = useSelector((state) => state.auth.user)
    if(user != null){
        return<MyTabs/>
    }
    else{
        return <AuthNavigator/>
    }
}
 export default MainNavigator

