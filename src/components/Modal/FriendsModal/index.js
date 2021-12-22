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
const FriendsModal = ({ setFriendsModal, friendsModal }) => {
  

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={friendsModal}
      onRequestClose={() => setFriendsModal(!friendsModal)}
      statusBarTranslucent={true}
    >
        
        <View style={styles.mainView}>
            <View style={styles.friendsModalCard}>
           
                <View style={{paddingVertical:20}}>

                <Text style={[styles.headingTxt ,{marginTop:0}]}>Message Emma</Text>
                <Text style={styles.headingTxt}>Unfriend Emma</Text>
                <Text style={styles.headingTxt}>See Friend List</Text>
                <Text style={styles.headingTxt}>Cancel</Text>
                </View>

             </View>
        </View>
    </Modal>
  );
};
export default FriendsModal;









