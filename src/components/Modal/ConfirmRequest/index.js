import React from "react";
import {
  View,
  Modal,
  Platform,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import {Colors, Fonts, Images} from 'src/utils'


import styles from "./styles";
const ConfirmModal = ({ setConfirmationModal, confirmationModal }) => {
  

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={confirmationModal}
      onRequestClose={() => setConfirmationModal(!confirmationModal)}
      statusBarTranslucent={true}
    >
        
        <View style={styles.mainView}>
            <View style={styles.confirmModalCard}>
                <TouchableOpacity onPress={() => setConfirmationModal(!confirmationModal)}
                style={styles.crossContainer}>
                    <Image source={Images.Cross} style={{height:10, width:10, }} resizeMode={"contain"}/>
                </TouchableOpacity>
                <Text style={styles.headingTxt}>You are requesting booking interest!</Text>
                <View style={{flexDirection:"row", width:"100%", justifyContent:"space-around", marginTop:50}}>
                    <TouchableOpacity onPress={() => setConfirmationModal(!confirmationModal)}
                    style={{ paddingVertical:7, backgroundColor:Colors.pink, paddingHorizontal:30, borderRadius:6}}>
                        <Text style={styles.btnTxt}>Decline</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ paddingVertical:7, backgroundColor:Colors.sky, paddingHorizontal:30,borderRadius:6}}>
                        <Text style={styles.btnTxt}>Confirm</Text>
                    </TouchableOpacity>
                    
                </View>
             </View>
        </View>
    </Modal>
  );
};
export default ConfirmModal;









