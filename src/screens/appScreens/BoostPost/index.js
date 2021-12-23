import React, { useCallback, useEffect, useState } from 'react'
import { View, StatusBar, Image, StyleSheet, Text, SafeAreaView, TextInput, TouchableOpacity, FlatList, Platform } from "react-native"
import { useNavigation, useIsFocused } from '@react-navigation/native'
import { Colors, Images } from 'src/utils'
import styles from './styles'


const BoostPost = () => {
    let navigation = useNavigation()
    useEffect(() => {
        const parent = navigation.getParent();
        parent.setOptions({
            tabBarVisible: false, //hide tab bar on this screen
        });
        return () =>
            parent.setOptions({
                tabBarVisible: true, //hide tab bar on this screen

                tabStyle: [
                    {
                        marginBottom: 5,
                    },
                ],
                labelStyle: {
                    marginBottom: 5,
                },
            });
    }, [navigation]);


    return (
        <View style={{ flex: 1, backgroundColor: Colors.white }}>
            <StatusBar translucent={false}
                barStyle={"default"}
                backgroundColor={Colors.sky} />
            <View style={styles.headerContainer}>
                <View style={{ flexDirection: "row", height: "100%", marginTop: Platform.OS === 'android' ? 0 : 20 }}>
                    <TouchableOpacity onPress={() => navigation.goBack(null)}
                        style={{ width: "15%", height: "100%", justifyContent: "center", alignItems: "center", }}>
                        <Image source={Images.LeftArrow} style={{ width: 7, height: 14 }} resizeMode={"contain"} />
                    </TouchableOpacity>
                    <View style={{ flex: 1, height: "100%", justifyContent: "center", }}>
                        <Text style={styles.headerTxt}>Boost Post</Text>
                    </View>
                    <View style={{ width: "15%", height: "100%", justifyContent: "center", alignItems: "center", }}>
                    </View>

                </View>
            </View>

            <View style={{ flex: 1, marginTop: 10, backgroundColor: Colors.white, marginHorizontal: 20 }}>
                <Text style={styles.selectDuration}>Select Duration</Text>
                <View style={{ height: "15%", }}>

                </View>
                <View style={{ flexDirection: "row", marginTop: 10, }}>
                    <Text style={[styles.selectDuration, { marginTop: 0, marginHorizontal: 0, marginStart: 15 }]}>Estimated People Reached</Text>
                    <Image source={Images.Estimate} style={{ height: 13, width: 13, marginStart: 10, alignSelf: "center" }} />
                </View>
                <View style={{flexDirection:"row", justifyContent:"space-evenly", marginTop:16}}>
                    <Text style={styles.perday}>Per day</Text>
                    <Text style={styles.perday}>Est. Total</Text>
                </View>
                <View style={{flexDirection:"row", justifyContent:"space-evenly", marginTop:16}}>
                    <Text style={[styles.perday, {color:Colors.black}]}>230 - 710 </Text>
                    <Text style={[styles.perday, {color:Colors.black}]}>1230 - 1710 </Text>
                </View>
                <View style={{flexDirection:"row", justifyContent:"space-between", marginTop:40}}>
                    <Text style={styles.perday}>Total budget</Text>
                    <Text style={[styles.perday, {color:Colors.black,textDecorationLine: 'underline' }]}>$30.00 </Text>
                </View>

                <TouchableOpacity onPress={() => navigation.navigate("AddPaymentMethod")}
                style={{width:"100%", height:48, backgroundColor:Colors.sky, borderRadius:6, justifyContent:"center", marginTop:70}}>
                    <Text style={styles.boostBtn}>Boost</Text>
                </TouchableOpacity>

            </View>

        </View>

    )
}

export default BoostPost
