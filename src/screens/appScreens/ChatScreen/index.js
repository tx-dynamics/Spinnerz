import React,{useEffect} from 'react'
import {View, StatusBar, Image, Text, SafeAreaView, ScrollView,TextInput,TouchableOpacity, useWindowDimensions, Dimensions, FlatList, Platform} from "react-native"
import {Colors, Images} from 'src/utils'
import styles from './styles'
import {useNavigation} from '@react-navigation/native'
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView'

const Chat = () => {
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

    const ChatData = [
        { 
            id : 1,
            message:"Hello Man, How are you!",
            check : "receiver"
        },
        { 
            id : 2,
            message:"I’m fine how about you? What are you doing?",
            check : "sender"

        },
        { 
            id : 3,
            message:"So what’s the plan for today",
            check : "receiver"


        },
        { 
            id : 4,
            message:"I’m fine how about you? What are you doing?",
            check : "sender"
        },
       
       

    ]
    
    return(
        <View style ={styles.container}>
             <StatusBar translucent={false}
            barStyle={"default"}
            backgroundColor= {Colors.sky}/>
            <View style={styles.headerContainer}>
                <View style={{flexDirection:"row", height:"100%", marginTop:Platform.OS === 'android' ?  0: 20 , width:"100%"}}>

                    <TouchableOpacity onPress={() => navigation.goBack(null)}
                    style={{width:"10%",  justifyContent:"center", alignItems:"center",}}>
                        <Image source={Images.LeftArrow} style={{height:18, width:11}} resizeMode={"contain"}/>
                    </TouchableOpacity>
                    <View style={{flexDirection:"row", flex:1, alignItems:"center"}}>
                        <Image source ={Images.User} style={{height:32 , width:32, marginStart:2, alignSelf:"center"}} resizeMode={"contain"}/>
                        <Text style={styles.userNameTxt}>Emma White</Text>
                    </View>
                
                    <TouchableOpacity onPress={() => navigation.goBack(null)}
                    style={{width:"10%",  justifyContent:"center", alignItems:"center",}}>
                        <Image source={Images.WhiteMore} style={{height:24, width:24}} resizeMode={"contain"}/>
                    </TouchableOpacity>
                    
                </View>
            </View>
            
            <ScrollView>
            <View style={{marginTop:30, marginHorizontal:30, flex:1}}>
            <FlatList
            data={ChatData}
            contentContainerStyle={{paddingBottom:20}}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => (
                item.check === "receiver"?
                
                <View style={{flexDirection:"row",}}>
                    <View style={{backgroundColor:Colors.white,elevation:4,width:"70%", paddingVertical:20, paddingHorizontal:20,
                        borderRadius:10}}>
                    <Text style={styles.timeReceiverTxt}>{item.message}</Text>

                    </View>
                </View>
                :
                <View style={{flexDirection:"row", marginVertical:25,   justifyContent:"flex-end"}}>
                <View style={{backgroundColor:Colors.sky,width:"70%", paddingVertical:20, paddingHorizontal:20,
                borderRadius:10,}}>
                <Text style={styles.timeSenderTxt}>{item.message}</Text>

                </View>

            </View>
            )}
            />
            </View>
            </ScrollView>
            <KeyboardAvoidingView style={{flexDirection:"row", height:"10%",marginHorizontal:20,marginBottom:10}} 
            behavior={Platform.OS === "ios" ? "padding" : "height"}>
               <View style={styles.inputContainer}>
                
                     <TextInput 
                        placeholderTextColor={Colors.darkBlack}
                        placeholder={"Type a message..."}
                        multiline={false}
                        underlineColorAndroid="transparent" 
                        style={styles.inputField}/>
                       <TouchableOpacity style={{ height:58,width:58, backgroundColor:Colors.sky, justifyContent:"center", alignItems:"center", 
                        borderRadius:10, alignItems:"center", alignSelf:"center", }}>
                        <Image source={Images.Send} style={{height:24, width:27}}/>
                        </TouchableOpacity>
                </View>
                


            </KeyboardAvoidingView>
        </View>
    )
}

export default Chat

