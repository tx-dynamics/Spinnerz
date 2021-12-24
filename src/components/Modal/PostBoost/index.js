import React, { useEffect } from "react";
import {
  View,
  Modal,
  Platform,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { Colors, Fonts, Images } from 'src/utils'
import { setBoostPost } from 'src/redux/actions/appActions'
import { useDispatch } from "react-redux"
import {useNavigation, useIsFocused} from '@react-navigation/native'


import styles from "./styles";
const PostBoost = ({ setPostBoostModal, postBoostModal }) => {
  let dispatch = useDispatch()
  let navigation = useNavigation()
const HandleHome = () => {
  dispatch(setBoostPost(true))
  navigation.navigate("BoostingPost")
}



  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={postBoostModal}
      onRequestClose={() => setPostBoostModal(!postBoostModal)}
      statusBarTranslucent={true}
    >

      <View style={styles.mainView}>
        <View style={styles.welcomeModalCard}>
          <TouchableOpacity onPress={() => setPostBoostModal(!postBoostModal)}>
            <Image source={Images.RedCross} style={{ height: 24, width: 24, alignSelf: "flex-end" }} resizeMode={"contain"} />
          </TouchableOpacity>
          <Text style={[styles.desTxt, { marginTop: 26 }]}>Your post has been boosted</Text>
          <TouchableOpacity onPress={() => HandleHome()}
          style={styles.okBtnContainer}>
            <Text style={styles.okTxt}>Ok</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
export default PostBoost;









