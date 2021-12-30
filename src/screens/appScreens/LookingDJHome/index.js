import React, {useCallback, useEffect, useState} from 'react'
import {View, StatusBar, Image, StyleSheet, Text, SafeAreaView, TextInput, TouchableOpacity, FlatList, Touchable} from "react-native"
import {useNavigation} from '@react-navigation/native'
import {Colors, Images} from 'src/utils'
import styles from './styles'
import  Header  from 'src/components/Header'
import AddFriendModalView from 'src/components/Modal/AddFriendModal'
import {useSelector} from 'react-redux'



const Home = () => {
    let navigation = useNavigation()
    const [lengthMore, setLengthMore] = useState(false)
    const [textShown, setTextShown] = useState(false)


    const [addFriendModal , setAddFriendModal] = useState(false)



//     const InterestedButton = () => {
//         setConfirmationModal(true)
//   }
    
    
    const toggleNumberOfLines = (index) => {

        setTextShown(textShown === index ? -1 : index)

  }
    const onTextLayout = useCallback(e => {
        setLengthMore(e.nativeEvent.lines.length >= 3);
    });

    const HomeData = [
        {
            id:1 ,
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
        style={[styles.container ,{opacity: addFriendModal? 0.3:1}]}>
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
                        <TouchableOpacity onPress={() => navigation.navigate("UserProfile")}
                        style={styles.userNameContainer}>
                            <Text style={styles.userTxt}>{item.name}</Text>
                            <View style={{flexDirection:"row", alignItems:"center", marginTop:7}}>
                                <Image source={Images.Location} style={{height:8, width:8}} resizeMode={"contain"}/>
                                <Text style={styles.locationTxt}>{item.location}</Text>
                                <Image source={Images.Star} style={{height:8, width:9, marginStart:10, tintColor:"#DFE31A"}} resizeMode={"contain"}/>
                                <Text style={styles.locationTxt}>4.9 (23)</Text>

                            </View>
                        </TouchableOpacity>
                            
                        <TouchableOpacity>
                        <Image source={Images.Chat} style={{height:19, width:20, tintColor:Colors.sky , marginEnd:10}} resizeMode={"contain"}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress ={() => setAddFriendModal(!addFriendModal)}>
                        <Image source={Images.More} style={{height:24, width:24}} resizeMode={"contain"}/>
                        </TouchableOpacity>
                             
                    </View>
                    <View>
                    <Text style={styles.des}
                            onTextLayout={onTextLayout}
                            numberOfLines={textShown === index ? undefined : 2}
                            >{item.des}</Text>
                        {lengthMore ?
                            <Text
                                onPress={() => toggleNumberOfLines(index)}
                                style={[styles.des, { color: Colors.sky, marginTop: 10 }]}>{textShown === index ? '...less' : '...more'}</Text> 
                            : null}
                    </View>

                    <View style={{flexDirection:"row", marginTop:10, marginStart:20}}>
                        <Image source={Images.Instagram} resizeMode={"contain"} style={{height:17, width:17}}/>
                        <Image source={Images.FaceBook} resizeMode={"contain"} style={{height:17, width:17, marginStart:10}}/>
                    </View>
                    
                <View style={{flexDirection:"row"}}>
                    <View 
                    style={styles.rateContainer}>
                            <Text style={[styles.userTxt, {color:Colors.black }]}>$25.00 <Text style={{color:"#7C7C7C",}}>/hour</Text></Text>
                    </View>
                    <TouchableOpacity onPress={() =>  navigation.navigate("WithoutBottom",{screen :"SelectTimeAndDate"})}
                    style={styles.btnContainer}>
                            <Text style={[styles.userTxt, {color:Colors.white , textAlign:"center"}]}>Book Now</Text>
                    </TouchableOpacity>
                    </View>
                  
                </View>
            )}
            />


           
          
            <AddFriendModalView
                setAddFriendModal= {setAddFriendModal}
                addFriendModal ={addFriendModal}
            />
                      
            </View>
    )
}

export default Home
