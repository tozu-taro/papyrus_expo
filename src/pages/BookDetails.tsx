import { StatusBar } from "expo-status-bar"
import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { RouteProp } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import { createHeaderOption, HomeStackParamList } from "../routers/HomeStacks"
import { books } from "../../data"


type HomeScreenRouteProp = RouteProp<HomeStackParamList, 'BookDetails'>

type HomeScreenNavigationProp = StackNavigationProp<
  HomeStackParamList,
  'Bookshelf'
>

type Props = {
  route: HomeScreenRouteProp
  navigation: HomeScreenNavigationProp
}

const BookDetails: React.VFC<Props> = ({ route, navigation }) => {
  const { bookId } = route.params
  const book = books.find(b => b.id === bookId)

  React.useEffect(() => {
    if (!book) return
    navigation.setOptions(
      createHeaderOption(book.title)
    )
  }, [bookId])
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {book &&
        <Text>{book.title}</Text>
      }
    </View>
  )
}

export default BookDetails



//TODO ------------後にCSSに書き出す--------------
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#fff",
    flex: 1,
    paddingTop: 12
  }
})