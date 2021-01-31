import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { widthPercentageToDP as wp } from "react-native-responsive-screen"
import { Bookshelf } from "../../utils/data"
import { HomeScreenNavigationProp } from "../pages/Home"
import ShowBooksHorizontal from "../molecules/ShowBooksHorizontal"
import { BaseColors } from "../../utils/styleConstants"

type Prop = {
  bs: Bookshelf
  navigation: HomeScreenNavigationProp
}

const BookshelfLine: React.VFC<Prop> = ({ bs, navigation }) => {
  return (
    <View>
      <View style={styles.titleWrap}>
        <Text style={styles.shelftitle}>{bs.name}</Text>
        <Text
          onPress={() => {
            navigation.navigate("Bookshelf", {
              bookShelfId: bs.id
            })
          }
          }
        >もっと見る</Text>
      </View>
      <ShowBooksHorizontal navigation={navigation} bs={bs} />
    </View>
  )
}
export default BookshelfLine

const styles = StyleSheet.create({
  titleWrap: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: wp("90%"),
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 8
  },
  shelftitle: {
    color: BaseColors.secondary,
    fontWeight: "bold"
  },
})