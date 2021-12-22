import React, {useCallback, useEffect, useState} from 'react'
import {View, StatusBar, Image, StyleSheet, Text, SafeAreaView, TextInput, TouchableOpacity, FlatList, Platform} from "react-native"
import {useNavigation, useIsFocused} from '@react-navigation/native'
import {Colors, Images} from 'src/utils'
import styles from './styles'
import  Header  from 'src/components/Header'
import ConfirmRequestModalView from 'src/components/Modal/ConfirmRequest'
import ShareModalView from 'src/components/Modal/ShareModal'


const ChatMember = () => {
    let navigation = useNavigation()
    let isFocused = useIsFocused()

  
    
      const HomeData = [
        {
            id:1,
            name:"Alex Jhones Sent you a booking request",
            lastMsg:"1 hour ago",
        },
        {
            id:2,
            name:"Alex Jhones Sent you a booking request",
            lastMsg:"1 hour ago",
        },
        {
            id:3,
            name:"Alex Jhones Sent you a booking request",
            lastMsg:"1 hour ago",
        },
        {
            id:4,
            name:"Alex Jhones Sent you a booking request",
            lastMsg:"1 hour ago",
        },
        
    ]

  

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
                    <Text style={styles.headerTxt}>Notifications</Text>
                </View>
                <View  style={{width:"15%", height:"100%", justifyContent:"center", alignItems:"center",}}>
                </View>
                
                </View>
             </View>

             <View style={{flex:1,marginTop:10, backgroundColor:Colors.white}}>
             <FlatList
            data={HomeData}
            contentContainerStyle={{marginHorizontal:20}}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item , index}) => (
                <View
                style={styles.listContiner}>
                    <View style={styles.innerContainer}>
                        <Image source={Images.ChatUser} style={{height:45, width:45,marginStart:10 }} resizeMode={"contain"}/>
                    <View style={styles.userNameContainer}>
                        <Text style={styles.userTxt}>{item.name}</Text>
                        <Text style={styles.lastMsgTxt}>{item.lastMsg}</Text>
                    </View>

                    </View>
                </View>
            )}
            />
             </View>
    
        </View>
   
    )
}

export default ChatMember
