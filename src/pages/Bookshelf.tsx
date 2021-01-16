import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { RouteProp } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import { createHeaderOption, HomeStackParamList } from "../routers/HomeStacks"
import { bookshelfs } from "../../data"

type BookshelfScreenRouteProp = RouteProp<HomeStackParamList, 'Bookshelf'>

type BookShelfScreenNavigationProp = StackNavigationProp<
  HomeStackParamList,
  'Bookshelf'
>

type Props = {
  route: BookshelfScreenRouteProp
  navigation: BookShelfScreenNavigationProp
}

const Bookshelf: React.VFC<Props> = ({ route, navigation }) => {
  const { bookShelfId } = route.params
  const bookshelf = bookshelfs.find(bs => bs.id === bookShelfId)
  React.useEffect(() => {
    if (!bookshelf) return
    navigation.setOptions(
      createHeaderOption(bookshelf.name)
    )
  }, [bookShelfId])
  return (
    <View style={styles.container}>
      <Text>Bookshelf</Text>
      <Text>{bookShelfId}</Text>
    </View>
  )
}

export default Bookshelf

//TODO ------------後にCSSに書き出す--------------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})