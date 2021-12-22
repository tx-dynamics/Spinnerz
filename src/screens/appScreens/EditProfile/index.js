import React, {useEffect, useState} from 'react'
import {View, StatusBar, Image, StyleSheet, ImageBackground, Text,ScrollView, TouchableOpacity, SafeAreaView, Platform, TextInput} from "react-native"
import {useNavigation} from '@react-navigation/native'
import {Colors, Images} from 'src/utils'
import styles from './styles'



const EditProfile = () => {
let navigation = useNavigation()
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


    return(
        <ImageBackground 
        source ={Images.LoginBack}
        style ={styles.container}
        >

            <StatusBar hidden={false}
            translucent={false}
            barStyle={"light-content"}
            backgroundColor={Colors.black}
            />
            
            <View style={styles.headerContainer}>
                <TouchableOpacity style={{width:"10%",paddingVertical:10}}
                onPress={() => navigation.goBack(null)}>

                 <Image source= {Images.LeftArrow} style={styles.arrowLeft} resizeMode={"contain"}/>
                </TouchableOpacity>
                <Text style={styles.profileTxt}>My Profile</Text>
                <View style={{width:"10%"}}></View>
             </View>
           
             <ScrollView style={{flex:1, marginTop:20,}} showsVerticalScrollIndicator={false}>
                 <View style={{justifyContent:"center"}}>
                    <Image source= {Images.User} style={styles.userProfile} resizeMode={"contain"}/>
                    <Image source= {Images.WhiteCamera} style={styles.camera} resizeMode={"contain"}/>
                 </View>


                <View style={{backgroundColor:"rgba(62, 186, 255, 0.5)",  marginHorizontal:20, marginTop:30, borderRadius:10, paddingVertical:20,}}>
                    <View style={[styles.innerContainer, {marginTop:0}]}>
                        <Text style={styles.profileContainerTxt}>Name</Text>
                       <Image source={Images.RightArrow} style={styles.rightArrow} resizeMode={"contain"}/>
                    </View>
                    <View style={styles.innerContainer}>
                        <Text style={styles.profileContainerTxt}>Phone number</Text>
                        <Image source={Images.RightArrow} style={styles.rightArrow} resizeMode={"contain"}/>

                    </View>
                    <View style={styles.innerContainer}>
                        <Text style={styles.profileContainerTxt}>Email</Text>
                        <Image source={Images.RightArrow} style={styles.rightArrow} resizeMode={"contain"}/>
                    </View>
                    <View style={styles.innerContainer}>
                        <Text style={styles.profileContainerTxt}>City</Text>
                       <Image source={Images.RightArrow} style={styles.rightArrow} resizeMode={"contain"}/>
                    </View>

                </View>

                <View style={{flexDirection:"row", width:"90%", justifyContent:"space-evenly", marginTop:35, marginHorizontal:20}}>
                    <TouchableOpacity
                    style={{ paddingVertical:7, backgroundColor:Colors.white, width:111, borderRadius:6}}>
                        <Text style={[styles.btnTxt, {color:Colors.black}]}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ paddingVertical:7, backgroundColor:Colors.sky, width:111,borderRadius:6}}>
                        <Text style={styles.btnTxt}>Save</Text>
                    </TouchableOpacity>
                    
                </View>
               
               

             </ScrollView>
            
        </ImageBackground>
    )
}

export default EditProfile

