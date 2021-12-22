import {Platform, Dimensions , StyleSheet} from 'react-native'
import {Colors, Fonts} from 'src/utils'
const {height , width } = Dimensions.get("screen")

const styles = StyleSheet.create({
    container:{
        height:Platform.OS === "android" ? 60 :90,
        backgroundColor:Colors.sky
    },
    headerTxt:{
        textAlign:"center",
        fontFamily:Fonts.Regular,
        fontSize:18,
        fontWeight:"600",
        color:Colors.white
    }
   

})

export default styles