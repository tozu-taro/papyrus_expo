import React from 'react'
import { View, StyleSheet } from 'react-native'
import { CompositeNavigationProp, RouteProp } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import { SearchStackParamList } from "../../routers/SearchStacks"
import { Button, SearchBar } from 'react-native-elements'
import { BaseColors } from '../../utils/styleConstants'
import Feather from 'react-native-vector-icons/Feather'
import GenericTemplate from '../templates/GenericTemplate'

export type SearchScreenRouteProp = RouteProp<SearchStackParamList, 'Details'>

export type SearchScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<
    SearchStackParamList,
    'Details'
  >, StackNavigationProp<
    SearchStackParamList,
    'Result'
  >>

type Props = {
  route: SearchScreenRouteProp
  navigation: SearchScreenNavigationProp
}

const SearchScreen: React.VFC<Props> = ({ navigation, route }) => {
  const [searchValue, setSearchValue] = React.useState<string>('')
  const searchbar = React.useRef<any>()

  React.useEffect(() => {
    return () => searchbar.current.focus()
  })

  const handleOnKeyPress = () => {
    if (!searchValue) return
    navigation.navigate('Result', {
      searchValue: searchValue
    })
  }

  const createContent = () => {
    return (
      <View style={styles.container}>
        <View style={styles.searchbarWrap}>
          <SearchBar
            ref={searchbar}
            onChangeText={setSearchValue}
            value={searchValue}
            placeholder='キーワード(本のタイトル、著者名)'
            containerStyle={styles.formField}
            inputStyle={{ backgroundColor: '#ffffff' }}
            inputContainerStyle={{ backgroundColor: '#ffffff' }}
            round
            keyboardType="ascii-capable"
            returnKeyLabel="検索"
            onSubmitEditing={handleOnKeyPress}
          />

        </View>
        <View style={styles.btnWrap}>
          <Button
            icon={<Feather name="camera" size={42} color={BaseColors.secondary} />}
            title={"本のバーコードをスキャン"}
            onPress={() => {
              navigation.navigate('BarcodeScanner')
            }
            }
            buttonStyle={styles.btnStyle}
            titleStyle={styles.btnTitle}
          />
        </View>
      </View>
    )
  }

  return (
    <GenericTemplate
      content={createContent()}
      title="探す"
      navigation={navigation}
      route={route}
    />
  )
}

export default SearchScreen

const styles = StyleSheet.create({
  barcode: {
    width: "100%",
    height: "40%"
  },
  container: {
    flex: 1,
    backgroundColor: BaseColors.backgroundColor
  },
  searchbarWrap: {
    justifyContent: 'center',
    display: 'flex',
    width: '100%'
  },
  formField: {
    backgroundColor: BaseColors.backgroundColor,
    width: '90%',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: 12,
    padding: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
  btnWrap: {
    marginTop: 32,
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
  },
  btnStyle: {
    backgroundColor: 'transparent',
    borderWidth: 6,
    borderRadius: 12,
    borderColor: BaseColors.secondary,
    display: 'flex',
    justifyContent: 'space-between',
    marginRight: 'auto',
    marginLeft: 'auto',
    paddingVertical: 20,
    paddingHorizontal: 28
  },
  btnTitle: {
    color: BaseColors.secondary,
    fontWeight: 'bold',
    letterSpacing: 1,
    marginLeft: 12,
  }
})