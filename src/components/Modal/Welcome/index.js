import React,{useEffect} from "react";
import {
  View,
  Modal,
  Platform,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import {Colors, Fonts, Images} from 'src/utils'
import {setUser} from 'src/redux/actions/authActions'
import {useDispatch} from "react-redux"


import styles from "./styles";
const Welocome = ({ setWelcomeModal, welcomeModal }) => {
  let dispatch = useDispatch()

  useEffect(() => {
    setTimeout(() => {
      if(welcomeModal === true){
          dispatch(setUser(true))
      }
    },4000)
})
  

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={welcomeModal}
      onRequestClose={() => setWelcomeModal(!welcomeModal)}
      statusBarTranslucent={true}
    >
        
        <View style={styles.mainView}>
            <View style={styles.welcomeModalCard}>
                <Image source={Images.Party} style={{height:39, width:39,alignSelf:"center" }} resizeMode={"contain"}/>
                <Text style={[styles.headingTxt,{marginTop:18}]}>Congratulations!</Text>
                <Text style={[styles.desTxt, {marginTop:26}]}>Enjoy SPINNERZ Pro</Text>
               
             </View>
        </View>
    </Modal>
  );
};
export default Welocome;









