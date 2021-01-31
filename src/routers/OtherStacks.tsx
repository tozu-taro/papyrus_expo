import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import OtherScreen from "../components/pages/Other"

export type OtherStackParamList = {
  Other: undefined
}

const OtherStack = createStackNavigator<OtherStackParamList>()
const OtherStacks = () => {
  return (
    <OtherStack.Navigator
      initialRouteName="Other"
      screenOptions={{
        gestureEnabled: false,
        headerShown: false
      }}
    >
      <OtherStack.Screen name="Other" component={OtherScreen} />
    </OtherStack.Navigator>
  )
}

export default OtherStacks