import { StatusBar } from "expo-status-bar"
import React from "react"
import { StyleSheet, Button, Text, View } from "react-native"
import { NavigationContainer, RouteProp } from "@react-navigation/native"
import { createStackNavigator, StackNavigationProp } from "@react-navigation/stack"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { SafeAreaProvider } from "react-native-safe-area-context"
import MaterialCommunityIcons from 'react-native-vector-icons/FontAwesome'
import { ScreenStack } from "react-native-screens"
import { SearchStackParamList } from "../routers/SearchStacks"


type SearchScreenRouteProp = RouteProp<SearchStackParamList, 'Search'>

type SearchScreenNavigationProp = StackNavigationProp<
  SearchStackParamList,
  'Search'
>


type SearchProps = {
  route: SearchScreenRouteProp
  navigation: SearchScreenNavigationProp
}

const SearchScreen: React.VFC<SearchProps> = (props) => {
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <Button
        title="Go to 検索結果"
        onPress={() => console.log('検索結果へ移動するよ')}
      />
      <StatusBar style="auto" />
    </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})