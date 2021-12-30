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
        backgroundColor:Colors.white,

    },
    headerTxt:{
        textAlign:"center",
        fontFamily:Fonts.Regular,
        fontSize:18,
        fontWeight:"600",
        color:Colors.black
    },
    selectDateTxt:{
        fontFamily:Fonts.Regular,
        fontSize:16,
        fontWeight:"600",
        color:Colors.black,
        marginHorizontal:20
    },
    currentDate:{
        fontFamily:Fonts.Regular,
        fontSize:20,
        fontWeight:"400",
        color:Colors.black,
        marginTop:20,
        marginHorizontal:20

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