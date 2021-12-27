import {Platform, Dimensions , StyleSheet} from 'react-native'
import {Colors, Fonts} from 'src/utils'
const {height , width } = Dimensions.get("screen")

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor : Colors.white
    },
    headerContainer:{
        height:Platform.OS === "android" ? 60 :90,
        width:"100%", 
        flexDirection:"row",
        backgroundColor:Colors.sky
    },
    headerTxt:{
        color:Colors.white,
        fontWeight:"500",
        fontSize:18,
        letterSpacing:0.75,
        fontFamily:Fonts.Regular,
    },
    headerTxt:{
        color:Colors.white,
        fontSize:18,
        letterSpacing:0.75,
        fontFamily:Fonts.Bold,
        textAlign:"center"
    },
    userNameTxt:{
        color:Colors.black,
        fontSize:16,
        fontWeight:"600",
        fontFamily:Fonts.Regular,
        alignSelf:"center",
        marginTop:9
     },
     emailTxt:{
        color:Colors.black,
        fontSize:10,
        fontWeight:"600",
        fontFamily:Fonts.Regular,
        alignSelf:"center",
        marginStart:5
     },
     seeVideos:{
        color:Colors.black,
        fontSize:14,
        fontWeight:"600",
        fontFamily:Fonts.Regular,
        marginTop:13
     },
     durationTime:{
        color:Colors.black,
        fontSize:9,
        fontWeight:"600",
        fontFamily:Fonts.Regular,
        marginTop:7
     },
     durationTimeVideo:{
        color:Colors.white,
        fontSize:12,
        fontWeight:"600",
        fontFamily:Fonts.Regular,

        position:"absolute", bottom:10,right:10, alignSelf:"flex-end"
     },
    userProfile:{
        height:77 , 
        width:77,
        alignSelf:"center"
    },
    

})

export default styles