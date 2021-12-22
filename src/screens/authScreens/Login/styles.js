import {Platform, Dimensions , StyleSheet} from 'react-native'
import {Colors, Fonts} from 'src/utils'
const {height , width } = Dimensions.get("screen")

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    splashImage:{
        height:118,
        width:135,
        alignSelf:"center",
        marginTop:30
    },
    headerContainer:{
        height:40, 
        marginTop:Platform.OS === "ios" ? 30 :0 , 
        justifyContent:"center", 
        marginHorizontal:20,
    },
    arrowLeft:{
        height:14 , 
        width:7
    },
    loginTxt:{
       color:Colors.white,
       fontSize:40,
       fontWeight:"600",
       fontFamily:Fonts.Regular,
       marginTop:70
    },
    inputContainer:{
        backgroundColor:Colors.white,
        flexDirection:"row",
        borderRadius:5,
        marginTop:30,
        paddingVertical:15,
        paddingStart:10,
        alignItems:"center"
    },
    inputField:{
        letterSpacing:0.75,
        color:Colors.darkBlack,
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