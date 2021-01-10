import { StatusBar } from "expo-status-bar"
import React from "react"
import { StyleSheet, Button, Text, View } from "react-native"
import { NavigationContainer, RouteProp } from "@react-navigation/native"
import { createStackNavigator, StackNavigationProp } from "@react-navigation/stack"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { SafeAreaProvider } from "react-native-safe-area-context"
import MaterialCommunityIcons from 'react-native-vector-icons/FontAwesome'


type Props = {
  // route: OtherScreenRouteProp
  // navigation: BookShelfScreenNavigationProp
}

const OtherScreen: React.VFC<Props> = () => {
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <Button
        title="Go to Setting"
        onPress={() => console.log('各設定項目へ移動するよ')}
      />
      <StatusBar style="auto" />
    </View>
  )
}

export default OtherScreen


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})