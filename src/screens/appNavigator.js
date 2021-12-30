import React from "react"
import { useSelector } from 'react-redux'
import { createStackNavigator } from "@react-navigation/stack"

import BottomTabnavigator from 'src/navigation/bottomTabNavigator'
import withoutBottomTabnavigator from 'src/navigation/withoutBottomTabNavigator'
import AuthNavigator from 'src/screens/authScreens/authNavigator'

const Stack = createStackNavigator()

const AppStackNavigator = () => {
    return(
        <Stack.Navigator>
      <Stack.Screen name="Root" options={{ headerShown: false }}>
        {props => <BottomTabnavigator {...props} />}
      </Stack.Screen>
      <Stack.Screen name="WithoutBottom" component={withoutBottomTabnavigator} options={{ headerShown: false }} />
    </Stack.Navigator>
    )
}
const MainNavigator = () => {

    const user = useSelector((state) => state.auth.user)
    if (user != null) {
        return <AppStackNavigator />
    }
    else {
        return <AuthNavigator />
    }
}
export default MainNavigator

