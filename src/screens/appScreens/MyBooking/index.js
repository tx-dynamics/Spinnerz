import React, {useCallback, useEffect, useState} from 'react'
import {View, StatusBar, Image, StyleSheet, Text, SafeAreaView, TextInput,useWindowDimensions, Dimensions, TouchableOpacity, FlatList, Platform} from "react-native"
import {useNavigation, useIsFocused} from '@react-navigation/native'
import {Colors, Images, Fonts} from 'src/utils'
import styles from './styles'
import BookingRequests from 'src/components/TabView/BookingRequests'
import CurrentBooking from 'src/components/TabView/CurrentBooking'
import PostBooking from 'src/components/TabView/PostBooking'

import { TabView, SceneMap , TabBar } from 'react-native-tab-view';

const renderScene = SceneMap({
    bookingRequests:BookingRequests, 
    currentBooking: CurrentBooking,
    postBooking: PostBooking, 
  });

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: 'white' }}
      labelStyle={{fontSize:12, fontFamily:Fonts.Bold, textTransform:"capitalize"}}
      style={{ backgroundColor: Colors.sky,  }}

    />
  );


const MyBooking = () => {
    let navigation = useNavigation()
    let isFocused = useIsFocused()
    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
      { key: 'currentBooking' , title: 'Current Booking'},
      { key: 'bookingRequests' , title: 'Booking Requests'},
      { key: 'postBooking', title: 'Past Booking'},
    ]);


  

    return(
        <View style={{flex:1,}}>
             <StatusBar translucent={false}
            barStyle={"default"}
            backgroundColor= {Colors.sky}/>
            <View style={styles.headerContainer}>
                <View style={{flexDirection:"row", height:"100%", marginTop:Platform.OS === 'android' ?  0: 20 }}>
                <TouchableOpacity onPress={() => navigation.goBack(null)}
                 style={{width:"15%", height:"100%", justifyContent:"center", alignItems:"center",}}>
                    <Image source ={Images.Menu} style={{width:18, height:12}} resizeMode={"contain"}/>
                </TouchableOpacity>
                <View style={{flex:1 , height:"100%", justifyContent:"center",}}>
                    <Text  style={styles.headerTxt}>My BOOKING</Text>
                </View>
                <View  style={{width:"15%", height:"100%", justifyContent:"center", alignItems:"center",}}>
                </View>
                
                </View>
             </View>

              
             <View style={{flex:1}}>
             <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: layout.width }}
                renderTabBar={renderTabBar}
    />
            {/* <TabView
            

            style={{ width: Dimensions.get("window").width }}

                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: layout.width }}
                renderTabBar={props => (
                    <View style={styles.tabBarContainer}>
                        {props.navigationState.routes.map((tab, key) => (
                            <View style={[styles.tabBarInnerContainer]}
                            key={key} onPress={() => props.jumpTo(tab.key)}>
                                {tab.key === "currentBooking" &&
                                    <TouchableOpacity  onPress={() => props.jumpTo(tab.key)}
                                    style={[styles.tabBarIconContainer, {borderBottomColor: key ==props.navigationState.index? Colors.white:{} , borderBottomWidth: key == props.navigationState.index? 1:0}]}>
                                        <Text style={styles.tabTxt}>Current Bookings</Text>
                                    </TouchableOpacity>
                                }

                                {tab.key == "bookingRequests" &&
                                    <TouchableOpacity onPress={() => props.jumpTo(tab.key)}
                                    style={[styles.tabBarIconContainer, {borderBottomColor: key ==props.navigationState.index? Colors.white:{} , borderBottomWidth: key == props.navigationState.index? 1:0}]}>
                                        <Text style={styles.tabTxt}>Booking  Requests</Text>
                                   </TouchableOpacity>
                                }
                                {tab.key == "postBooking" &&
                                    <TouchableOpacity onPress={() => props.jumpTo(tab.key)}
                                    style={[styles.tabBarIconContainer, {borderBottomColor: key ==props.navigationState.index? Colors.white:{} , borderBottomWidth: key == props.navigationState.index? 1:0}]}>
                                        <Text style={styles.tabTxt}>Past Bookings</Text>
                                    </TouchableOpacity> 
                                }
                               
                            </View>
                        ))}
                    </View>
                )}
                

                
            /> */}
    

    </View>


    
        </View>
   
    )
}

export default MyBooking
