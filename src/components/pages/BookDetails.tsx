import { StatusBar } from "expo-status-bar"
import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { RouteProp } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import { HomeStackParamList } from "../../routers/HomeStacks"
import { books } from "../../utils/data"
import GenericTemplate from "../templates/GenericTemplate"


export type BookDetailsRouteProp = RouteProp<HomeStackParamList, 'BookDetails'>

export type BookDetailsNavigationProp = StackNavigationProp<
  HomeStackParamList,
  'Bookshelf'
>

type Props = {
  route: BookDetailsRouteProp
  navigation: BookDetailsNavigationProp
}

const BookDetails: React.VFC<Props> = ({ route, navigation }) => {
  const { bookId } = route.params
  const book = books.find(b => b.id === bookId)

  React.useEffect(() => {
    if (!book) return

  }, [bookId])

  const createContent = () => (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {book &&
        <Text>{book.title}</Text>
      }
    </View>
  )

  if (!book) return (
    <div>404</div>
  )

  return (
    <GenericTemplate
      content={createContent()}
      navigation={navigation}
      route={route}
      title={book.title}
    />
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