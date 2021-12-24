import React, { useEffect } from 'react'
import { View, StatusBar, Image, StyleSheet, ImageBackground, Text } from "react-native"
import { useNavigation } from '@react-navigation/native'
import { Colors, Images } from 'src/utils'
import styles from './styles'
import { TouchableOpacity } from 'react-native-gesture-handler'


const Subscription = () => {
    let navigation = useNavigation()


    return (

        <ImageBackground
            source={Images.BackGroundImage}
            style={styles.container}>
            <StatusBar translucent={false}
                barStyle={"default"}
            />
            <View style={{ height: "35%", justifyContent: "center",}}>
                <Image
                    source={Images.Logo}
                    style={styles.splashImage}
                    resizeMode={"contain"} />
            </View>
            <View style={{height:"50%",}}>

                <View style={{ backgroundColor: "rgba(62, 186, 255, 0.5)", marginHorizontal: 20, borderRadius: 10, paddingVertical: 20, paddingHorizontal: 16 }}>
                    <View style={{ flexDirection: "row", }}>
                        <Image source={Images.Star} style={{ height: 19, width: 20, }} resizeMode={"contain"} />
                        <Text style={styles.headerTxt}>Try SPINNERZ Pro</Text>
                    </View>
                    <View style={{ flexDirection: "row", marginTop: 25 }}>
                        <Image source={Images.GreenCheck} style={{ height: 19, width: 20, }} resizeMode={"contain"} />
                        <Text style={styles.desTxt}>Look for Gigs in Cities Worldwide</Text>
                    </View>
                    <View style={{ flexDirection: "row", marginTop: 18 }}>
                        <Image source={Images.GreenCheck} style={{ height: 19, width: 20, }} resizeMode={"contain"} />
                        <Text style={styles.desTxt}>Get Notified when Gigs are Open in your City</Text>
                    </View>
                    <View style={{ flexDirection: "row", marginTop: 18 }}>
                        <Image source={Images.GreenCheck} style={{ height: 19, width: 20, }} resizeMode={"contain"} />
                        <Text style={styles.desTxt}>Upload a 30min Demo Mix</Text>
                    </View>
                </View>

                <TouchableOpacity onPress={() => navigation.navigate("Payment")}
                    style={{ backgroundColor: "rgba(40, 97, 161, 0.4)", marginHorizontal: 20, borderRadius: 10, paddingVertical: 20, paddingHorizontal: 16, marginTop: 16 }}>
                    <Text style={styles.startTxt}>Start Now</Text>

                </TouchableOpacity>
                
                <TouchableOpacity
                    style={{ height: "70%",alignItems:"center"}}>
                    <Text style={styles.continueTxt}>OR Continue Free</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}

export default Subscription

