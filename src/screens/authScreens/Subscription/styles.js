import {Platform, Dimensions , StyleSheet} from 'react-native'
import {Colors, Fonts} from 'src/utils'
const {height , width } = Dimensions.get("screen")

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    splashImage:{
        height:132,
        width:151,
        alignSelf:"center",
        marginTop:50
    },
   
  
   
    headerTxt:{
       color:Colors.white,
       fontSize:20,
       fontWeight:"600",
       fontFamily:Fonts.Regular,
       marginStart:16
    },
    desTxt:{
       color:Colors.white,
       fontSize:12,
       fontWeight:"400",
       fontFamily:Fonts.Regular,
       marginStart:16
    },
    startTxt:{
       color:Colors.white,
       fontSize:18,
       fontFamily:Fonts.Bold,
       textAlign:"center"
    },
    continueTxt:{
       color:Colors.white,
       fontSize:18,
       fontFamily:Fonts.Regular,
       fontWeight:"500",
       textAlign:"center",
       position:"absolute",bottom:0,
       textAlign:"center"
 
    },
    addPhotoTxt:{
       color:Colors.white,
       fontSize:14,
       fontWeight:"400",
       fontFamily:Fonts.Regular,
       textAlign:"center",
       marginTop:8
    },
    loginTxt:{
       color:Colors.white,
       fontSize:20,
       fontWeight:"600",
       fontFamily:Fonts.Regular,
       marginTop:50
    },
    inputContainer:{
        backgroundColor:Colors.white,
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
    },
    passwordEye:{
        height:16 , 
        width:16, 
        marginRight:10, 
    },
    forgotPassword:{
        color:Colors.white,
        fontSize:14,
        fontWeight:"400",
        fontFamily:Fonts.Regular,
        alignSelf:"flex-end",
        marginTop:20
    },
    btnContainer:{
        backgroundColor:Colors.sky,
        borderRadius:6,
        paddingVertical:10,
        marginTop:50,
        paddingVertical:14,
        width:138,
        alignSelf:"center"
   },
    btnLoginTxt:{
        textAlign:"center",
        color:Colors.white,
        fontWeight:"600",
        fontSize:18,
        letterSpacing:0.75,
        fontFamily:Fonts.Regular
 },
 btnSignupContainer:{
    borderRadius:6,
    flexDirection:"row",
    paddingVertical:14,
    alignSelf:"center",
    marginBottom:30

  
},
dontHaveAccountTxt:{
    textAlign:"center",
    color:Colors.white,
    fontWeight:"400",
    fontSize:14,
    letterSpacing:0.75,
    fontFamily:Fonts.Regular
},
 

    
    

})

export default styles