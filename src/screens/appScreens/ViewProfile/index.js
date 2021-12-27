import React, { useEffect } from 'react'
import { View, StatusBar, Image, Text, SafeAreaView, ScrollView, TextInput, TouchableOpacity, useWindowDimensions, Dimensions, FlatList, Platform } from "react-native"
import { Colors, Images } from 'src/utils'
import styles from './styles'
import Video from 'react-native-video';

import { useNavigation } from '@react-navigation/native'

const ViewProfile = () => {
    let navigation = useNavigation()




    return (
        <View style={styles.container}>
            <StatusBar translucent={false}
                barStyle={"default"}
                backgroundColor={Colors.sky} />
            <View style={styles.headerContainer}>
                <View style={{ flexDirection: "row", height: "100%", marginTop: Platform.OS === 'android' ? 0 : 20, width: "100%" }}>

                    <TouchableOpacity onPress={() => navigation.goBack(null)}
                        style={{ width: "10%", justifyContent: "center", alignItems: "center", }}>
                        <Image source={Images.LeftArrow} style={{ height: 18, width: 11 }} resizeMode={"contain"} />
                    </TouchableOpacity>
                    <View style={{ flexDirection: "row", flex: 1, alignItems: "center", justifyContent: "center" }}>
                        <Text style={styles.headerTxt}>Profile</Text>
                    </View>

                    <View style={{ width: "10%", }}>
                    </View>

                </View>
            </View>

            <ScrollView contentContainerStyle={{ flex: 1, marginTop: 10, marginHorizontal: 20 }} showsVerticalScrollIndicator={false}>
                <Image source={Images.User} style={styles.userProfile} resizeMode={"contain"} />
                <Text style={styles.userNameTxt}>William James</Text>
                <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: 5 }}>
                    <Image source={Images.Location} resizeMode={"contain"} style={{ height: 8, width: 7 }} />
                    <Text style={styles.emailTxt}>Barcelona</Text>
                    <Image source={Images.Star} style={{ height: 8, width: 8, marginStart: 3 }} resizeMode={"contain"} />
                    <Text style={styles.emailTxt}>4.9 (2.3)</Text>
                </View>
                <Text style={styles.seeVideos}>See Video</Text>
                <View>
                    <Video source={require('../../../assets/videos/Video5.mp4')}   // Can be a URL or a local file.
                        repeat={true}
                        muted={true}               // Callback when video cannot be loaded
                        posterResizeMode="stretch"
                        resizeMode="stretch"
                        hideShutterView={true}
                        duration={true}
                        style={{ height: 163, borderRadius: 10, marginTop: 9 }}>
                    </Video>
                    <Text style={styles.durationTimeVideo}>30:00</Text>
                    <View style={{ position: "absolute", justifyContent: "center", alignSelf: "center", alignItems: 'center', bottom: 70 }}>
                        <Image source={Images.Play} resizeMode={"contain"} style={{ height: 29, width: 24, }} />
                    </View>
                </View>

                <Text style={styles.seeVideos}>Demo Audio</Text>
                <View style={{ backgroundColor: "#E8F7FF", height: 76, marginTop: 17, flexDirection: "row", paddingTop: 14, borderRadius: 10 }}>
                    <View style={{ paddingStart: 18 }}>
                        <Image source={Images.PlayPause} resizeMode={"contain"} style={{ height: 30, width: 30 }} />
                        <Text style={styles.durationTime}>30:00</Text>
                    </View>
                    <Image source={Images.Frequency} resizeMode={"contain"} style={{ height: 27, width: 188, marginStart: 18 }} />
                </View>

            </ScrollView>
        </View>
    )
}

export default ViewProfile

