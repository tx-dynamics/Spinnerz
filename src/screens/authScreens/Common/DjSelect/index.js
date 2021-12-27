import React, {useEffect, useState} from 'react'
import {View, StatusBar, Image, StyleSheet, ImageBackground, Text, TouchableOpacity} from "react-native"
import {useNavigation} from '@react-navigation/native'
import {Colors, Images} from 'src/utils'
import styles from './styles'
import {setDjHimself} from 'src/redux/actions/authActions'
import {useDispatch ,useSelector} from "react-redux"





const DjSelect = () => {
    let navigation = useNavigation()
    let dispatch = useDispatch()



    const [textColor , setTxtColor] = useState(true)
    const [backgroundColor , setBackgroundColor] = useState(true)

    

    const SelectDj = () => {
        setTxtColor(true)
        setBackgroundColor(true)
        navigation.navigate("Login")

    }
    const LookDj = () => {
        dispatch(setDjHimself(false))
        setTxtColor(false)
        setBackgroundColor(false)
        dispatch(setDjHimself(false))
        navigation.navigate("Login")


    }
    return(
        <ImageBackground 
        source ={Images.BackGroundImage}
        style ={styles.container}>
              <StatusBar hidden={false}
            translucent={false}
            barStyle={"light-content"}
            backgroundColor={Colors.black}
            />
             <View style={{height:"50%", justifyContent:"center", alignSelf:"center"}}>
             <Image
                source={Images.Logo}
                style={styles.splashImage}
                resizeMode={"contain"}/>
             </View>
             <View style={{height:"50%"}}>
            <TouchableOpacity onPress={() => SelectDj()}
            style={[styles.selectRootContainer,
            {backgroundColor: backgroundColor? Colors.sky : Colors.white }]}>
                <Text style={[styles.selectRootTxt, {color: textColor?Colors.white :Colors.sky}]}>I'm A DJ</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => LookDj()}
            style={[styles.selectRootContainer, {marginTop:10 , backgroundColor: backgroundColor ? Colors.white : Colors.sky }]}>
                <Text style={[styles.selectRootTxt ,{color: textColor?Colors.sky :Colors.white}]}>LOOKING FOR A DJ</Text>
            </TouchableOpacity>
             </View>
                
        </ImageBackground>
    )
}

export default DjSelect

