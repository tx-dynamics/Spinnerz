import React, { useCallback, useEffect, useState } from 'react'
import { View, StatusBar, Image, StyleSheet, Text, SafeAreaView, TextInput, TouchableOpacity, FlatList } from "react-native"
import { useNavigation } from '@react-navigation/native'
import { Colors, Images } from 'src/utils'
import styles from './styles'
import ProgressCircle from 'react-native-progress-circle'




const BoostingPost = () => {
    let navigation = useNavigation()
    const [lengthMore, setLengthMore] = useState(false)
    const [textShown, setTextShown] = useState(false)






    const toggleNumberOfLines = (index) => {

        setTextShown(textShown === index ? -1 : index)

    }
    const onTextLayout = useCallback(e => {
        setLengthMore(e.nativeEvent.lines.length >= 3);
    });


    const HomeData = [
        {
            id: 1,
            name: "Emma White",
            location: "Barcelona",
            des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis in et, diam magna ullamcorper. Lacus nulla nullam consequat nulla pulvinar tortor et. Laoreet fames gravida leo nisi posuere. Consequat, eget adipiscing nunc, sed tellus tincidunt erat vel. Tortor mauris fusce faucibus eros leo neque morbi. Laoreet fames gravida leo nisi posuere. Consequat, eget adipiscing nunc, sed tellus tincidunt erat vel"
        },
        {
            id: 2,
            name: "Emma White",
            location: "Barcelona",
            des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis in et, diam magna ullamcorper. Lacus nulla nullam consequat nulla pulvinar tortor et. Laoreet fames gravida leo nisi posuere. Consequat, eget adipiscing nunc, sed tellus tincidunt erat vel. Tortor mauris fusce faucibus eros leo neque morbi. Laoreet fames gravida leo nisi posuere. Consequat, eget adipiscing nunc, sed tellus tincidunt erat vel"
        },
        {
            id: 3,
            name: "Emma White",
            location: "Barcelona",
            des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis in et, diam magna ullamcorper. Lacus nulla nullam consequat nulla pulvinar tortor et. Laoreet fames gravida leo nisi posuere. Consequat, eget adipiscing nunc, sed tellus tincidunt erat vel. Tortor mauris fusce faucibus eros leo neque morbi. Laoreet fames gravida leo nisi posuere. Consequat, eget adipiscing nunc, sed tellus tincidunt erat vel"
        },

    ]
    return (
        <View
            style={[styles.container]}>
            <StatusBar translucent={false}
                barStyle={"default"}
                backgroundColor={Colors.sky} />
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => navigation.goBack(null)}
                    style={{ width: "15%", height: "100%", justifyContent: "center", alignItems: "center", }}>
                    <Image source={Images.LeftArrow} style={{ width: 7, height: 14 }} />
                </TouchableOpacity>
                <View style={{ flex: 1, height: "100%", justifyContent: "center", }}>
                    <Text style={styles.headerTxt}>Dashboard</Text>
                </View>
                <View style={{ width: "15%", height: "100%", justifyContent: "center", alignItems: "center", }}>
                    <View
                        style={{ width: "100%", height: "100%", justifyContent: "center", alignItems: "center", }}>
                    </View>
                </View>

            </View>

            <View style={{ flex: 1, marginTop: 20, marginHorizontal: 20 }}>
                <View style={{
                    flexDirection: "row", backgroundColor: "rgba(218, 242, 255, 0.48)",
                    borderRadius: 10, paddingVertical: 25, justifyContent: "space-between"
                }}>
                    <Text style={styles.reachGoal}>Reach Goal 4k</Text>
                    <Text style={styles.reachGoal}>$30</Text>
                </View>
                <View style={{ marginTop: 20 }}>
                    <Text style={styles.reachGoal}>Stats</Text>

                    <View style={{ flexDirection: "row", justifyContent:"space-evenly", marginTop:17 }}>
                        <View style={{alignItems:"center"}}>
                        <ProgressCircle
                            percent={100}
                            radius={40}
                            borderWidth={8}
                            color={Colors.black}
                            shadowColor="#999"
                            bgColor="#fff"
                        >
                            <Text style={styles.reachGoalTxtValue}>{'4K'}</Text>
                        </ProgressCircle>
                        <Text style={styles.reachGoalTxt}>Reach Goal</Text>
                        </View>
                        <View style={{alignItems:"center"}}>
                        <ProgressCircle
                            percent={20}
                            radius={40}
                            borderWidth={8}
                            color={Colors.white}
                            shadowColor={Colors.sky}
                            bgColor="#fff"
                        >
                            <Text style={styles.reachGoalTxtValue}>{'3K'}</Text>
                        </ProgressCircle>
                        <Text style={styles.reachGoalTxt}>Current Reach</Text>
                        </View>
                        


                    </View>

                </View>
                <View style={{ marginTop: 32 }}>
                    <Text style={styles.reachGoal}>Duration</Text>

                    <View style={{ flexDirection: "row", justifyContent:"space-evenly", marginTop:17 }}>
                        <View style={{alignItems:"center"}}>
                        <ProgressCircle
                            percent={100}
                            radius={40}
                            borderWidth={8}
                            color={Colors.black}
                            shadowColor="#999"
                            bgColor="#fff"
                        >
                            <Text style={styles.reachGoalTxtValue}>{'30'}</Text>
                        </ProgressCircle>
                        <Text style={styles.reachGoalTxt}>Selected Days</Text>
                        </View>
                        <View style={{alignItems:"center"}}>
                        <ProgressCircle
                            percent={20}
                            radius={40}
                            borderWidth={8}
                            color={Colors.white}
                            shadowColor={Colors.sky}
                            bgColor="#fff"
                        >
                            <Text style={styles.reachGoalTxtValue}>{'3'}</Text>
                        </ProgressCircle>
                        <Text style={styles.reachGoalTxt}>Remaining</Text>
                        </View>
                        


                    </View>

                </View>

                <TouchableOpacity onPress={() => navigation.navigate("WithoutBottom", {screen : "Advertisement"})}
                style={{backgroundColor:Colors.sky, position:"absolute", bottom:50, height:48, width:"100%", borderRadius:6, justifyContent:"center"}}>
                    <Text style={styles.stopBoosting}>Stop Boosting</Text>
                </TouchableOpacity>
            </View>




        </View>
    )
}

export default BoostingPost
