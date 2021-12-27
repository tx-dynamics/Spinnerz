import React, {useCallback, useEffect, useState} from 'react'
import {View, StatusBar, Image, StyleSheet, Text, SafeAreaView, TextInput, TouchableOpacity, FlatList, Platform} from "react-native"
import {useNavigation, useIsFocused} from '@react-navigation/native'
import {Colors, Images} from 'src/utils'
import styles from './styles'
import  Header  from 'src/components/Header'
import ConfirmRequestModalView from 'src/components/Modal/ConfirmRequest'
import ShareModalView from 'src/components/Modal/ShareModal'


const Payment = () => {
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
                    <Text style={styles.headerTxt}>Payments</Text>
                </View>
                <View  style={{width:"15%", height:"100%", justifyContent:"center", alignItems:"center",}}>
                </View>
                
                </View>
             </View>

             <View style={{flex:1,marginTop:13, backgroundColor:Colors.white, marginHorizontal:20}}>
            <Text style={styles.selectPayment}>Select Payment Method</Text>
            <TouchableOpacity onPress={() => navigation.navigate("PaymentMethod")}
            style={styles.stripeContainer}>
                <Image source={Images.Stripe} style={{width:34, height:27}} resizeMode={"contain"}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("PaymentMethod")}
            style={styles.paypalContainer}>
                <Image source={Images.PayPal} style={{width:41, height:54}} resizeMode={"contain"}/>
            </TouchableOpacity>
             </View>
    
        </View>
   
    )
}

export default Payment
