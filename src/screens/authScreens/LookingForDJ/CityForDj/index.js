import React, {useEffect, useState} from 'react'
import {View, StatusBar, Image, StyleSheet, ImageBackground, Text,ScrollView, TouchableOpacity, SafeAreaView, Platform, TextInput} from "react-native"
import {useNavigation} from '@react-navigation/native'
import {Colors, Images} from 'src/utils'
import styles from './styles'




const CityForDj = () => {
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
                <TouchableOpacity style={{width:"10%",paddingVertical:10}}
                onPress={() => navigation.goBack(null)}>

                 <Image source= {Images.LeftArrow} style={styles.arrowLeft} resizeMode={"contain"}/>
                </TouchableOpacity>
             </View>
             <ScrollView contentContainerStyle={{flex:1, marginHorizontal:20, }} showsVerticalScrollIndicator={false}>
                <View style={{height:"28%",  justifyContent:"center"}}>
                    <Text style={styles.addPhotoTxt}>Which city are you looking for a DJ</Text>
                </View>
                 
            <View style={{flex:1}}>
            <View style={[styles.inputContainer, {marginTop:30}]}>
                     <TextInput 
                        placeholder={"City"}
                        placeholderTextColor={Colors.black}
                        multiline={false}
                        keyboardType="default"
                        underlineColorAndroid="transparent" 
                        style={styles.inputField}/>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate("CityForDj")}
                style={styles.btnContainer}>
                    <Text style={styles.btnLoginTxt}>Next</Text>
                </TouchableOpacity>
            </View>
             
                
                  
               
              
                
             

                
                
            </ScrollView>
       
             
        </ImageBackground>
        </View>
    )
}

export default CityForDj

