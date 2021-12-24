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
        color:Colors.lightGrey,
        fontSize:14,
        fontWeight:"400",
        padding:0,
        fontFamily:Fonts.Regular,
        marginTop:10,
    },
    paypalContainer:{height:74, borderRadius:6, backgroundColor:"#D8F1FF", justifyContent:"center",alignItems:"center", marginTop:13},
    stripeContainer:{height:74, borderRadius:6, backgroundColor:"#9FDCFF", justifyContent:"center",alignItems:"center", marginTop:13}
  

})

export default styles