import { StatusBar } from "expo-status-bar"
import React, { ReactNode } from "react"
import HeaderComponent from "../organisms/Header"
import { HomeScreenNavigationProp, HomeScreenRouteProp } from "../pages/Home"
import { SearchScreenNavigationProp, SearchScreenRouteProp } from "../pages/Search"
import { OtherScreenNavigationProp, OtherScreenRouteProp } from "../pages/Other"
import { BookDetailsRouteProp, BookDetailsNavigationProp } from '../pages/BookDetails'
import { BookShelfScreenNavigationProp, BookshelfScreenRouteProp } from "../pages/Bookshelf"

export type GenericsNavigation = HomeScreenNavigationProp | SearchScreenNavigationProp | OtherScreenNavigationProp | BookDetailsNavigationProp | BookShelfScreenNavigationProp

export type GenericsRoute = HomeScreenRouteProp | SearchScreenRouteProp | OtherScreenRouteProp | BookDetailsRouteProp | BookshelfScreenRouteProp

interface Props {
  content: ReactNode
  title: string
  navigation: GenericsNavigation
  route: GenericsRoute
}

const GenericTemplate: React.VFC<Props> = (props) => {
  return (
    <React.Fragment>
      <StatusBar style="auto" />
      <HeaderComponent
        title={props.title}
        navigation={props.navigation}
        route={props.route}
      />
      {props.content}
    </React.Fragment>
  )
}

export default GenericTemplate