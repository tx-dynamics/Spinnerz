import {Platform, Dimensions , StyleSheet} from 'react-native'
import {Colors, Fonts} from 'src/utils'
const {height , width } = Dimensions.get("screen")

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor : Colors.black
    },
    splashImage:{
        height:132,
        width:151
    },
    selectRootContainer:{
        backgroundColor:"red", 
        marginHorizontal:20, 
        paddingVertical:15, 
        borderRadius:6
    },
    selectRootTxt:{
       textAlign:"center",
       color:Colors.white,
       fontSize:18,
       fontFamily:Fonts.Bold
    },

    
    

})

export default styles