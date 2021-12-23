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
    tabBarContainer:{ 
        display:"flex", 
        flexDirection:"row", 
        backgroundColor:Colors.sky,

        },
        tabBarInnerContainer:{
            width:"34%",
            height:60, 
            // alignItems:"center", 
            // justifyContent:"center" ,
    },
    tabBarIconContainer:{
        height:"100%", 
        width:"60%",  
        justifyContent:"center", 
        alignItems:"center", 
    },
    tabTxt:{
        textAlign:"center",
        fontFamily:Fonts.Bold,
        fontSize:12,
        color:Colors.white,
    }

  
  
   
  

})

export default styles