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
        marginTop:Platform.OS === "ios" ? 40 :0 , 
        marginHorizontal:20,
        justifyContent:"space-between",
        flexDirection:"row",
    },
    arrowLeft:{
        height:14 , 
        width:7
    },
    EditProfile:{
        height:17 , 
        width:17
    },
    userProfile:{
        height:77 , 
        width:77,
        alignSelf:"center"
    },
    profileTxt:{
       color:Colors.white,
       fontSize:18,
       fontFamily:Fonts.Bold,
       alignSelf:"center"
    },
    userNameTxt:{
       color:Colors.white,
       fontSize:16,
       fontWeight:"600",
       fontFamily:Fonts.Regular,
       alignSelf:"center",
       marginTop:9
    },
    emailTxt:{
       color:Colors.white,
       fontSize:10,
       fontWeight:"300",
       fontFamily:Fonts.Regular,
       alignSelf:"center",
       marginTop:9
    },
    profileContainerTxt:{
       color:Colors.white,
       fontSize:14,
       fontWeight:"500",
       fontFamily:Fonts.Regular,
       alignSelf:"center",
       marginStart:10
    },
    logoutTxt:{
       color:Colors.sky,
       fontSize:14,
       fontWeight:"600",
       fontFamily:Fonts.Regular,
       alignSelf:"center",
       marginStart:10
    },
   
 

    
    

})

export default styles