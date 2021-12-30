import { StyleSheet, Platform, Dimensions } from "react-native";
const { height, width } = Dimensions.get("screen");
import {Colors, Fonts} from 'src/utils'

const styles = StyleSheet.create({
 

  mainView: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor:"rgba(97, 97, 97, 0.59)",
    

  },
  innerView: {
    alignSelf: "center",
  },
  confirmModalCard: {
    backgroundColor: Colors.white,
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    elevation: 4,
  },
  headingTxt:{
        fontSize:12,
        color:Colors.black,
        fontFamily:Fonts.Regular,
        fontWeight:"400",
        marginStart:30
  }
  
   
  
    
  
  
  
});
export default styles;
