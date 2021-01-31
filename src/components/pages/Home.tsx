import React from "react"
import { ScrollView, StyleSheet, View } from "react-native"
import { CompositeNavigationProp, RouteProp } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import { HomeStackParamList } from "../../routers/HomeStacks"
import { bookshelfs } from "../../utils/data"
import BookshelfLine from "../organisms/BookshelfLine"
import { BaseColors } from "../../utils/styleConstants"
import GenericTemplate from "../templates/GenericTemplate"


export type HomeScreenRouteProp = RouteProp<HomeStackParamList, "Home">

export type HomeScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<
    HomeStackParamList,
    "Bookshelf"
  >, StackNavigationProp<
    HomeStackParamList,
    "BookDetails"
  >>

type Props = {
  route: HomeScreenRouteProp
  navigation: HomeScreenNavigationProp
}

const HomeScreen: React.VFC<Props> = ({ navigation, route }) => {
  const createContent = () => {
    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {bookshelfs && bookshelfs.map(bs =>
            <BookshelfLine bs={bs} navigation={navigation} key={bs.name} />
          )}
        </ScrollView>
      </View>
    )
  }
  return (
    <GenericTemplate
      content={createContent()}
      title="Papyrus"
      navigation={navigation}
      route={route}
    />
  )
}

export default HomeScreen

//TODO ------------後にCSSに書き出す--------------
const styles = StyleSheet.create({
  container: {
    borderStartColor: BaseColors.backgroundColor,
    alignItems: "center",
    backgroundColor: BaseColors.backgroundColor,
    flex: 1
  }
})