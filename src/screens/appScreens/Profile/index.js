import React, {useEffect, useState} from 'react'
import {View, StatusBar, Image, StyleSheet, ImageBackground, Text,ScrollView, TouchableOpacity, SafeAreaView, Platform, TextInput} from "react-native"
import {useNavigation} from '@react-navigation/native'
import {Colors, Images} from 'src/utils'
import styles from './styles'



const Profile = () => {
let navigation = useNavigation()


    return(
        <ImageBackground 
        source ={Images.LoginBack}
        style ={styles.container}
        >

            <StatusBar hidden={false}
            translucent={false}
            barStyle={"light-content"}
            backgroundColor={Colors.black}
            />
            
            <View style={styles.headerContainer}>
                <TouchableOpacity style={{width:"10%",paddingVertical:10}}
                onPress={() => navigation.goBack(null)}>

                 <Image source= {Images.LeftArrow} style={styles.arrowLeft} resizeMode={"contain"}/>
                </TouchableOpacity>
                <Text style={styles.profileTxt}>My Profile</Text>
                <TouchableOpacity style={{width:"10%",paddingVertical:10, alignItems:"flex-end"}}
                onPress={() => navigation.navigate("WithoutBottom" ,{screen :"EditProfile"})}>

                 <Image source= {Images.EditProfile} style={styles.EditProfile} resizeMode={"contain"}/>
                </TouchableOpacity>
             </View>
           
             <ScrollView style={{flex:1, marginTop:10}} showsVerticalScrollIndicator={false}>
                <Image source= {Images.User} style={styles.userProfile} resizeMode={"contain"}/>
                <Text style={styles.userNameTxt}>William James</Text>
                <Text style={styles.emailTxt}>WilliamJames18@etc.com</Text>

                <View style={{backgroundColor:"rgba(62, 186, 255, 0.5)",  marginHorizontal:20, marginTop:30, borderRadius:10, paddingVertical:20,}}>
                    <TouchableOpacity onPress={() => navigation.navigate("ViewProfile")}
                    style={{flexDirection:"row", }}>
                        <View style={{backgroundColor:Colors.sky,height:18, width:18, justifyContent:"center",alignItems:"center" , borderRadius:4, marginStart:16}}>
                            <Image source={Images.ViewProfile} style={{height:8, width:8, }}/>
                        </View>
                        <Text style={styles.profileContainerTxt}>View Profile</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("WithoutBottom" ,{screen :"UploadDemo"})}
                    style={{flexDirection:"row", marginTop:20}}>
                        <View style={{backgroundColor:Colors.sky,height:18, width:18, justifyContent:"center",alignItems:"center" , borderRadius:4, marginStart:16}}>
                            <Image source={Images.UploadDemo} style={{height:8, width:8, }}/>
                        </View>
                        <Text style={styles.profileContainerTxt}>Upload a demo</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("BoostingPost")}
                    style={{flexDirection:"row", marginTop:20}}>
                        <View style={{backgroundColor:Colors.sky,height:18, width:18, justifyContent:"center",alignItems:"center" , borderRadius:4, marginStart:16}}>
                            <Image source={Images.ViewPost} style={{height:8, width:8, }}/>
                        </View>
                        <Text style={styles.profileContainerTxt}>View posts</Text>
                    </TouchableOpacity>

                </View>
                <View style={{backgroundColor:"rgba(62, 186, 255, 0.5)",  marginHorizontal:20, marginTop:16, borderRadius:10, paddingVertical:20,}}>
                    <TouchableOpacity onPress={() => navigation.navigate("WithoutBottom" ,{screen :"Friends"})}
                    style={{flexDirection:"row", }}>
                        <View style={{backgroundColor:Colors.sky,height:18, width:18, justifyContent:"center",alignItems:"center" , borderRadius:4, marginStart:16}}>
                            <Image source={Images.Friends} style={{height:8, width:8, }}/>
                        </View>
                        <Text style={styles.profileContainerTxt}>Friends</Text>
                    </TouchableOpacity>
                    <View style={{flexDirection:"row", marginTop:20}}>
                        <View style={{backgroundColor:Colors.sky,height:18, width:18, justifyContent:"center",alignItems:"center" , borderRadius:4, marginStart:16}}>
                            <Image source={Images.BackDollor} style={{height:8, width:8, }}/>
                        </View>
                        <Text style={styles.profileContainerTxt}>Hourly Rate</Text>
                    </View>
                    <View style={{flexDirection:"row", marginTop:20}}>
                        <View style={{backgroundColor:Colors.sky,height:18, width:18, justifyContent:"center",alignItems:"center" , borderRadius:4, marginStart:16}}>
                            <Image source={Images.BookingDetails} style={{height:8, width:8, }}/>
                        </View>
                        <Text style={styles.profileContainerTxt}>Booking details</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate("Advertisement")}
                    style={{flexDirection:"row", marginTop:20}}>
                        <View style={{backgroundColor:Colors.sky,height:18, width:18, justifyContent:"center",alignItems:"center" , borderRadius:4, marginStart:16}}>
                            <Image source={Images.Advertisment} style={{height:8, width:8, }}/>
                        </View>
                        <Text style={styles.profileContainerTxt}>Advertisement</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("WithoutBottom",{screen :"Setting"})}
                    style={{flexDirection:"row", marginTop:20}}>
                        <View style={{backgroundColor:Colors.sky,height:18, width:18, justifyContent:"center",alignItems:"center" , borderRadius:4, marginStart:16}}>
                            <Image source={Images.Setting} style={{height:8, width:8, }}/>
                        </View>
                        <Text style={styles.profileContainerTxt}>Settings</Text>
                    </TouchableOpacity>

                </View>
                
                <View style={{backgroundColor:"rgba(62, 186, 255, 0.5)",  marginHorizontal:20, marginTop:16, borderRadius:10, paddingVertical:20,}}>
                    <View style={{flexDirection:"row", justifyContent:"center"}}>
                        <Image source={Images.Logout} style={{height:18, width:74, }}/>
                    </View>
                </View>

             </ScrollView>
            
        </ImageBackground>
    )
}

export default Profile

