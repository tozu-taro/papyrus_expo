import { StatusBar } from "expo-status-bar"
import React from "react"
import { StyleSheet, Button, Text, View, ToolbarAndroidBase } from "react-native"
import { NavigationContainer, RouteProp } from "@react-navigation/native"
import { createStackNavigator, StackNavigationProp } from "@react-navigation/stack"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { SafeAreaProvider } from "react-native-safe-area-context"
import MaterialCommunityIcons from 'react-native-vector-icons/FontAwesome'
import SearchScreen from "../pages/Search"


export type SearchStackParamList = {
  Search: undefined
}
const SearchStack = createStackNavigator<SearchStackParamList>()
const SearchStacks = () => {
  return (
    <SearchStack.Navigator
      initialRouteName="Search"
      screenOptions={{ gestureEnabled: false }}
    >
      <SearchStack.Screen name="Search" component={SearchScreen} />
    </SearchStack.Navigator>
  )
}

export default SearchStacks