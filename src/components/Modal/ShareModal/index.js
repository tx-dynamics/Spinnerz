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
import {useNavigation} from '@react-navigation/native'



import styles from "./styles";
const ShareModal = ({ setShareModal, shareModal }) => {
  let navigation = useNavigation()

  const BtnHandleShare =() => {
    setShareModal(!shareModal)
    navigation.navigate("WithoutBottom", {screen :"BoostPost"})
  }
  

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
                <TouchableOpacity onPress={() => BtnHandleShare()}
                style={{borderTopColor:"rgba(175, 175, 175, 0.51)", borderTopWidth:1, paddingVertical:30}}>

                <Text style={styles.headingTxt}>Boost Post</Text>
                </TouchableOpacity>

             </View>
        </View>
    </Modal>
  );
};
export default ShareModal;









