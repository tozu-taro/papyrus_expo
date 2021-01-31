import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { SafeAreaProvider } from "react-native-safe-area-context"
import MaterialCommunityIcons from "react-native-vector-icons/FontAwesome"
import HomeStacks from "./HomeStacks"
import SearchStacks from "./SearchStacks"
import OtherStacks from "./OtherStacks"
import { BaseColors } from "../utils/styleConstants"

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
        <Tab.Navigator tabBarOptions={{
          tabStyle: {
            backgroundColor: BaseColors.primary
          },
          labelStyle: {
            color: BaseColors.secondary
          }
        }}>
          <Tab.Screen name="Home" component={HomeStacks} options={{
            tabBarLabel: "ホーム",
            tabBarIcon: ({ size }) => (
              <MaterialCommunityIcons name="home" color={BaseColors.secondary} size={size} />
            ),
          }} />
          <Tab.Screen name="Search" component={SearchStacks} options={{
            tabBarLabel: "検索",
            tabBarIcon: ({ size }) => (
              <MaterialCommunityIcons name="search" color={BaseColors.secondary} size={size} />
            ),
          }} />
          <Tab.Screen name="Other" component={OtherStacks} options={{
            tabBarLabel: "その他",
            tabBarIcon: ({ size }) => (
              <MaterialCommunityIcons name="cog" color={BaseColors.secondary} size={size} />
            ),
          }} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default Tabs

