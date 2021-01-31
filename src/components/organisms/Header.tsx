import React from "react"
import { StyleSheet } from "react-native"
import { Header } from "react-native-elements"
import { BaseColors, fontsize, iconSize } from "../../utils/styleConstants"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import AntDesign from "react-native-vector-icons/AntDesign"
import { GenericsNavigation, GenericsRoute } from "../templates/GenericTemplate"

interface Props {
  title: string
  navigation: GenericsNavigation
  route: GenericsRoute
}

const HeaderComponent: React.VFC<Props> = (props) => {

  const switchRightComponent = () => {
    switch (props.route.name) {
      case 'Home':
        return (<MaterialCommunityIcons name="bookshelf" size={iconSize.medium} color={BaseColors.secondary} onPress={() => console.log('本棚編集画面へ')} />)
        break
      default:
        break
    }
  }

  const switchLeftComponent = () => {
    switch (props.route.name) {
      case 'BookDetails':
        return (<AntDesign name="arrowleft" size={26} color={BaseColors.secondary} onPress={() => props.navigation.goBack()} />)
        break
      case 'Bookshelf':
        return (<AntDesign name="arrowleft" size={26} color={BaseColors.secondary} onPress={() => props.navigation.goBack()} />)
        break
      default:
        break
    }
  }

  return (
    <Header
      leftComponent={switchLeftComponent()}
      leftContainerStyle={{
        justifyContent: 'center'
      }}
      centerComponent={{
        text: props.title,
        style: {
          fontSize: fontsize.headerTitle,
          color: BaseColors.secondary,
          letterSpacing: 1,
          fontWeight: "bold",
        },
      }}
      rightComponent={switchRightComponent()}
      rightContainerStyle={{
        justifyContent: 'center'
      }}
      backgroundColor={BaseColors.primary}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: BaseColors.secondary
  }
})

export default HeaderComponent