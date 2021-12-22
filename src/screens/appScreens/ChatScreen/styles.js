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
    userNameTxt:{
        color:Colors.white,
        fontWeight:"600",
        fontSize:14,
        letterSpacing:0.75,
        fontFamily:Fonts.Regular,
        marginStart:10,
    },
    activeStatusTxt:{
        color:Colors.white,
        fontWeight:"500",
        fontSize:10,
        letterSpacing:0.75,
        fontFamily:Fonts.Regular,
    },
    timeSenderTxt:{
        color:Colors.white,
        fontWeight:"400",
        fontSize:14,
        letterSpacing:0.75,
        fontFamily:Fonts.Regular,
        lineHeight:18
    },
    timeReceiverTxt:{
        fontWeight:"400",
        fontSize:14,
        letterSpacing:0.75,
        fontFamily:Fonts.Regular,
        lineHeight:18,
        color:Colors.black
    },
   
    inputContainer:{
        backgroundColor:Colors.white,
        flexDirection:"row",
        borderRadius:10,
        // paddingVertical:5,
        height:58,
        alignItems:"center",
        paddingLeft:10,
        flex:1,
        marginVertical:15,
        borderColor:Colors.sky,
        borderWidth:1,
        backgroundColor:"rgba(62, 186, 255, 0.12)",
    },
    inputField:{
        letterSpacing:0.75,
        color:Colors.black,
        fontSize:14,
        flex:1,
        fontWeight:"400",
        padding:0,
        paddingStart:10,
        fontFamily:Fonts.Regular,
        // height:25
    },

    

})

export default styles