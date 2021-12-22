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
    inputContainer:{
        backgroundColor:Colors.white,
        flexDirection:"row",
        borderRadius:10,
        paddingVertical:15,
        alignItems:"center",
        paddingLeft:10,
        flex:1,
        marginVertical:10,
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
    des:{
        letterSpacing:0.75,
        color:Colors.black,
        fontSize:10,
        fontWeight:"500",
        padding:0,
        fontFamily:Fonts.Regular,
        marginHorizontal:15,
        marginTop:10,
        
    },
    listContiner:{
        paddingRight:0, 
        marginVertical:6, 
        backgroundColor:Colors.white,paddingVertical:12, borderRadius:10,elevation:3
   },
    innerContainer:{flexDirection:"row",  },
    userImage:{height:48, width:48},
    userNameContainer:{flex:1, marginStart:13,alignSelf:"center"},
    userTxt:{
        letterSpacing:0.75,
        color:Colors.black,
        fontSize:12,
        fontWeight:"600",
        fontFamily:Fonts.Regular,
    },
    lastMsgTxt:{
        letterSpacing:0.75,
        color:Colors.black,
        fontSize:10,
        fontWeight:"400",
        fontFamily:Fonts.Regular,
        marginTop:6
    },
  

})

export default styles