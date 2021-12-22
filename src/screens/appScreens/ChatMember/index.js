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
            name:"Emma White",
            lastMsg:"Typing..",
            image:Images.MyBooking
        },
        {
            id:2,
            image:Images.PaymentMethod,
            lastMsg:"Yes",
            name:"Alex Jhones",
        },
        {
            id:3,
            image:Images.HelpCenter,
            lastMsg:"Yes",
            name:"Sophia",
        },
        {
            id:4,
            lastMsg:"Yes",
            image:Images.Advertisment,
            name:"Amelia",
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
                    <Image source ={Images.Menu} style={{width:18, height:12}} resizeMode={"contain"}/>
                </TouchableOpacity>
                <View style={{flex:1 , height:"100%", justifyContent:"center",}}>
                    <Text style={styles.headerTxt}>Chats</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.goBack(null)}
                 style={{width:"15%", height:"100%", justifyContent:"center", alignItems:"center",}}>
                    <Image source ={Images.WhiteMore} style={{width:24, height:24}} resizeMode={"contain"}/>
                </TouchableOpacity>
                
                </View>
             </View>

             <View style={{flex:1,marginTop:10}}>
             <FlatList
            data={HomeData}
            contentContainerStyle={{marginHorizontal:20}}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item , index}) => (
                <TouchableOpacity onPress={() => navigation.navigate("ChatScreen")}
                style={styles.listContiner}>
                    <View style={styles.innerContainer}>
                        <Image source={Images.ChatUser} style={{height:45, width:45,marginStart:10 }} resizeMode={"contain"}/>
                    <View style={styles.userNameContainer}>
                        <Text style={styles.userTxt}>{item.name}</Text>
                        <Text style={styles.lastMsgTxt}>{item.lastMsg}</Text>
                    </View>
                    <Text style={[styles.lastMsgTxt, {marginRight:11}]}>02:40 pm</Text>

                    </View>
                </TouchableOpacity>
            )}
            />
             </View>
    
        </View>
   
    )
}

export default ChatMember
