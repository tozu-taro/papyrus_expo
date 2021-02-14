import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import React from 'react'
import { Text } from 'react-native'
import { SearchStackParamList } from '../../routers/SearchStacks'
import GenericTemplate from '../templates/GenericTemplate'

export type SearchResultScreenRouteProp = RouteProp<SearchStackParamList, 'Result'>

export type SearchResultScreenNavigationProp = StackNavigationProp<
  SearchStackParamList,
  'Details'
>

type Props = {
  route: SearchResultScreenRouteProp
  navigation: SearchResultScreenNavigationProp
}
const SearchResult: React.VFC<Props> = ({ navigation, route }) => {
  const { searchValue } = route.params

  const createContent = () => {
    return (
      <Text>{searchValue}</Text>
    )
  }

  return (
    <GenericTemplate
      content={createContent()}
      title="検索結果"
      navigation={navigation}
      route={route}
    />
  )
}
export default SearchResult