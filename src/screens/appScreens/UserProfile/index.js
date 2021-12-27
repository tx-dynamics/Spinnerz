import React, { useEffect } from 'react'
import { View, StatusBar, Image, Text, SafeAreaView, ScrollView, TextInput, TouchableOpacity, useWindowDimensions, Dimensions, FlatList, Platform } from "react-native"
import { Colors, Images } from 'src/utils'
import styles from './styles'
import Video from 'react-native-video';
import { Rating, AirbnbRating } from 'react-native-ratings';


import { useNavigation } from '@react-navigation/native'

const UserProfile = () => {
    let navigation = useNavigation()
    const { height, width } = Dimensions.get('window');
    const halfWidth = width / 2;

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
        {
            id: 4,
            name: "Emma White",
            location: "Barcelona",
            des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis in et, diam magna ullamcorper. Lacus nulla nullam consequat nulla pulvinar tortor et. Laoreet fames gravida leo nisi posuere. Consequat, eget adipiscing nunc, sed tellus tincidunt erat vel. Tortor mauris fusce faucibus eros leo neque morbi. Laoreet fames gravida leo nisi posuere. Consequat, eget adipiscing nunc, sed tellus tincidunt erat vel"
        },
       
    ]


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

            <ScrollView contentContainerStyle={{ flexGrow: 1, marginTop: 10, marginHorizontal: 20, paddingBottom:50 }} nestedScrollEnabled={true} scrollEnabled={true} showsVerticalScrollIndicator={false} >
                <Image source={Images.User} style={styles.userProfile} resizeMode={"contain"} />
                <Text style={styles.userNameTxt}>William James</Text>
                <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: 5 }}>
                    <Image source={Images.Location} resizeMode={"contain"} style={{ height: 8, width: 7 }} />
                    <Text style={styles.emailTxt}>Barcelona</Text>
                    <Image source={Images.Star} style={{ height: 8, width: 8, marginStart: 3 }} resizeMode={"contain"} />
                    <Text style={styles.emailTxt}>4.9 (2.3)</Text>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-evenly", marginTop: 15, marginHorizontal: 20, }}>
                    <View style={{ width: "30%", }}>
                        <Text style={styles.frndTxt}>Friends</Text>
                        <Text style={[styles.frndTxt, { marginTop: 6 }]}>44</Text>
                    </View>
                    <View style={{ width: "30%", }}>
                        <Text style={styles.frndTxt}>Past Bookings</Text>
                        <Text style={[styles.frndTxt, { marginTop: 6 }]}>20</Text>
                    </View>
                </View>

                <Text style={[styles.seeVideos, { marginTop: 20 }]}>Description:</Text>
                <Text style={styles.desTxt}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo mauris mi mi pulvinar leo sit. Id vehicula ullamcorper arcu gravida aenean in felis. Sem luctus donec cursus mauris nullam turpis nunc, lacus at. Tincidunt facilisis vitae amet leo.</Text>

                <Text style={styles.seeVideos}>See Demo</Text>
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
                <View style={{ flexDirection: "row", marginTop: 10 }}>
                    <Text style={[styles.seeVideos, { marginTop: 0 }]}>Reviews</Text>
                    <Text style={styles.emailTxt}>4.9 (23)</Text>
                </View>

                <FlatList
                    data={HomeData}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item) => item.id.toString()}
                    contentContainerStyle={{paddingBottom:20}}
                    nestedScrollEnabled={true}
                    renderItem={({ item, index }) => (
                        <View style={styles.listContiner}>
                            <View style={styles.innerContainer}>
                                <Image source={Images.User} style={styles.userImage} resizeMode={"contain"} />
                                <View
                                    style={styles.userNameContainer}>
                                    <Text style={styles.userTxt}>{item.name}</Text>
                                </View>
                            </View>
                            <View style={{marginTop:20,  alignSelf:"flex-start", flexDirection:"row"}}> 
                            <Rating
                                imageSize={12}
                                ratingColor={'red'}
                            />
                            <Text style={styles.emailTxt}>12/3/21</Text>
                            </View>
                           

                          
                            <Text style={styles.des}>{item.des}</Text>

                        </View>
                    )}
                />

            </ScrollView>
        </View>
    )
}

export default UserProfile

