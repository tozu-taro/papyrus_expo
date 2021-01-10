import { StatusBar } from "expo-status-bar"
import React from "react"
import { StyleSheet, Button, Text, View, ToolbarAndroidBase } from "react-native"
import { NavigationContainer, RouteProp } from "@react-navigation/native"
import { createStackNavigator, StackNavigationProp } from "@react-navigation/stack"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { SafeAreaProvider } from "react-native-safe-area-context"
import MaterialCommunityIcons from 'react-native-vector-icons/FontAwesome'


type HomeStackParamList = {
  Home: undefined
  Bookshelf: { bookShelfId: number }
}
type BookshelfScreenRouteProp = RouteProp<HomeStackParamList, 'Bookshelf'>

type BookShelfScreenNavigationProp = StackNavigationProp<
  HomeStackParamList,
  'Bookshelf'
>
// NavigationScreenProp<NavigationState, NavigationParams> の場合は型付けされているものの、対象が絞られていないため、実行時にエラーが起こる可能性あり



type Props = {
  route: BookshelfScreenRouteProp
  navigation: BookShelfScreenNavigationProp
}


const Bookshelf: React.VFC<Props> = ({ route, navigation }) => {
    const { bookShelfId } = route.params
    return (
      <View style={styles.container}>
        <Text>Bookshelf</Text>
        <Text>{bookShelfId}</Text>
      </View>
    )
  }


export default  Bookshelf


//TODO ------------後にCSSに書き出す--------------


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})