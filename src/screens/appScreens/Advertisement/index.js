import React, { useCallback, useEffect, useState } from 'react'
import { View, StatusBar, Image, StyleSheet, Text, SafeAreaView, TextInput, TouchableOpacity, FlatList } from "react-native"
import { useNavigation } from '@react-navigation/native'
import { Colors, Images } from 'src/utils'
import styles from './styles'
import ProgressCircle from 'react-native-progress-circle'




const Advertisement = () => {
    let navigation = useNavigation()
    const [lengthMore, setLengthMore] = useState(false)
    const [textShown, setTextShown] = useState(false)



    const HomeData = [
        {
            id:1,
            name:"Emma White",
            location:"Barcelona",
            des:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis in et, diam magna ullamcorper. Lacus nulla nullam consequat nulla pulvinar tortor et. Laoreet fames gravida leo nisi posuere. Consequat, eget adipiscing nunc, sed tellus tincidunt erat vel. Tortor mauris fusce faucibus eros leo neque morbi. Laoreet fames gravida leo nisi posuere. Consequat, eget adipiscing nunc, sed tellus tincidunt erat vel"
        },
        {
            id:2,
            name:"Emma White",
            location:"Barcelona",
            des:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis in et, diam magna ullamcorper. Lacus nulla nullam consequat nulla pulvinar tortor et. Laoreet fames gravida leo nisi posuere. Consequat, eget adipiscing nunc, sed tellus tincidunt erat vel. Tortor mauris fusce faucibus eros leo neque morbi. Laoreet fames gravida leo nisi posuere. Consequat, eget adipiscing nunc, sed tellus tincidunt erat vel"
        },
    ]



    const toggleNumberOfLines = (index) => {

        setTextShown(textShown === index ? -1 : index)

    }
    const onTextLayout = useCallback(e => {
        setLengthMore(e.nativeEvent.lines.length >= 3);
    });


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
                    <Text style={styles.headerTxt}>Advertisment</Text>
                </View>
                <View style={{ width: "15%", height: "100%", justifyContent: "center", alignItems: "center", }}>
                    <View
                        style={{ width: "100%", height: "100%", justifyContent: "center", alignItems: "center", }}>
                    </View>
                </View>

            </View>
            <FlatList
            data={HomeData}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item , index}) => (
                <View style={styles.listContiner}>
                    <View style={styles.innerContainer}>
                        <Image source={Images.User} style={styles.userImage} resizeMode={"contain"}/>
                        <View style={styles.userNameContainer}>
                            <Text style={styles.userTxt}>{item.name}</Text>
                            <View style={{flexDirection:"row", alignItems:"center", marginTop:7}}>
                                <Image source={Images.Location} style={{height:8, width:8}} resizeMode={"contain"}/>
                                <Text style={styles.locationTxt}>{item.location}</Text>
                            </View>
                        </View>
                            
                        <TouchableOpacity >
                        <Image source={Images.More} style={{height:24, width:24}} resizeMode={"contain"}/>
                        </TouchableOpacity>
                             
                    </View>
                    <Text style={styles.des} numberOfLines={2}>{item.des}</Text>
                
                    
                  
                    <TouchableOpacity
                    style={styles.btnContainer}>
                            <Text style={[styles.userTxt, {color:Colors.white , textAlign:"center"}]}>Book Now</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{flexDirection:"row", justifyContent:"space-between", marginHorizontal:20,backgroundColor:"#E5F6FF", height:26, borderRadius:6, marginTop:10}}>
                       <View style={{flexDirection:"row", justifyContent:"center", alignSelf:"center", marginStart:10}}>
                           <Image source={Images.Wave} style={{height:9, width:9, alignSelf:"center"}} resizeMode={"contain"}/>
                           <Text style={styles.boostValue}>31.4 k reach</Text>
                       </View>
                       <View style={{flexDirection:"row", justifyContent:"center", alignSelf:"center", marginEnd:10}}>
                           <Text style={styles.boostValue}>View all</Text>
                           <Image source={Images.BlackRightArrow} style={{height:6, width:5, alignSelf:"center"}} resizeMode={"contain"}/>
                       </View>
                    </TouchableOpacity>
                    
                  
                
                </View>
            )}
            />
           


        </View>
    )
}

export default Advertisement
