import React, {useEffect} from 'react'
import {View, StatusBar, Image, StyleSheet, Text} from "react-native"
import {useNavigation} from '@react-navigation/native'
import {Colors, Images} from 'src/utils'
import styles from './styles'


const Collection = () => {
    let navigation = useNavigation()
    return(
      
            <View 
                style={styles.container}>
                    <StatusBar hidden={true}/>
                    <Text>Home</Text>
                      
            </View>
    )
}

export default Collection
