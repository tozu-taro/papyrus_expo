import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import HomeStacks from "./HomeStacks"
import SearchStacks from "./SearchStacks"
import OtherStacks from "./OtherStacks"
import { BaseColors } from "../utils/styleConstants"
import BottomTab from "../components/organisms/BottomTab"

export type RootTabParamList = {
  Home: undefined
  Search: { searchValue: string }
  Other: undefined
  BarcodeScanner: undefined
}

const Tab = createBottomTabNavigator<RootTabParamList>()

const Tabs = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBarOptions={{
        tabStyle: {
          backgroundColor: BaseColors.primary,
        },
        labelStyle: {
          color: BaseColors.secondary
        },
      }}
        tabBar={(props) =>
          <BottomTab {...props} />
        }
      >
        <Tab.Screen name="Home" component={HomeStacks} />
        <Tab.Screen name="Search" component={SearchStacks} />
        <Tab.Screen name="Other" component={OtherStacks} />
      </Tab.Navigator>
    </NavigationContainer >
  )
}

export default Tabs