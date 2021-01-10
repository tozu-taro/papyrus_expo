import { StatusBar } from "expo-status-bar"
import React from "react"
import { StyleSheet, Button, Text, View } from "react-native"
import { RouteProp } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import { HomeStackParamList } from "../routers/HomeStacks"

type HomeScreenRouteProp = RouteProp<HomeStackParamList, 'Home'>

type HomeScreenNavigationProp = StackNavigationProp<
  HomeStackParamList,
  'Bookshelf'
>

type Props = {
  route: HomeScreenRouteProp
  navigation: HomeScreenNavigationProp
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