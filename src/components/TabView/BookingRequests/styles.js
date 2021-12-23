import {Platform, Dimensions , StyleSheet} from 'react-native'
import {Colors, Fonts} from 'src/utils'
const {height , width } = Dimensions.get("screen")

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.white,
    },
    listContiner:{
        paddingRight:0, 
        marginVertical:6, 
        backgroundColor:Colors.white,
        paddingVertical:12, 
        borderRadius:10,
        elevation:5,
        marginHorizontal:20

   },
    innerContainer:{flexDirection:"row",  },
    userNameContainer:{flex:1, marginStart:13,marginTop:8},
    userTxt:{
        letterSpacing:0.75,
        color:Colors.black,
        fontSize:12,
        fontWeight:"400",
        fontFamily:Fonts.Regular,
    },
    timeAndDate:{
        letterSpacing:0.75,
        color:Colors.black,
        fontSize:14,
        fontWeight:"600",
        fontFamily:Fonts.Regular,
        marginTop:6
    },
    btnTxt:{
        textAlign:"center",
        letterSpacing:0.75,
        color:Colors.black,
        fontSize:14,
        fontFamily:Fonts.Bold,
    },
   

})

export default styles