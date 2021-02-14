import React from "react"
import { createStackNavigator, StackCardInterpolationProps, StackNavigationOptions, TransitionSpecs } from "@react-navigation/stack"
import SearchScreen from "../components/pages/Search"
import SearchResult from "../components/pages/SearchResult"
import BarcodeScanner from "../components/organisms/BarcodeScanner"
import BookDetails from "../components/pages/BookDetails"


export type SearchStackParamList = {
  Search: undefined
  Result: { searchValue: string }
  Details: { isbn: string }
  BarcodeScanner: undefined
}

const SearchStack = createStackNavigator<SearchStackParamList>()
const SearchStacks = () => {
  return (
    <SearchStack.Navigator
      initialRouteName="Search"
      screenOptions={{
        gestureEnabled: false,
        headerShown: false
      }}
    >
      <SearchStack.Screen name="Search" component={SearchScreen} />
      <SearchStack.Screen name="Result" component={SearchResult} />
      <SearchStack.Screen name="Details" component={BookDetails} />
      <SearchStack.Screen name="BarcodeScanner" component={BarcodeScanner} options={verticalAnimation} />
    </SearchStack.Navigator>
  )
}

export default SearchStacks

const verticalAnimation: StackNavigationOptions = {
  gestureDirection: 'vertical',
  transitionSpec: {
    open: TransitionSpecs.TransitionIOSSpec,
    close: TransitionSpecs.TransitionIOSSpec,
  },
  cardStyleInterpolator: ({
    current,
    layouts,
  }: StackCardInterpolationProps) => {
    return {
      cardStyle: {
        transform: [
          {
            translateY: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.height, 0],
            }),
          },
        ],
      },
    }
  },
}