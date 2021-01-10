import { StatusBar } from "expo-status-bar"
import React from "react"
import { StyleSheet, Button, Text, View } from "react-native"
import { NavigationContainer, RouteProp } from "@react-navigation/native"
import { createStackNavigator, StackNavigationProp } from "@react-navigation/stack"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { SafeAreaProvider } from "react-native-safe-area-context"
import MaterialCommunityIcons from 'react-native-vector-icons/FontAwesome'


type HomeStackParamList = {
  Home: undefined
  Bookshelf: { bookShelfId: number }
}
type HomeScreenRouteProp = RouteProp<HomeStackParamList, 'Bookshelf'>

type BookShelfScreenNavigationProp = StackNavigationProp<
  HomeStackParamList,
  'Bookshelf'
>
// NavigationScreenProp<NavigationState, NavigationParams> の場合は型付けされているものの、対象が絞られていないため、実行時にエラーが起こる可能性あり

type Props = {
  route: HomeScreenRouteProp
  navigation: BookShelfScreenNavigationProp
}

const HomeScreen: React.VFC<Props> = (props) => {
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <Button
        title="Go to 本棚"
        onPress={() => {
          props.navigation.navigate("Bookshelf", {
            bookShelfId: 1
          })
        }}
      />
      <StatusBar style="auto" />
    </View>
  )
}

const Bookshelf: React.VFC<Props> = ({ route, navigation }) => {
  const { bookShelfId } = route.params
  return (
    <View style={styles.container}>
      <Text>Bookshelf</Text>
      <Text>{bookShelfId}</Text>
    </View>
  )
}

const HomeStack = createStackNavigator<HomeStackParamList>()
const HomeStacks = () => {
  return (
    <HomeStack.Navigator
      initialRouteName="Home"
      screenOptions={{ gestureEnabled: false }}
    >
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Bookshelf" component={Bookshelf} />
    </HomeStack.Navigator>
  )
}


type SearchStackParamList = {
  Search: undefined
}
type SearchScreenRouteProp = RouteProp<SearchStackParamList, 'Search'>

type SearchScreenNavigationProp = StackNavigationProp<
  SearchStackParamList,
  'Search'
>
const SearchStack = createStackNavigator<SearchStackParamList>()
const SearchStacks = () => {
  return (
    <SearchStack.Navigator
      initialRouteName="Search"
      screenOptions={{ gestureEnabled: false }}
    >
      <SearchStack.Screen name="Search" component={SearchScreen} />
    </SearchStack.Navigator>
  )
}

type SearchProps = {
  route: SearchScreenRouteProp
  navigation: SearchScreenNavigationProp
}

const SearchScreen: React.VFC<SearchProps> = (props) => {
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <Button
        title="Go to 検索結果"
        onPress={() => console.log('検索結果へ移動するよ')}
      />
      <StatusBar style="auto" />
    </View>
  )
}

const SettingScreen: React.VFC<Props> = () => {
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <Button
        title="Go to Setting"
        onPress={() => console.log('各設定項目へ移動するよ')}
      />
      <StatusBar style="auto" />
    </View>
  )
}

type RootTabParamList = {
  Home: undefined
  Search: { searchValue: string }
  Setting: undefined
}

const Tab = createBottomTabNavigator<RootTabParamList>()
const Tabs = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeStacks} options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }} />
          <Tab.Screen name="Search" component={SearchStacks} options={{
            tabBarLabel: 'Search',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="search" color={color} size={size} />
            ),
          }} />
          <Tab.Screen name="Setting" component={SettingScreen} options={{
            tabBarLabel: 'Setting',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="cog" color={color} size={size} />
            ),
          }} />
          {/* <Tab.Screen name="Other" component={Other} /> */}
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default function App() {
  return (
    <Tabs />
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})