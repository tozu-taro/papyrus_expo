import { StatusBar } from "expo-status-bar"
import React, { ReactNode } from "react"
import HeaderComponent from "../organisms/Header"
import { HomeScreenNavigationProp, HomeScreenRouteProp } from "../pages/Home"
import { SearchScreenNavigationProp, SearchScreenRouteProp } from "../pages/Search"
import { OtherScreenNavigationProp, OtherScreenRouteProp } from "../pages/Other"
import { BookDetailsRouteProp, BookDetailsNavigationProp } from '../pages/BookDetails'
import { BookShelfScreenNavigationProp, BookshelfScreenRouteProp } from "../pages/Bookshelf"
import { BarcodeScannerScreenNavigationProp, BarcodeScannerScreenRouteProp } from "../organisms/BarcodeScanner"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { SearchResultScreenNavigationProp, SearchResultScreenRouteProp } from "../pages/SearchResult"

export type GenericsRoute = HomeScreenRouteProp | SearchScreenRouteProp | OtherScreenRouteProp | BookDetailsRouteProp | BookshelfScreenRouteProp | BarcodeScannerScreenRouteProp | SearchResultScreenRouteProp

export type GenericsNavigation = HomeScreenNavigationProp | SearchScreenNavigationProp | OtherScreenNavigationProp | BookDetailsNavigationProp | BookShelfScreenNavigationProp | BarcodeScannerScreenNavigationProp | SearchResultScreenNavigationProp

interface Props {
  content: ReactNode
  title: string
  navigation: GenericsNavigation
  route: GenericsRoute
}

const GenericTemplate: React.VFC<Props> = (props) => {
  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <HeaderComponent
        title={props.title}
        navigation={props.navigation}
        route={props.route}
      />
      {props.content}
    </SafeAreaProvider>
  )
}

export default GenericTemplate