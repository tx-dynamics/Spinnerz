import React, {useCallback, useEffect, useState} from 'react'
import {View, StatusBar, Image, StyleSheet, Text, SafeAreaView, TextInput, TouchableOpacity, FlatList, Platform} from "react-native"
import {useNavigation, useIsFocused} from '@react-navigation/native'
import {Colors, Images} from 'src/utils'
import styles from './styles'
import  Header  from 'src/components/Header'
import ConfirmRequestModalView from 'src/components/Modal/ConfirmRequest'
import FriendsModalView from 'src/components/Modal/FriendsModal'


const Friends = () => {
    let navigation = useNavigation()
    let isFocused = useIsFocused()

    const [friendsModal,setFriendsModal] = useState(false)
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
    
      const HomeData = [
        {
            id:1,
            name:"Emma White",
            image:Images.User
        },
        {
            id:2,
            image:Images.User,
            name:"Alex Jhones",
        },
        {
            id:3,
            image:Images.User,
            name:"Alexa Bless",
        },
        {
            id:4,
            image:Images.User,
            name:"Brock",
        },
        {
            id:5,
            image:Images.User,
            name:"Lina ",
        },
        {
            id:6,
            image:Images.User,
            name:"Niki Gross",
        },
        {
            id:7,
            image:Images.User,
            name:"Rounda Rousy",
        },
        {
            id:7,
            image:Images.User,
            name:"Rivina Joury",
        },
        {
            id:8,
            image:Images.User,
            name:"Nikki Bella",
        },
    ]

  

    return(
        <View style={{flex:1, backgroundColor:"white", opacity: friendsModal? 0.3: 1}}>
             <StatusBar translucent={false}
            barStyle={"default"}
            backgroundColor= {Colors.sky}/>
            <View style={styles.headerContainer}>
                <View style={{flexDirection:"row", height:"100%", marginTop:Platform.OS === 'android' ?  0: 20 }}>
                <TouchableOpacity onPress={() => navigation.goBack(null)}
                 style={{width:"15%", height:"100%", justifyContent:"center", alignItems:"center",}}>
                    <Image source ={Images.LeftArrow} style={{width:7, height:14}} resizeMode={"contain"}/>
                </TouchableOpacity>
                <View style={{flex:1 , height:"100%", justifyContent:"center",}}>
                    <Text style={styles.headerTxt}>Friends</Text>
                </View>
                <TouchableOpacity
                 style={{width:"15%", height:"100%", justifyContent:"center", alignItems:"center",}}>
                    <Image source ={Images.Friends} style={{width:23, height:17}} resizeMode={"contain"}/>
                </TouchableOpacity>
                
                </View>
             </View>

             <View style={styles.inputContainer}>
                <Image
                    source={Images.Search} style={{height:16, width:16}} resizeMode={"contain"}
                />
                <TextInput 
                    placeholderTextColor={Colors.darkBlack}
                    placeholder={"Search.."}
                    multiline={false}
                    underlineColorAndroid="transparent" 
                    style={styles.inputField}/>
                       
            </View>
            <View style={{flex:1, marginHorizontal:20}}>
                <Text style={styles.allFriends}>All Friends</Text>
                <FlatList
                    data={HomeData}
                    contentContainerStyle={{marginTop:10}}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item , index}) => (
                        <View style={styles.listContiner}>
                            <View style={styles.innerContainer}>
                             <Image source={item.image} style={{height:31, width:31, }} resizeMode={"contain"}/>
                                <View style={styles.userNameContainer}>
                                    <Text style={styles.userTxt}>{item.name}</Text>
                                </View>
                                <TouchableOpacity style={{width:"10%", alignItems:"flex-end",paddingVertical:15}}
                                onPress={() => setFriendsModal(!friendsModal)}>
                                     <Image source={Images.HorizantalDots} style={{height:3, width:13, alignItems:"center" }} resizeMode={"contain"}/>
                                </TouchableOpacity>

                            </View>
                        </View>
            )}
            />
            </View>
       
       <FriendsModalView 
       setFriendsModal ={setFriendsModal}
       friendsModal={friendsModal}/>
       
        </View>
   
    )
}

export default Friends
