import {Platform, Dimensions , StyleSheet} from 'react-native'
import {Colors, Fonts} from 'src/utils'
const {height , width } = Dimensions.get("screen")

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.white,
        
    },
    headerContainer:{
        height:Platform.OS === "android" ? 60 :90,
        backgroundColor:Colors.sky,

    },
    headerTxt:{
        textAlign:"center",
        fontFamily:Fonts.Regular,
        fontSize:18,
        fontWeight:"600",
        color:Colors.white
    },
   
    userName:{
        letterSpacing:0.75,
        color:Colors.black,
        fontSize:14,
        fontWeight:"600",
        fontFamily:Fonts.Regular,
    },
    userDes:{
        letterSpacing:0.75,
        color:Colors.black,
        fontSize:12,
        fontWeight:"600",
        fontFamily:Fonts.Regular,
        marginTop:3
    },
    uploadTxt:{
        letterSpacing:0.75,
        color:Colors.black,
        fontSize:12,
        padding:0,
        fontWeight:"600",
        fontFamily:Fonts.Regular,
        textAlign:"center",
        marginTop:10
    },
    durationTimeVideo:{
        color:Colors.white,
        fontSize:12,
        fontWeight:"600",
        fontFamily:Fonts.Regular,

        position:"absolute", bottom:10,right:10, alignSelf:"flex-end"
     },
     delete:{
        letterSpacing:0.75,
        color:Colors.white,
        fontSize:14,
        padding:0,
        fontFamily:Fonts.Bold,
        textAlign:"center"
        ,marginStart:4
    },
    durationTime:{
        color:Colors.black,
        fontSize:9,
        fontWeight:"600",
        fontFamily:Fonts.Regular,
        marginTop:7
     },
    postTxt:{
        letterSpacing:0.75,
        color:Colors.white,
        fontSize:14,
        padding:0,
        fontFamily:Fonts.Bold,
        textAlign:"center"
    },
    
})

export default styles