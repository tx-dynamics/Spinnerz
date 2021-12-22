import React, {useEffect, useState} from 'react'
import {View, StatusBar, Image, StyleSheet, ImageBackground, Text,ScrollView, TouchableOpacity, SafeAreaView, Platform, TextInput} from "react-native"
import {useNavigation} from '@react-navigation/native'
import {Colors, Images} from 'src/utils'
import styles from './styles'




const ProfileSetup = () => {
let navigation = useNavigation()


    return(
        <View style={styles.container}>
        <ImageBackground 
        source ={Images.SignupBack}
        style ={styles.container}
        >

            <StatusBar hidden={false}
            translucent={false}
            barStyle={"light-content"}
            backgroundColor={Colors.black}
            />
            
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => navigation.goBack(null)}>

                 <Image source= {Images.LeftArrow} style={styles.arrowLeft} resizeMode={"contain"}/>
                </TouchableOpacity>
                 <Text style={styles.setupTxt}>Set up your profile</Text>
             </View>
             <ScrollView style={{marginHorizontal:20}}>
                <View style={{marginVertical:40}}>
                <TouchableOpacity style={styles.imageContainer}>
                    <Image source ={Images.Camera} resizeMode={"contain"} style={{width:47 , height:35 , alignSelf:"center"}}/>
                 </TouchableOpacity>
                 <Text style={styles.addPhotoTxt}>Add Photo</Text>
                </View>
                 
            
             
                <View style={[styles.inputContainer, {marginTop:30}]}>
                     <TextInput 
                        placeholder={"Name"}
                        placeholderTextColor={Colors.black}
                        multiline={false}
                        keyboardType="default"
                        underlineColorAndroid="transparent" 
                        style={styles.inputField}/>
                </View>
                <View style={styles.inputContainer}>
                     <TextInput 
                        placeholder={"Username"}
                        placeholderTextColor={Colors.black}
                        multiline={false}
                        keyboardType="default"
                        underlineColorAndroid="transparent" 
                        style={styles.inputField}/>
                </View>
                <View style={styles.inputContainer}>
                     <TextInput 
                        placeholder={"City"}
                        placeholderTextColor={Colors.black}
                        multiline={false}
                        keyboardType="email-address"
                        underlineColorAndroid="transparent" 
                        style={styles.inputField}/>
                </View>
                <View style={styles.inputContainer}>
                     <TextInput 
                        placeholderTextColor={Colors.black}
                        placeholder={"Hourly Rate"}
                        multiline={false}
                        keyboardType="numeric"
                        underlineColorAndroid="transparent" 
                        style={styles.inputField}/>
                        <Image source={Images.Dollor} style={{width:10, height:20, marginHorizontal:18}} resizeMode={"contain"}/>
                </View>
                
             

                <TouchableOpacity onPress={() => navigation.navigate("Login")}
                style={styles.btnContainer}>
                    <Text style={styles.btnLoginTxt}>Next</Text>
                </TouchableOpacity>
                
            </ScrollView>
       
             
        </ImageBackground>
        </View>
    )
}

export default ProfileSetup

