import React, {useEffect, useState} from 'react'
import {View, StatusBar, Image, StyleSheet, ImageBackground, Text,ScrollView, TouchableOpacity, SafeAreaView, Platform, TextInput} from "react-native"
import {useNavigation} from '@react-navigation/native'
import {Colors, Images} from 'src/utils'
import styles from './styles'




const Signup = () => {
let navigation = useNavigation()
const [displayPassword , setDisplayPassword] = useState(true)

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
            <TouchableOpacity style={{width:"10%",paddingVertical:10}}
                onPress={() => navigation.goBack(null)}>

                 <Image source= {Images.LeftArrow} style={styles.arrowLeft} resizeMode={"contain"}/>
                </TouchableOpacity>
             </View>
             <ScrollView style={{marginHorizontal:20}} showsVerticalScrollIndicator={false}>
            
             <Image
                source={Images.Logo}
                style={styles.splashImage}
                resizeMode={"contain"}/>
                <Text style={styles.loginTxt}>Create a new account</Text>
                <View style={[styles.inputContainer, {marginTop:30}]}>
                     <TextInput 
                        placeholder={"First Name"}
                        placeholderTextColor={Colors.black}
                        multiline={false}
                        keyboardType="default"
                        underlineColorAndroid="transparent" 
                        style={styles.inputField}/>
                </View>
                <View style={styles.inputContainer}>
                     <TextInput 
                        placeholder={"Last Name"}
                        placeholderTextColor={Colors.black}
                        multiline={false}
                        keyboardType="default"
                        underlineColorAndroid="transparent" 
                        style={styles.inputField}/>
                </View>
                <View style={styles.inputContainer}>
                     <TextInput 
                        placeholder={"Email"}
                        placeholderTextColor={Colors.black}
                        multiline={false}
                        keyboardType="email-address"
                        underlineColorAndroid="transparent" 
                        style={styles.inputField}/>
                </View>
                <View style={styles.inputContainer}>
                     <TextInput 
                        secureTextEntry={displayPassword}
                        placeholderTextColor={Colors.black}
                        placeholder={"Password"}
                        multiline={false}
                        keyboardType="default"
                        underlineColorAndroid="transparent" 
                        style={styles.inputField}/>
                        <TouchableOpacity 
                        onPress={() => setDisplayPassword(!displayPassword)}>
                        <Image
                            source={Images.PasswordEye} style={styles.passwordEye} resizeMode={"contain"}
                        />
                        </TouchableOpacity>
                </View>
                
             

                <TouchableOpacity onPress={() => navigation.navigate("ProfileSetup")}
                style={styles.btnContainer}>
                    <Text style={styles.btnLoginTxt}>Sign Up</Text>
                </TouchableOpacity>
                
            </ScrollView>
            <View
                style={styles.btnSignupContainer}>
                    <Text style={styles.dontHaveAccountTxt}>Already have an account?  </Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Login")}>

                    <Text style={[styles.dontHaveAccountTxt , {color:Colors.sky}]}>Login Here</Text>
                    </TouchableOpacity>
                </View>
             
        </ImageBackground>
        </View>
    )
}

export default Signup

