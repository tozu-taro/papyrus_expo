
import React from "react"
import { StyleSheet, Text, View, ScrollView } from "react-native"
import { widthPercentageToDP as wp } from "react-native-responsive-screen"
import { BaseColors } from "../../utils/styleConstants"
import { books, Bookshelf, bookshelfRelations } from "../../utils/data"
import { HomeScreenNavigationProp } from "../pages/Home"

type Prop = {
  bs: Bookshelf
  navigation: HomeScreenNavigationProp
}

const ShowBooksHorizontal: React.VFC<Prop> = ({ bs, navigation }) => {
  const selectedBookshelfRelation = bookshelfRelations.filter(br => br.bookshelf_id === bs.id)
  const currentBooks = selectedBookshelfRelation.map(s => books.find(b => b.id === s.book_id))
  return (
    <View style={styles.books}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {currentBooks.map(cb =>
          cb &&
          <Text
            key={cb.title}
            style={styles.book}
            onPress={() =>
              navigation.navigate("BookDetails", {
                bookId: cb.id
              })}
          > {cb.title}</Text>
        )}
      </ScrollView>
    </View >
  )
}
export default ShowBooksHorizontal

const styles = StyleSheet.create({
  books: {
    borderBottomColor: BaseColors.third,
    borderBottomWidth: 8,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    marginVertical: 12,
    overflow: "scroll",
    width: wp("100%")
  },
  book: {
    backgroundColor: "gray",
    height: 120,
    width: 80,
    marginHorizontal: 12,
    display: "flex",
    alignItems: "center"
  }
})