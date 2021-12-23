import React, {useEffect, useState} from 'react'
import {View, StatusBar, Image, StyleSheet, ImageBackground, Text,ScrollView, TouchableOpacity, SafeAreaView, Platform, TextInput} from "react-native"
import {useNavigation} from '@react-navigation/native'
import {Colors, Images} from 'src/utils'
import styles from './styles'
import {setUser} from 'src/redux/actions/authActions'
import {useDispatch} from "react-redux"




const Login = () => {
let navigation = useNavigation()
let dispatch = useDispatch()

const HanleLogin =() => {
    dispatch(setUser(true))

}

const [displayPassword , setDisplayPassword] = useState(true)

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
                <TouchableOpacity style={{width:"10%",paddingVertical:10, }}
                onPress={() => navigation.goBack(null)}>

                 <Image source= {Images.LeftArrow} style={styles.arrowLeft} resizeMode={"contain"}/>
                </TouchableOpacity>
             </View>
             <ScrollView style={{marginHorizontal:20}} showsVerticalScrollIndicator={false}>
            
             <Image
                source={Images.Logo}
                style={styles.splashImage}
                resizeMode={"contain"}/>
                <Text style={styles.loginTxt}>Login</Text>
                <View style={styles.inputContainer}>
                     <TextInput 
                        placeholder={"Email Address"}
                        placeholderTextColor={Colors.darkBlack}
                        multiline={false}
                        keyboardType="email-address"
                        underlineColorAndroid="transparent" 
                        style={styles.inputField}/>
                </View>
                <View style={[styles.inputContainer , {marginTop:20, flexDirection:"row"}]}>
                     <TextInput 
                        secureTextEntry={displayPassword}
                        placeholderTextColor={Colors.darkBlack}
                        placeholder={"Password"}
                        multiline={false}
                        underlineColorAndroid="transparent" 
                        style={styles.inputField}/>
                        <TouchableOpacity onPress={() => setDisplayPassword(!displayPassword)}>
                        <Image
                            source={Images.PasswordEye} style={styles.passwordEye} resizeMode={"contain"}
                        />
                        </TouchableOpacity>
                </View>
                <TouchableOpacity>
                    <Text style={styles.forgotPassword}>Forgot password?</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => HanleLogin()}
                style={styles.btnContainer}>
                    <Text style={styles.btnLoginTxt}>Login</Text>
                </TouchableOpacity>
                
            </ScrollView>
            <View
                style={styles.btnSignupContainer}>
                    <Text style={styles.dontHaveAccountTxt}>Don’t have an account? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Signup")}>

                    <Text style={[styles.dontHaveAccountTxt , {color:Colors.sky}]}>  Sign Up</Text>
                    </TouchableOpacity>
                </View>
             
        </ImageBackground>
    )
}

export default Login

