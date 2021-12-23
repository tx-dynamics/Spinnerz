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
   
    selectPayment:{
        letterSpacing:0.75,
        color:Colors.black,
        fontSize:13,
        fontWeight:"500",
        fontFamily:Fonts.Regular,
    },
    inputContainer:{
        backgroundColor:"#E5F6FF",
        flexDirection:"row",
        borderRadius:5,
        marginTop:20,
        paddingVertical:15,
        paddingStart:10,
        alignItems:"center"
    },
    inputField:{
        letterSpacing:0.75,
        color:Colors.black,
        fontSize:14,
        flex:1,
        fontWeight:"400",
        padding:0,
        fontFamily:Fonts.Regular,
        marginStart:10
    },
    continueBtn:{
        letterSpacing:0.75,
        color:Colors.white,
        fontSize:14,
        fontWeight:"600",
        textAlign:"center",
        fontFamily:Fonts.Regular,
    },
  

})

export default styles