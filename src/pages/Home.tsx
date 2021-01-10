import { StatusBar } from "expo-status-bar"
import React from "react"
import { StyleSheet, Button, Text, View, ToolbarAndroidBase } from "react-native"
import { NavigationContainer, RouteProp } from "@react-navigation/native"
import { createStackNavigator, StackNavigationProp } from "@react-navigation/stack"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { SafeAreaProvider } from "react-native-safe-area-context"
import MaterialCommunityIcons from 'react-native-vector-icons/FontAwesome'
import Bookshelf from "./Bookshelf"
import { HomeStackParamList } from "../routers/HomeStacks"

type HomeScreenRouteProp = RouteProp<HomeStackParamList, 'Home'>

type BookShelfScreenNavigationProp = StackNavigationProp<
  HomeStackParamList,
  'Bookshelf'
>
// NavigationScreenProp<NavigationState, NavigationParams> の場合は型付けされているものの、対象が絞られていないため、実行時にエラーが起こる可能性あり



type Props = {
  route: HomeScreenRouteProp
  navigation: BookShelfScreenNavigationProp
}

const HomeScreen: React.VFC<Props> = (props) => {
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <Button
        title="Go to 本棚"
        onPress={() => {
          props.navigation.navigate("Bookshelf", {
            bookShelfId: 1
          })
        }}
      />
      <StatusBar style="auto" />
    </View>
  )
}

export default HomeScreen



//TODO ------------後にCSSに書き出す--------------


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})