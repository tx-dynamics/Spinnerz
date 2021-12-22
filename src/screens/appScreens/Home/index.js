import React, {useCallback, useEffect, useState} from 'react'
import {View, StatusBar, Image, StyleSheet, Text, SafeAreaView, TextInput, TouchableOpacity, FlatList} from "react-native"
import {useNavigation} from '@react-navigation/native'
import {Colors, Images} from 'src/utils'
import styles from './styles'
import  Header  from 'src/components/Header'
import ConfirmRequestModalView from 'src/components/Modal/ConfirmRequest'
import ShareModalView from 'src/components/Modal/ShareModal'


const Home = () => {
    let navigation = useNavigation()
    const [lengthMore , setLengthMore] = useState(false)
    const [textShown , setTextShown] = useState(false)

    const [interested , setInterested] = useState(true)
    const [requestSent , setRequestSent] = useState(false)
    const [confirmationModal , setConfirmationModal] = useState(false)
    const [shareModal , setShareModal] = useState(false)

    const InterestedButton = () => {
            setInterested(false)
            setRequestSent(true)
  }
    const RequestButton = () => {
        setInterested(false)
        setRequestSent(true)
        setConfirmationModal(true)

    }
    
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
                <Image
                    source={Images.Filter} style={{height:32, width:32, marginLeft:10}} resizeMode={"contain"}
                />

            </View>

            <FlatList
            data={HomeData}
            contentContainerStyle={{marginHorizontal:20}}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item , index}) => (
                <TouchableOpacity style={styles.listContiner}>
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
                    {interested ?
                    <TouchableOpacity onPress={() => InterestedButton()}
                    style={styles.btnContainer}>
                            <Text style={[styles.userTxt, {color:Colors.white , textAlign:"center"}]}>I'm Interested</Text>
                    </TouchableOpacity>
                    :null}
                    {requestSent ?
                    <TouchableOpacity onPress={() => RequestButton()}
                    style={[styles.btnContainer, {backgroundColor:Colors.green}]}>
                            <Text style={[styles.userTxt, {color:Colors.white , textAlign:"center"}]}>Request Sent</Text>
                    </TouchableOpacity>
                    :null}
                </TouchableOpacity>
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
