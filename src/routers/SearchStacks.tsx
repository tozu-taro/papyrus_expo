import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
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