import React, {useCallback, useEffect, useState} from 'react'
import {View, StatusBar, Image, StyleSheet, Text, SafeAreaView, TextInput, TouchableOpacity, FlatList, Platform} from "react-native"
import {useNavigation, useIsFocused} from '@react-navigation/native'
import {Colors, Images} from 'src/utils'
import styles from './styles'
import  Header  from 'src/components/Header'
import ConfirmRequestModalView from 'src/components/Modal/ConfirmRequest'
import ShareModalView from 'src/components/Modal/ShareModal'


const CreatePost = () => {
    let navigation = useNavigation()
    let isFocused = useIsFocused()


  

    return(
        <View style={{flex:1, backgroundColor:Colors.white}}>
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
                    <Text style={styles.headerTxt}>Create post</Text>
                </View>
                <View style={{width:"15%",}}></View>
                
                </View>
             </View>

             <View style={{flex:1,marginTop:15,marginHorizontal:20}}>
                 <View style={{flexDirection:"row"}}>
                     <Image source= {Images.ChatUser} style={{height:45 , width:45}} resizeMode={"contain"}/>
                     <View style={{marginStart:12}}>
                         <Text style={styles.userName}>William James</Text>
                         <Text style={styles.userDes}>Barcelona</Text>
                     </View>
                 </View>
                 <View style={{marginTop:18, backgroundColor:"rgba(62, 186, 255, 0.19)", height:205, borderRadius:4, borderWidth:1, borderColor:Colors.sky}}>
                 <TextInput 
                        placeholderTextColor={Colors.darkBlack}
                        placeholder={"Add something here..."}
                        multiline={true}
                        underlineColorAndroid="transparent" 
                        style={styles.inputField}/>
                 </View>

                 <TouchableOpacity 
                style={{backgroundColor:Colors.sky, position:"absolute", bottom:50, height:48, width:"100%", borderRadius:6, justifyContent:"center"}}>
                    <Text style={styles.postTxt}>Post</Text>
                </TouchableOpacity>
          
             </View>
    
        </View>
   
    )
}

export default CreatePost
