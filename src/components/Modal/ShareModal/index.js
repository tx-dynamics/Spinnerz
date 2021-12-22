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
const ShareModal = ({ setShareModal, shareModal }) => {
  

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={shareModal}
      onRequestClose={() => setShareModal(!shareModal)}
      statusBarTranslucent={true}
    >
        
        <View style={styles.mainView}>
            <View style={styles.confirmModalCard}>
                
                <View style={{flexDirection:"row", width:"100%", justifyContent:"space-around",  paddingVertical:30, }}>
                   <Image source={Images.ShareIcon} style={{width:45 , height:67}}/>
                   <Image source={Images.Report} style={{width:45 , height:67}}/>
                    
                </View>
                <View style={{borderTopColor:"rgba(175, 175, 175, 0.51)", borderTopWidth:1, paddingVertical:30}}>

                <Text style={styles.headingTxt}>Boost Post</Text>
                </View>

             </View>
        </View>
    </Modal>
  );
};
export default ShareModal;









