import {Platform, Dimensions , StyleSheet} from 'react-native'
import {Colors, Fonts} from 'src/utils'
const {height , width } = Dimensions.get("screen")

const styles = StyleSheet.create({
    container:{
        flex:1,
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
  
    userProfile:{
        height:77 , 
        width:77,
        alignSelf:"center"
    },
    camera:{
        height:15 , 
        width:17,
        alignSelf:"center",
        position:"absolute",
        alignSelf: 'center',
    },
    profileTxt:{
       color:Colors.white,
       fontSize:18,
       fontFamily:Fonts.Bold,
       alignSelf:"center"
    },
  
  
    profileContainerTxt:{
       color:Colors.white,
       fontSize:14,
       fontWeight:"500",
       fontFamily:Fonts.Regular,
       alignSelf:"center",
       marginStart:20
    },

   rightArrow: {height:12, width:6,marginHorizontal:20 },
   innerContainer:{flexDirection:"row", marginTop:30, justifyContent:"space-between" },
   btnTxt:{
    textAlign:"center", 
    fontSize:14,
    color:Colors.white,
    fontFamily:Fonts.Bold,
},
   
 

    
    

})

export default styles