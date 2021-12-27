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
    listContiner:{
        backgroundColor:Colors.white, 
        padding:10,
        paddingRight:0, 
        marginVertical:10, 
        borderRadius:10,
        elevation:5,
        shadowColor:"#000",
        shadowOffset:{width:0, height:2},
        shadowOpacity:0.3,
        shadowRadius:2,
        marginHorizontal:20
        
    },
    innerContainer:{flexDirection:"row",  alignItems:"center"},
    userImage:{height:48, width:48},
    userNameContainer:{flex:1, marginStart:10,alignSelf:"center"},
    des:{
        letterSpacing:0.75,
        color:Colors.black,
        fontSize:10,
        fontWeight:"600",
        padding:0,
        fontFamily:Fonts.Regular,
        marginTop:10,
        lineHeight:16
        
    },  userTxt:{
        letterSpacing:0.75,
        color:Colors.black,
        fontSize:14,
        fontWeight:"500",
        padding:0,
        fontFamily:Fonts.Regular,
    },
    locationTxt:{
        letterSpacing:0.75,
        color:Colors.black,
        fontSize:10,
        fontWeight:"500",
        padding:0,
        fontFamily:Fonts.Regular,
        marginStart:5
    },
    boostValue:{
        letterSpacing:0.75,
        color:Colors.black,
        fontSize:10,
        fontWeight:"600",
        padding:0,
        fontFamily:Fonts.Regular,
        marginHorizontal:10,
        
    },
    btnContainer:{backgroundColor:Colors.sky, paddingVertical:15 , width:137, 
        alignSelf:"flex-end", marginHorizontal:20, marginTop:10, borderRadius:6}
 

   

})

export default styles