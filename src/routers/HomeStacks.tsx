import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import HomeScreen from "../components/pages/Home"
import Bookshelf from "../components/pages/Bookshelf"
import BookDetails from "../components/pages/BookDetails"

export type HomeStackParamList = {
  Home: undefined
  Bookshelf: { bookShelfId: number }
  BookDetails: { bookId: number }
}

const HomeStack = createStackNavigator<HomeStackParamList>()
const HomeStacks = () => {
  return (
    <HomeStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        gestureEnabled: false,
        headerShown: false
      }}
    >
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Bookshelf" component={Bookshelf} />
      <HomeStack.Screen name="BookDetails" component={BookDetails} />
    </HomeStack.Navigator>
  )
}

export default HomeStacks