import React, {useCallback, useEffect, useState} from 'react'
import {View, StatusBar, Image, StyleSheet, Text, SafeAreaView, TextInput, TouchableOpacity, FlatList, Platform} from "react-native"
import {useNavigation, useIsFocused} from '@react-navigation/native'
import {Colors, Images} from 'src/utils'
import styles from './styles'
import  Header  from 'src/components/Header'
import ConfirmRequestModalView from 'src/components/Modal/ConfirmRequest'
import ShareModalView from 'src/components/Modal/ShareModal'


const Setting = () => {
    let navigation = useNavigation()
    let isFocused = useIsFocused()
    useEffect(() => {
        const parent = navigation.getParent();
        parent.setOptions({
          tabBarVisible: false, //hide tab bar on this screen
        });
        return () =>
          parent.setOptions({
            tabBarVisible: true, //hide tab bar on this screen
           
            tabStyle: [
              {
                marginBottom: 5,
              },
            ],
            labelStyle: {
              marginBottom: 5,
            },
          });
      }, [navigation]);
    
      const HomeData = [
        {
            id:1,
            name:"My Bookings",
            image:Images.MyBooking
        },
        {
            id:2,
            image:Images.PaymentMethod,
            name:"Payment Method",
        },
        {
            id:3,
            image:Images.HelpCenter,
            name:"Booking details",
        },
        {
            id:4,
            image:Images.Advertisment,
            name:"Advertisement",
        },
        {
            id:5,
            image:Images.Friends,
            name:"Friends",
        },
        {
            id:6,
            image:Images.BackDollor,
            name:"Hourly rate",
        },
        {
            id:7,
            image:Images.HelpCenter,
            name:"Help Center",
        },
        {
            id:7,
            image:Images.AboutUs,
            name:"About Us",
        },
    ]

  

    return(
        <View style={{flex:1}}>
             <StatusBar translucent={false}
            barStyle={"default"}
            backgroundColor= {Colors.sky}/>
            <View style={styles.headerContainer}>
                <View style={{flexDirection:"row", height:"100%", marginTop:Platform.OS === 'android' ?  0: 20 }}>
                <TouchableOpacity onPress={() => navigation.goBack(null)}
                 style={{width:"15%", height:"100%", justifyContent:"center", alignItems:"center",}}>
                    <Image source ={Images.LeftArrow} style={{width:7, height:14}} resizeMode={"contain"}/>
                </TouchableOpacity>
                <View style={{flex:1 , height:"100%", justifyContent:"center",}}>
                    <Text style={styles.headerTxt}>SETTINGS</Text>
                </View>
                <View style={{width:"15%",}}></View>
                
                </View>
             </View>

             <View style={{flex:1,marginTop:10}}>
             <FlatList
            data={HomeData}
            contentContainerStyle={{marginHorizontal:10}}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item , index}) => (
                <TouchableOpacity style={styles.listContiner}>
                    <View style={styles.innerContainer}>
                    <View style={{backgroundColor:Colors.sky,height:28, width:28, justifyContent:"center",alignItems:"center" , borderRadius:4, marginStart:16}}>
                        <Image source={item.image} style={{height:14, width:14, }} resizeMode={"contain"}/>
                    </View>
                    <View style={styles.userNameContainer}>
                        <Text style={styles.userTxt}>{item.name}</Text>
                    </View>
                    </View>
                </TouchableOpacity>
            )}
            />
             </View>
    
        </View>
   
    )
}

export default Setting
