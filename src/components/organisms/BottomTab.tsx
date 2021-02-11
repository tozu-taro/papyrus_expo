import React from "react"
import { StyleSheet, View } from "react-native"
import { Text } from "react-native-elements"
import { BaseColors, iconSize } from "../../utils/styleConstants"
import FontAwesome from "react-native-vector-icons/FontAwesome"

import { NavigationHelpers, ParamListBase, TabNavigationState } from "@react-navigation/native"
import { BottomTabNavigationEventMap } from "@react-navigation/bottom-tabs/lib/typescript/src/types"

interface Props {
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>
  state: TabNavigationState<Record<string, object | undefined>>
}

const BottomTab: React.VFC<Props> = ({ navigation, state }) => {

  const [stackRouteIndex, setStackRouteIndex] = React.useState<number>()
  const [stackRoutes, setStackRoutes] = React.useState<any[]>()

  React.useEffect(() => {
    const bottomTabRouteIndex = state.index
    const bottomTabRoutes = state.routes
    if (bottomTabRoutes[bottomTabRouteIndex].state) {
      setStackRouteIndex(bottomTabRoutes[bottomTabRouteIndex].state?.index)
      setStackRoutes(bottomTabRoutes[bottomTabRouteIndex].state?.routes)
    }
  }, [state])

  const CreateBottomTab = () => {
    return (
      <View style={styles.container}>
        <View style={styles.iconWrap}
          onTouchStart={() => navigation.navigate('Home')}
        >
          <FontAwesome name="home" color={BaseColors.secondary} size={iconSize.medium} />
          <Text style={styles.label}>ホーム</Text>
        </View>
        <View style={styles.iconWrap}
          onTouchStart={() => navigation.navigate('Search')}
        >
          <FontAwesome name="search" color={BaseColors.secondary} size={iconSize.medium} />
          <Text style={styles.label}>検索</Text>
        </View>
        <View style={styles.iconWrap}
          onTouchStart={() => navigation.navigate('Other')}
        >
          <FontAwesome name="cog" color={BaseColors.secondary} size={iconSize.medium} />
          <Text style={styles.label}>その他</Text>
        </View>
      </View>
    )
  }

  if (
    stackRouteIndex !== undefined &&
    stackRoutes !== undefined &&
    stackRoutes[stackRouteIndex].name === 'BarcodeScanner'
  ) {
    return <></>
  } else {
    return (
      <CreateBottomTab />
    )
  }
}

export default BottomTab

const styles = StyleSheet.create({
  container: {
    height: 80,
    backgroundColor: BaseColors.primary,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginLeft: "auto",
    marginRight: "auto",
    alignItems: 'center',
    width: '100%'
  },
  iconWrap: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    marginTop: 4,
    color: BaseColors.secondary,
    fontWeight: 'bold'
  }
})
