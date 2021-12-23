import React, {useEffect} from 'react'
import {View, StatusBar, Image, StyleSheet, Text} from "react-native"
import {useNavigation} from '@react-navigation/native'
import {Colors, Images, Fonts} from 'src/utils'
import styles from './styles'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'


const PostBooking = () => {
    let navigation = useNavigation()
    const CurrentBookingData = [
        {
            id:1,
            name:"booked you for an event",
            lastMsg:"1 hour ago",
            userName:"Emma White"
        },
        {
            id:2,
            name:"Emma White booked you for an event",
            lastMsg:"1 hour ago",
        },
        
    ]
    return(
      
            <View 
                style={styles.container}>
                     <StatusBar translucent={false}
            barStyle={"default"}
            backgroundColor= {Colors.sky}/>
                    <FlatList
            data={CurrentBookingData}
            contentContainerStyle={{marginTop:20}}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item , index}) => (
                <View
                style={styles.listContiner}>
                    <View style={styles.innerContainer}>
                        <Image source={Images.User} style={{height:45, width:45,marginStart:10 }} resizeMode={"contain"}/>
                   <View style={[styles.userNameContainer, {flexDirection:"row", }]}>
                        <Text style={[styles.userTxt , {fontFamily:Fonts.Bold}]}>{item.userName}</Text>
                        <Text style={styles.userTxt}> {item.name}</Text>
                    </View>

                    </View>
                    <View style={{flexDirection:"row", justifyContent:"space-between", marginHorizontal:16, marginTop:16}}>
                        <Text style={styles.timeAndDate}>Time: 8:00 - 9:00 Pm</Text>
                        <Text style={styles.timeAndDate}>9-feb-2021</Text>
                    </View>
                    <Text style={[styles.timeAndDate, {textAlign:"center", marginTop:16}]}> 123 Main Street, New York, NY 10030</Text>
                    <View style={{marginTop:16, justifyContent:"center", alignSelf:"center"}}>
                        
                        <TouchableOpacity style={{height:32, width:111, backgroundColor:Colors.darkGreen, borderRadius:10, justifyContent:"center"}}>
                            <Text style={styles.btnTxt}>Completed</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
            />
            </View>
    )
}

export default PostBooking
