import React, {useCallback, useEffect, useState} from 'react'
import {View, StatusBar, Image, StyleSheet, Text, SafeAreaView, TextInput, TouchableOpacity, FlatList, Platform} from "react-native"
import {useNavigation, useIsFocused} from '@react-navigation/native'
import {Colors, Images} from 'src/utils'
import styles from './styles'
import Camera from '../../../components/Camera'
import Video from 'react-native-video';





const UploadedVideo = () => {
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
                 <View>
                    <Video source={require('../../../assets/videos/Video5.mp4')}   // Can be a URL or a local file.
                        repeat={true}
                        muted={true}               // Callback when video cannot be loaded
                        posterResizeMode="stretch"
                        resizeMode="stretch"
                        hideShutterView={true}
                        duration={true}
                        style={{ height: 206, borderRadius: 10, marginTop: 9 }}>
                    </Video>
                    <Text style={styles.durationTimeVideo}>30:00</Text>
                    <View style={{ position: "absolute", justifyContent: "center", alignSelf: "center", alignItems: 'center', bottom: 70 }}>
                        <Image source={Images.Play} resizeMode={"contain"} style={{ height: 29, width: 24, }} />
                    </View>


                </View>
                <TouchableOpacity style={{flexDirection:"row", height:35, paddingHorizontal:12, backgroundColor:"#FF8585", borderRadius:6 ,marginTop:20, justifyContent:"center", alignSelf:"flex-end", alignItems:"center"}}>
                    <Image source={Images.Delete} style={{width:11 , height:14}}/>
                    <Text style={styles.delete}>Delete</Text>
                    
                </TouchableOpacity>
            

                 <TouchableOpacity onPress={() => navigation.navigate("UploadedVideo")}
                style={{backgroundColor:Colors.sky, position:"absolute", bottom:50, height:48, width:"100%", borderRadius:6, justifyContent:"center"}}>
                    <Text style={styles.postTxt}>Post</Text>
                </TouchableOpacity>
          
             </View>
    
        </View>
   
    )
}

export default UploadedVideo
