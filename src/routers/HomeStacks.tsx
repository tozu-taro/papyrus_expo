import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
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