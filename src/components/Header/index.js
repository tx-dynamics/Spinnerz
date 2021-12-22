import React, {useEffect} from 'react'
import {View, StatusBar, Image, StyleSheet, Text, SafeAreaView} from "react-native"
import {useNavigation} from '@react-navigation/native'
import {Colors, Images} from 'src/utils'
import styles from './styles'
import { TouchableOpacity } from 'react-native-gesture-handler'


const Header = () => {
    let navigation = useNavigation()
    return(
        
      <SafeAreaView 
        style={styles.container}>


            <View style={{flexDirection:"row", height:"100%"}}>
                <View style={{width:"15%", height:"100%", justifyContent:"center", alignItems:"center",}}>
                    <Image source ={Images.Menu} style={{width:18, height:12}}/>
                </View>
                <View style={{flex:1 , height:"100%", justifyContent:"center",}}>
                    <Text style={styles.headerTxt}>Spinnerz</Text>
                </View>
                <View style={{width:"15%", height:"100%", justifyContent:"center", alignItems:"center",}}>
                <TouchableOpacity 
                onPress={() => navigation.navigate("Profile")}
                style={{width:"100%", height:"100%", justifyContent:"center", alignItems:"center", }}>
                    <Image source={Images.User} style={{height:30, width:30}} resizeMode={"contain"}/>
                </TouchableOpacity>
                </View>
                
            </View>
                      
        </SafeAreaView>
    )
}

export default Header
