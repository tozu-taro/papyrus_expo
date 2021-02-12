import React from "react"
import { StyleSheet, View } from "react-native"
import { Text } from "react-native-elements"
import { BaseColors, iconSize } from "../../utils/styleConstants"
import FontAwesome from "react-native-vector-icons/FontAwesome"

import { NavigationHelpers, ParamListBase, TabNavigationState } from "@react-navigation/native"
import { BottomTabDescriptorMap, BottomTabNavigationEventMap } from "@react-navigation/bottom-tabs/lib/typescript/src/types"
import { TouchableOpacity } from "react-native-gesture-handler"

interface Props {
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>
  state: TabNavigationState<Record<string, object | undefined>>
  descriptors: BottomTabDescriptorMap
}

const TabNames = {
  Home: 'home',
  Search: 'search',
  Other: 'cog'
} as const

type TabType = typeof TabNames
type TabName = keyof TabType
type IconName = typeof TabNames[keyof typeof TabNames]

const BottomTab: React.VFC<Props> = ({ navigation, state, descriptors }) => {
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

  const getIconName = (icon: TabName): IconName => {
    const result = Object.keys(TabNames).find(t => t === icon) as TabName
    return TabNames[result]
  }

  const CreateBottomTab = () => {
    return (
      <View style={styles.container}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key]
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
                ? options.title
                : route.name

          const isFocused = state.index === index

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            })

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name)
            }
          }

          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              onPress={onPress}
              style={styles.iconWrap}
              key={label.toString()}
            >
              <FontAwesome
                name={getIconName(label as TabName)}
                color={isFocused ? BaseColors.secondary : '#666'}
                size={iconSize.medium} />
              <Text
                style={{ ...styles.label, color: isFocused ? BaseColors.secondary : '#666' }}
              >
                {label}
              </Text>
            </TouchableOpacity>
          )
        })}
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
    marginTop: 2,
    paddingBottom: 4,
    color: BaseColors.secondary,
    fontWeight: 'bold'
  }
})
