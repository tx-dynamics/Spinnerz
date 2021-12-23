import React, {useEffect} from 'react'
import {View, StatusBar, Image, StyleSheet, Text} from "react-native"
import {useNavigation} from '@react-navigation/native'
import {Colors, Images} from 'src/utils'
import styles from './styles'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'


const BookingRequests = () => {
    let navigation = useNavigation()
    const CurrentBookingData = [
        {
            id:1,
            name:"Emma White booked you for an event",
            lastMsg:"1 hour ago",
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
                    <View style={styles.userNameContainer}>
                        <Text style={styles.userTxt}>{item.name}</Text>
                    </View>

                    </View>
                    <View style={{flexDirection:"row", justifyContent:"space-between", marginHorizontal:16, marginTop:16}}>
                        <Text style={styles.timeAndDate}>Time: 8:00 - 9:00 Pm</Text>
                        <Text style={styles.timeAndDate}>9-feb-2021</Text>
                    </View>
                    <Text style={[styles.timeAndDate, {textAlign:"center", marginTop:16}]}> 123 Main Street, New York, NY 10030</Text>
                    <View style={{flexDirection:"row", justifyContent:"space-evenly",marginTop:16}}>
                        <TouchableOpacity style={{height:32, width:111, backgroundColor:Colors.white,elevation:3, borderRadius:10, justifyContent:"center"}}>
                            <Text style={styles.btnTxt}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{height:32, width:111, backgroundColor:Colors.sky, borderRadius:10, justifyContent:"center"}}>
                            <Text style={[styles.btnTxt, {color:Colors.white}]}>Approved</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
            />
            </View>
    )
}

export default BookingRequests
