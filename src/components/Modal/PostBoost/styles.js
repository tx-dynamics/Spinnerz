import { StyleSheet, Platform, Dimensions } from "react-native";
const { height, width } = Dimensions.get("screen");
import {Colors, Fonts} from 'src/utils'

const styles = StyleSheet.create({
 

  mainView: {
    flex: 1,
    justifyContent: "center",
    backgroundColor:"rgba(97, 97, 97, 0.59)",
    opacity:1

  },
  innerView: {
    alignSelf: "center",
  },
  welcomeModalCard: {
    marginHorizontal:20,
    backgroundColor: Colors.white,
    borderRadius: 10,
    elevation: 4,
    paddingVertical:10,
    paddingHorizontal:20,

  },
  crossIcon:{
        height:11,
        width:11
    },
   
  
    desTxt:{
        textAlign:"center", 
        fontSize:16,
        color:Colors.black,
        fontFamily:Fonts.Regular,
        fontWeight:"400"
    },
    okTxt:{
        textAlign:"center", 
        fontSize:14,
        color:Colors.white,
        fontFamily:Fonts.Bold,
    },
    okBtnContainer:{backgroundColor:Colors.sky, height:32, width:111, borderRadius:6, marginTop:30, justifyContent:"center", alignSelf:"center", marginBottom:10},
    crossContainer:{height:24 ,width:24 , borderRadius:12, backgroundColor:Colors.sky, position:"absolute", right:-5, top:-10, justifyContent:"center", alignItems:"center"}
   
  
  
  
  
});
export default styles;
