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
    
    selectDuration:{
        letterSpacing:0.75,
        color:"rgba(0, 0, 0, 0.4)",
        fontSize:14,
        fontWeight:"600",
        padding:0,
        fontFamily:Fonts.Regular,
        // marginHorizontal:15,
        marginTop:10,
        
    },
    perday:{
        letterSpacing:0.75,
        color:"rgba(0, 0, 0, 0.4)",
        fontSize:14,
        fontWeight:"500",
        padding:0,
        fontFamily:Fonts.Regular,
        marginTop:10,
        
    },
    boostBtn:{
        letterSpacing:0.75,
        color:Colors.white,
        fontSize:14,
        padding:0,
        fontFamily:Fonts.Bold,
        textAlign:"center"
        
    },
    listContiner:{
        paddingRight:0, 
        marginVertical:6, 
        backgroundColor:Colors.white,
        paddingVertical:12, 
        borderRadius:10,
        marginHorizontal:20,

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 5

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
        fontSize:12,
        fontWeight:"600",
        fontFamily:Fonts.Regular,
    },
  

})

export default styles