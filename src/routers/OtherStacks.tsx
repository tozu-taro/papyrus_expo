import { StatusBar } from "expo-status-bar"
import React from "react"
import { StyleSheet, Button, Text, View, ToolbarAndroidBase } from "react-native"
import { NavigationContainer, RouteProp } from "@react-navigation/native"
import { createStackNavigator, StackNavigationProp } from "@react-navigation/stack"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { SafeAreaProvider } from "react-native-safe-area-context"
import MaterialCommunityIcons from 'react-native-vector-icons/FontAwesome'
import OtherScreen from "../pages/Other"


export type OtherStackParamList = {
  Other: undefined
  Bookshelf: { bookShelfId: number }
}

const OtherStack = createStackNavigator<OtherStackParamList>()
const OtherStacks = () => {
  return (
    <OtherStack.Navigator
      initialRouteName="Other"
      screenOptions={{ gestureEnabled: false }}
    >
      <OtherStack.Screen name="Other" component={OtherScreen} />
    </OtherStack.Navigator>
  )
}

export default OtherStacks