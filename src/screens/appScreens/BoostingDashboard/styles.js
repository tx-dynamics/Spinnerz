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
        flexDirection:"row"
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
        paddingVertical:10,
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
    reachGoal:{
        letterSpacing:0.75,
        color:Colors.black,
        fontSize:14,
        fontWeight:"500",
        padding:0,
        fontFamily:Fonts.Regular,
        marginHorizontal:15,
        
    },
    reachGoalTxt:{
        letterSpacing:0.75,
        color:Colors.black,
        fontSize:12,
        fontWeight:"500",
        padding:0,
        fontFamily:Fonts.Regular,
        marginTop:10
        
    },
    reachGoalTxtValue:{
        letterSpacing:0.75,
        color:Colors.black,
        fontSize:14,
        fontWeight:"500",
        padding:0,
        fontFamily:Fonts.Regular,
        
    },
 
    
    stopBoosting:{
        letterSpacing:0.75,
        color:Colors.white,
        fontSize:14,
        padding:0,
        fontFamily:Fonts.Bold,
        textAlign:"center"
    },
   

})

export default styles