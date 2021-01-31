import { StatusBar } from "expo-status-bar"
import React from "react"
import { StyleSheet, Button, Text, View } from "react-native"
import { RouteProp } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import { SearchStackParamList } from "../../routers/SearchStacks"
import GenericTemplate from "../templates/GenericTemplate"

export type SearchScreenRouteProp = RouteProp<SearchStackParamList, "Search">

export type SearchScreenNavigationProp = StackNavigationProp<
  SearchStackParamList,
  "Search"
>

type SearchProps = {
  route: SearchScreenRouteProp
  navigation: SearchScreenNavigationProp
}

const SearchScreen: React.VFC<SearchProps> = ({ navigation, route }) => {

  const createContent = () => {
    return (
      <View style={styles.container}>
        <Text>Hello World!</Text>
        <Button
          title="Go to 検索結果"
          onPress={() => console.log("検索結果へ移動するよ")}
        />
        <StatusBar style="auto" />
      </View>
    )
  }

  return (
    <GenericTemplate
      content={createContent()}
      title="探す"
      navigation={navigation}
      route={route}
    />
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