    import React, {useEffect} from 'react'
    import {View, StatusBar, Image, StyleSheet, ImageBackground} from "react-native"
    import {useNavigation} from '@react-navigation/native'
    import {Colors, Images} from 'src/utils'
    import {setDjHimself} from 'src/redux/actions/authActions'
    import {useDispatch} from "react-redux"

    const Splash = () => {
        let navigation = useNavigation()
        
        useEffect(() => {
            setTimeout(() => {
            navigation.replace("DjSelect")
            },2000)
        })
        return(
          
                <ImageBackground 
                    source={Images.BackGroundImage}
                    style={styles.container}>
                        <StatusBar hidden={true}/>
                            <Image
                            source={Images.Logo}
                            style={styles.splashImage}
                            resizeMode={"contain"}/>
                </ImageBackground>
        )
    }

    export default Splash

    const styles = StyleSheet.create({
        container :{
            flex:1,
        },
        splashImage:{
            flex:1,
            width:201,
            height:176,
            alignSelf:"center"
        }

    })