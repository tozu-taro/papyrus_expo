import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { SafeAreaProvider } from "react-native-safe-area-context"
import MaterialCommunityIcons from 'react-native-vector-icons/FontAwesome'
import HomeStacks from "./HomeStacks"
import SearchStacks from "./SearchStacks"
import OtherStacks from "./OtherStacks"

type RootTabParamList = {
  Home: undefined
  Search: { searchValue: string }
  Other: undefined
}

const Tab = createBottomTabNavigator<RootTabParamList>()

const Tabs = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeStacks} options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }} />
          <Tab.Screen name="Search" component={SearchStacks} options={{
            tabBarLabel: 'Search',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="search" color={color} size={size} />
            ),
          }} />
          <Tab.Screen name="Other" component={OtherStacks} options={{
            tabBarLabel: 'Other',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="cog" color={color} size={size} />
            ),
          }} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default Tabs

