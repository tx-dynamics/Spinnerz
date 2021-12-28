import React, {useCallback, useEffect, useState} from 'react'
import {View, StatusBar, Image, StyleSheet, Text, SafeAreaView, TextInput, TouchableOpacity, FlatList, Platform} from "react-native"
import {useNavigation, useIsFocused} from '@react-navigation/native'
import {Colors, Images} from 'src/utils'
import styles from './styles'
import Camera from '../../../components/Camera'




const UploadVideo = () => {
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
                    <Text style={styles.headerTxt}>Upload Demo </Text>
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
                 <TouchableOpacity style={{marginTop:18, backgroundColor:"rgba(62, 186, 255, 0.19)", height:205, borderRadius:4, borderWidth:1, borderColor:Colors.sky, justifyContent:"center", alignItems:"center"}}>
                 <Image source={Images.Video} style={{height:32 , width:32 ,tintColor:Colors.black}} resizeMode={"contain"}/>

                    <Text style={styles.uploadTxt}>Upload video</Text>
                 </TouchableOpacity>
            

                 <TouchableOpacity onPress={() => navigation.navigate("UploadedVideo")}
                style={{backgroundColor:Colors.sky, position:"absolute", bottom:50, height:48, width:"100%", borderRadius:6, justifyContent:"center"}}>
                    <Text style={styles.postTxt}>Post</Text>
                </TouchableOpacity>
          
             </View>
    
        </View>
   
    )
}

export default UploadVideo
