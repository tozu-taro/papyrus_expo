import React from "react"
import { createStackNavigator, StackNavigationOptions } from "@react-navigation/stack"
import HomeScreen from "../pages/Home"
import Bookshelf from "../pages/Bookshelf"
import BookDetails from "../pages/BookDetails"
import { BaseColors } from "../../colors"
import MaterialCommunityIcons from 'react-native-vector-icons/AntDesign'
import { Text, View } from "react-native"

export type HomeStackParamList = {
  Home: undefined
  Bookshelf: { bookShelfId: number }
  BookDetails: { bookId: number }
}

export const createHeaderOption = (title: string): StackNavigationOptions => {
  return {
    header: ({ navigation, previous }) => (
      <View style={{
        height: 80,
        backgroundColor: BaseColors.primary,
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: 'flex-end',
        marginBottom: 0
      }}>
        {previous?.route.name !== undefined &&
          <View style={{
            bottom: '50%',
            marginTop: 'auto',
            marginBottom: 'auto',
            position: 'absolute',
            left: 18,
            top: '50%',
          }}>
            <MaterialCommunityIcons name="arrowleft" size={26} color={BaseColors.secondary} onPress={() => navigation.goBack()} />
          </View>
        }
        <View>
          <Text style={{
            fontSize: 30,
            fontWeight: 'bold',
            color: BaseColors.secondary,
            paddingBottom: 8
          }}>{title}</Text>
        </View>
        {title === 'Papyrus' &&
          <View style={{
            bottom: '50%',
            marginTop: 'auto',
            marginBottom: 'auto',
            position: 'absolute',
            right: 18,
            top: '50%',
          }}>
            <MaterialCommunityIcons name="pluscircleo" size={26} color={BaseColors.secondary} onPress={() => console.log('本棚追加ボタン')} />
          </View>
        }
      </View>
    ),
  }
}

const HomeStack = createStackNavigator<HomeStackParamList>()
const HomeStacks = () => {
  return (
    <HomeStack.Navigator
      initialRouteName="Home"
      screenOptions={{ gestureEnabled: false }}
    >
      <HomeStack.Screen name="Home" component={HomeScreen} options={() =>
        createHeaderOption('Papyrus')
      } />
      <HomeStack.Screen name="Bookshelf" component={Bookshelf} />
      <HomeStack.Screen name="BookDetails" component={BookDetails} />
    </HomeStack.Navigator>
  )
}

export default HomeStacks