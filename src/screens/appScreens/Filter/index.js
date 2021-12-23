import React, {useCallback, useEffect, useState} from 'react'
import {View, StatusBar, Image, StyleSheet, Text, SafeAreaView, TextInput, TouchableOpacity, FlatList, Platform} from "react-native"
import {useNavigation, useIsFocused} from '@react-navigation/native'
import {Colors, Images} from 'src/utils'
import styles from './styles'
import  Header  from 'src/components/Header'
import ConfirmRequestModalView from 'src/components/Modal/ConfirmRequest'
import ShareModalView from 'src/components/Modal/ShareModal'


const Filter = () => {
    let navigation = useNavigation()
    let isFocused = useIsFocused()
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

  
  

    return(
        <View style={{flex:1, backgroundColor:Colors.white}}>
             <StatusBar translucent={false}
            barStyle={"default"}
            backgroundColor= {Colors.sky}/>
            <View style={styles.headerContainer}>
                <View style={{flexDirection:"row", height:"100%", marginTop:Platform.OS === 'android' ?  0: 20 }}>
                <TouchableOpacity onPress={() => navigation.goBack(null)}
                 style={{width:"15%", height:"100%", justifyContent:"center", alignItems:"center",}}>
                    <Image source ={Images.BlackCross} style={{width:16, height:16}} resizeMode={"contain"}/>
                </TouchableOpacity>
                <View style={{flex:1 , height:"100%", justifyContent:"center",}}>
                    <Text style={styles.headerTxt}>Select City</Text>
                </View>
                <View  style={{width:"15%", height:"100%", justifyContent:"center", alignItems:"center",}}>
                </View>
                
                </View>
             </View>

             <View style={{flex:1, backgroundColor:Colors.white, marginHorizontal:20}}>
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
            
             </View>
    
        </View>
   
    )
}

export default Filter
