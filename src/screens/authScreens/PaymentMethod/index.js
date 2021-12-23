import React, {useCallback, useDebugValue, useEffect, useState} from 'react'
import {View, StatusBar, Image, StyleSheet, Text, SafeAreaView, TextInput, TouchableOpacity, FlatList, Platform} from "react-native"
import {useNavigation, useIsFocused} from '@react-navigation/native'
import {Colors, Images} from 'src/utils'
import styles from './styles'
import WelcomeModalView from 'src/components/Modal/Welcome'


const PaymentMethod = () => {
    let navigation = useNavigation()
    let isFocused = useIsFocused()
    const [welcomeModal , setWelcomeModal] = useState(false)

  

    return(
        <View style={{flex:1, backgroundColor:Colors.white, opacity : welcomeModal? 0.3:1}}>
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
                    <Text style={styles.headerTxt}>Payment Method</Text>
                </View>
                <View  style={{width:"15%", height:"100%", justifyContent:"center", alignItems:"center",}}>
                </View>
                
                </View>
             </View>

             <View style={{flex:1,marginTop:13, backgroundColor:Colors.white, marginHorizontal:20}}>
            <Text style={styles.selectPayment}>SECURE PAYMENT</Text>
            <View style={[styles.inputContainer, {marginTop:30, paddingVertical:14}]}>
                     <TextInput 
                        placeholder={"United States"}
                        placeholderTextColor={Colors.black}
                        multiline={false}
                        keyboardType="number-pad"
                        underlineColorAndroid="transparent" 
                        style={styles.inputField}/>
                <Image source={Images.DownArrow} style={{height:14, width:10, marginRight:20}} resizeMode={"contain"}/>

                </View>
            <View style={[styles.inputContainer, {marginTop:13, paddingVertical:14}]}>
                <Image source={Images.MasterCard} style={{height:30, width:30}} resizeMode={"contain"}/>
                     <TextInput 
                        placeholder={"Card number"}
                        placeholderTextColor={"rgba(0, 0, 0, 0.49)"}
                        multiline={false}
                        keyboardType="number-pad"
                        underlineColorAndroid="transparent" 
                        style={styles.inputField}/>
                </View>
            <View style={[styles.inputContainer, {marginTop:13}]}>
                     <TextInput 
                        placeholder={"Card holder name"}
                        placeholderTextColor={"rgba(0, 0, 0, 0.49)"}
                        multiline={false}
                        keyboardType="default"
                        underlineColorAndroid="transparent" 
                        style={styles.inputField}/>
                </View>
                <View style={{flexDirection:"row"}}>
                <View style={[styles.inputContainer, {marginTop:13, width:"40%"}]}>
                     <TextInput 
                        placeholder={"CVC/CVV"}
                        placeholderTextColor={"rgba(0, 0, 0, 0.49)"}
                        multiline={false}
                        keyboardType="number-pad"
                        underlineColorAndroid="transparent" 
                        style={styles.inputField}/>
                </View>
                <View style={[styles.inputContainer, {marginTop:13, width:"55%", marginStart:15}]}>
                     <TextInput 
                        placeholder={"MM/DD/YY"}
                        placeholderTextColor={"rgba(0, 0, 0, 0.49)"}
                        multiline={false}
                        keyboardType="number-pad"
                        underlineColorAndroid="transparent" 
                        style={styles.inputField}/>
                </View>
                </View>
                <View style={{flex:1, justifyContent:"center"}}>
                <TouchableOpacity onPress={() => setWelcomeModal(!welcomeModal)}
                style={{height:48, backgroundColor:Colors.sky, borderRadius:6, justifyContent:"center"}}>
                    <Text style={styles.continueBtn}>Continue</Text>
                </TouchableOpacity>
                </View>
                
             </View>

             <WelcomeModalView
            setWelcomeModal={setWelcomeModal}
            welcomeModal={welcomeModal}
            />
        </View>
   
    )
}

export default PaymentMethod
