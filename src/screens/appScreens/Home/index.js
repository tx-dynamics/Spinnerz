import React, {useCallback, useEffect, useState} from 'react'
import {View, StatusBar, Image, StyleSheet, Text, SafeAreaView, TextInput, TouchableOpacity, FlatList} from "react-native"
import {useNavigation} from '@react-navigation/native'
import {Colors, Images} from 'src/utils'
import styles from './styles'
import  Header  from 'src/components/Header'
import ConfirmRequestModalView from 'src/components/Modal/ConfirmRequest'
import ShareModalView from 'src/components/Modal/ShareModal'
import {useSelector} from 'react-redux'



const Home = () => {
    let navigation = useNavigation()
    const [lengthMore , setLengthMore] = useState(false)
    const [textShown , setTextShown] = useState(false)

    const [interested , setInterested] = useState(true)
    const [requestSent , setRequestSent] = useState(false)
    const [confirmationModal , setConfirmationModal] = useState(false)
    const [shareModal , setShareModal] = useState(false)

    const boostPost = useSelector((state) => state.app.boostPost)


    const InterestedButton = () => {
        setConfirmationModal(true)
  }
    // const RequestButton = () => {
    //     setInterested(false)
    //     setRequestSent(true)
    //     setConfirmationModal(true)

    // }
    
    const toggleNumberOfLines = (index)=> {
        
        setTextShown(textShown === index ? -1 : index)
        
      }
    const onTextLayout = useCallback(e =>{
        setLengthMore(e.nativeEvent.lines.length >=3);
    });


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
        {
            id:3,
            name:"Emma White",
            location:"Barcelona",
            des:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis in et, diam magna ullamcorper. Lacus nulla nullam consequat nulla pulvinar tortor et. Laoreet fames gravida leo nisi posuere. Consequat, eget adipiscing nunc, sed tellus tincidunt erat vel. Tortor mauris fusce faucibus eros leo neque morbi. Laoreet fames gravida leo nisi posuere. Consequat, eget adipiscing nunc, sed tellus tincidunt erat vel"
        },
        {
            id:4,
            name:"Emma White",
            location:"Barcelona",
            des:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis in et, diam magna ullamcorper. Lacus nulla nullam consequat nulla pulvinar tortor et. Laoreet fames gravida leo nisi posuere. Consequat, eget adipiscing nunc, sed tellus tincidunt erat vel. Tortor mauris fusce faucibus eros leo neque morbi. Laoreet fames gravida leo nisi posuere. Consequat, eget adipiscing nunc, sed tellus tincidunt erat vel"
        },
        {
            id:5,
            name:"Emma White",
            location:"Barcelona",
            des:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis in et, diam magna ullamcorper. Lacus nulla nullam consequat nulla pulvinar tortor et. Laoreet fames gravida leo nisi posuere. Consequat, eget adipiscing nunc, sed tellus tincidunt erat vel. Tortor mauris fusce faucibus eros leo neque morbi. Laoreet fames gravida leo nisi posuere. Consequat, eget adipiscing nunc, sed tellus tincidunt erat vel"
        },
    ]
    return(
      <View 
        style={[styles.container ,{opacity: confirmationModal || shareModal? 0.3:1}]}>
            <StatusBar translucent={false}
            barStyle={"default"}
            backgroundColor= {Colors.sky}/>
            <Header/>

            <View style={{flexDirection:"row", marginHorizontal:20,  alignItems:"center"}}>
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
                <TouchableOpacity onPress={() => navigation.navigate("Filter")}>
                <Image
                    source={Images.Filter} style={{height:32, width:32, marginLeft:10}} resizeMode={"contain"}
                />
                </TouchableOpacity>
               

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
                            
                        <TouchableOpacity onPress ={() => setShareModal(!shareModal)}>
                        <Image source={Images.More} style={{height:24, width:24}} resizeMode={"contain"}/>
                        </TouchableOpacity>
                             
                    </View>
                    <Text style={styles.des}
                    onTextLayout= {onTextLayout}
                    numberOfLines={textShown === index ? undefined :2}>{item.des}</Text>
                    {lengthMore ?
                     <Text 
                    onPress={() => toggleNumberOfLines(index)}
                    style={[styles.des, {color:Colors.sky , marginTop:10}]}>{textShown === index ?'...less' : '...more'}</Text> : null}
                    {boostPost ? 
                    <View style={{flexDirection:"row", justifyContent:"space-between", marginHorizontal:20,backgroundColor:"#E5F6FF", height:26, borderRadius:6, marginTop:10}}>
                       <View style={{flexDirection:"row", justifyContent:"center", alignSelf:"center", marginStart:10}}>
                           <Image source={Images.Wave} style={{height:9, width:9, alignSelf:"center"}} resizeMode={"contain"}/>
                           <Text style={styles.boostValue}>31.4 k reach</Text>
                       </View>
                       <View style={{flexDirection:"row", justifyContent:"center", alignSelf:"center", marginEnd:10}}>
                           <Text style={styles.boostValue}>View all</Text>
                           <Image source={Images.BlackRightArrow} style={{height:6, width:5, alignSelf:"center"}} resizeMode={"contain"}/>
                       </View>
                    </View>
                    :
                    interested ?
                    <TouchableOpacity onPress={() => InterestedButton()}
                    style={styles.btnContainer}>
                            <Text style={[styles.userTxt, {color:Colors.white , textAlign:"center"}]}>I'm Interested</Text>
                    </TouchableOpacity>
                    :null
                    // requestSent ?
                    // <TouchableOpacity onPress={() => RequestButton()}
                    // style={[styles.btnContainer, {backgroundColor:Colors.green}]}>
                    //         <Text style={[styles.userTxt, {color:Colors.white , textAlign:"center"}]}>Request Sent</Text>
                    // </TouchableOpacity>
                    // :null}
                }
                </View>
            )}
            />


           
            <ConfirmRequestModalView
                setConfirmationModal= {setConfirmationModal}
                confirmationModal ={confirmationModal}
            />
            <ShareModalView
                setShareModal= {setShareModal}
                shareModal ={shareModal}
            />
                      
            </View>
    )
}

export default Home
