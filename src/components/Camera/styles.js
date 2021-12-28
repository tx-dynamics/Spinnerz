

import {Platform, Dimensions , StyleSheet} from 'react-native'
import {Colors, Fonts} from 'src/utils'
const {height , width } = Dimensions.get("screen")

const styles = StyleSheet.create({
    container:{
        flex:1,
        // backgroundColor : "white"
    },
    preview:{
        width:"100%",
        height:"100%",
        marginVertical:50
        // alignItems:"center",
        // justifyContent:"flex-end"
    },
    iconTxt:{
        textAlign:"center",
        color:Colors.white,
        fontSize:10,
        letterSpacing:0.75,
        fontFamily:Fonts.Bold,
        textAlign:"center",
    },

    


})

export default styles