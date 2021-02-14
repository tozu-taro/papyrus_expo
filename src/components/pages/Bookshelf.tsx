import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { RouteProp } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import { HomeStackParamList } from "../../routers/HomeStacks"
import { bookshelfs } from "../../utils/data"
import GenericTemplate from "../templates/GenericTemplate"

export type BookshelfScreenRouteProp = RouteProp<HomeStackParamList, "Bookshelf">

export type BookShelfScreenNavigationProp = StackNavigationProp<
  HomeStackParamList,
  "Bookshelf"
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
  }, [bookShelfId])

  const createContent = () => {
    return (
      <View style={styles.container}>
        <Text>Bookshelf</Text>
        <Text>{bookShelfId}</Text>
      </View>
    )
  }

  return (
    <GenericTemplate
      content={createContent()}
      title={Bookshelf.name}
      navigation={navigation}
      route={route}
    />
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