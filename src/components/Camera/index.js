import React ,{useState}from'react'
import {View , StyleSheet, Text, TouchableOpacity, ImageBackground, Image} from 'react-native'
import styles from './styles'
import {RNCamera} from 'react-native-camera'
import {useCamera} from 'react-native-camera-hooks'
import {Colors, Images} from 'src/utils'
import {useNavigation} from '@react-navigation/native'



const Camera = () => {
    let navigation = useNavigation()

    const [{cameraRef} , {takePicture}] = useCamera(null)
    const [flipType , setFlipType] = useState(0)
    const [flashMode , setFlashMode] = useState(0)

    const CaptureHandle = async () => {
        try{
           const  data = await takePicture()
            console.log(data)
        }
        catch(error){
            console.log(console.error())
        }
    }

    const HandleCameraType =() => {
        if(flipType === 0){
            setFlipType(1)
        }
        else{
            setFlipType(0)
        }
    }
    const HandleFlashMode =() => {
        if(flashMode === 0){
            setFlashMode(1)
        }
        else{
            setFlashMode(0)
        }
    }
    return(
        <View style={styles.container}>
          
    <View style={{flex:1, justifyContent:"center",}}>
        <RNCamera 
            ref ={cameraRef}
            autoFocus={RNCamera.Constants.AutoFocus.on}
            videoStabilizationMode={RNCamera.Constants.VideoQuality['1080p']}
            type={flipType === 0 ?
                RNCamera.Constants.Type.back :
                RNCamera.Constants.Type.front
            }
            flashMode={flashMode === 0 ?
                RNCamera.Constants.FlashMode.off:
                RNCamera.Constants.FlashMode.on
            }
            captu
            style ={styles.preview}
            >

              <View style={{height:"20%",marginHorizontal:10, }}>
            <TouchableOpacity style={{height:"25%", justifyContent:"center",alignSelf:"flex-start", width:"15%"}} onPress={() => navigation.goBack(null)}>
                <Image source={Images.Cross} style={{height:14 , width:15, }}/>
            </TouchableOpacity>

            <TouchableOpacity  style={{alignSelf:"flex-end", width:"15%",paddingVertical:10 }}
            onPress={() => HandleCameraType()}>
                <Image source={Images.FlipIcon} style={{height:22 , width:28,alignSelf:"center", }} resizeMode={"contain"}/>
                <Text style={[styles.iconTxt, {marginTop:10}]}>Flip</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{alignSelf:"flex-end", width:"15%",paddingVertical:10 }}
            onPress={() => HandleFlashMode()}
            >
                <Image source={Images.Flash} style={{height:24 , width:20, alignSelf:"center", margin:10}} resizeMode={"contain"}/>
                <Text style={styles.iconTxt}>Flash</Text>

            </TouchableOpacity>
            <TouchableOpacity style={{alignSelf:"flex-end", width:"15%",paddingVertical:10,}}
            onPress={() => HandleFlashMode()}
            >
                <Image source={Images.Timer} style={{height:24 , width:24, alignSelf:"center", margin:10}} resizeMode={"contain"}/>
                <Text style={styles.iconTxt}>Timer</Text>

            </TouchableOpacity>
            </View>    

           <View style={{height:"15%", alignSelf:"center", marginTop:10, position:"absolute", bottom:0}}>
           <TouchableOpacity style={{justifyContent:"center", alignSelf:"center"}} onPress={() => CaptureHandle()}
                >
                    <ImageBackground source={Images.CaptureCircle} style={{width:77 , height:77, justifyContent:"center", alignItems:"center"}} resizeMode={"contain"}>
                        <View style={{height:62 , width:62, backgroundColor:Colors.captureButton, borderRadius:62/2}}>
                       </View>              
                  </ImageBackground>
                </TouchableOpacity>
           </View>
           </RNCamera>
           </View>
           {/* <View style={{height:"15%", justifyContent:"center", marginTop:10, }}>
           <TouchableOpacity style={{justifyContent:"center", alignSelf:"center"}} onPress={() => CaptureHandle()}
                >
                    <ImageBackground source={Images.CaptureCircle} style={{width:77 , height:77, justifyContent:"center", alignItems:"center"}} resizeMode={"contain"}>
                        <View style={{height:62 , width:62, backgroundColor:Colors.captureButton, borderRadius:62/2}}>
                       </View>              
                  </ImageBackground>
                </TouchableOpacity>
           </View> */}
            

        </View>
    )
}

export default Camera