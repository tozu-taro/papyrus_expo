import { StatusBar } from "expo-status-bar"
import React from "react"
import { StyleSheet, Button, Text, View, ToolbarAndroidBase } from "react-native"
import { NavigationContainer, RouteProp } from "@react-navigation/native"
import { createStackNavigator, StackNavigationProp } from "@react-navigation/stack"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { SafeAreaProvider } from "react-native-safe-area-context"
import MaterialCommunityIcons from 'react-native-vector-icons/FontAwesome'
import HomeScreen from "../pages/Home"
import Bookshelf from "../pages/Bookshelf"

export type HomeStackParamList = {
  Home: undefined
  Bookshelf: { bookShelfId: number }
}

const HomeStack = createStackNavigator<HomeStackParamList>()
const HomeStacks = () => {
  return (
    <HomeStack.Navigator
      initialRouteName="Home"
      screenOptions={{ gestureEnabled: false }}
    >
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Bookshelf" component={Bookshelf} />
    </HomeStack.Navigator>
  )
}

export default HomeStacks