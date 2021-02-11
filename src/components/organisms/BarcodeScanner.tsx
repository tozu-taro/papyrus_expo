import { CompositeNavigationProp, RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import axios from 'axios'
import { BarCodeScanner } from 'expo-barcode-scanner'
import React from 'react'
import { Button, Image, Text, View } from 'react-native'
import GenericTemplate from '../templates/GenericTemplate'
import { SearchStackParamList } from '../../routers/SearchStacks'

export type BarcodeScannerScreenRouteProp = RouteProp<SearchStackParamList, 'BarcodeScanner'>

export type BarcodeScannerScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<
    SearchStackParamList,
    'Result'
  >, StackNavigationProp<
    SearchStackParamList,
    'Result'
  >>

type Props = {
  route: BarcodeScannerScreenRouteProp
  navigation: BarcodeScannerScreenNavigationProp
}
const BarcodeScanner: React.VFC<Props> = ({ navigation, route }) => {

  const [hasPermission, setHasPermission] = React.useState<boolean | null>(null)
  const [scanned, setScanned] = React.useState<boolean>(false)
  const [bookInfo, setBookInfo] = React.useState<any>(null)
  const [isActive, setIsActive] = React.useState<boolean>(false)

  React.useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync()
      setHasPermission(status === 'granted')
    })()
  }, [])

  React.useEffect(() => {
    setIsActive(true)
    return () => setIsActive(false)
  })

  const fetchBooks = async (URL: string) => {
    try {
      const response = await axios.get(URL)
      // console.log("response", response)
      //本の情報を取得する
      // console.log('response.data.Items[0].Item', response.data.Items[0].Item)
      bookInfo(response.data.Items[0].Item)
      alert('OK')
    } catch (error) {
      alert('エラー')
      // resetSession()
    }
  }

  const handleBarCodeScanned = ({ type, data }: any) => {
    setScanned(true)
    console.log('data', data)
    const URL = `https://app.rakuten.co.jp/services/api/BooksTotal/Search/20170404?format=json&isbnjan=${data}&applicationId=1043835991780019602`
    fetchBooks(URL)
  }

  const resetSession = () => {
    setScanned(false)
    setBookInfo(null)
  }

  if (hasPermission === null) {
    return <Text>カメラへの許可を求めています</Text>
  }
  if (hasPermission === false) {
    return <Text>カメラへのアクセス権限がありません</Text>
  }

  const createContent = () => {
    return isActive &&
      <React.Fragment>

        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{
            width: "100%",
            height: "50%"
          }}
        />
        {scanned && (
        <Button title={"Tap to Scan Again"} onPress={() => resetSession()} />
      )}
        {bookInfo &&
          <View>
            <Text>本のタイトル: {bookInfo.title}</Text>
            <Image
              source={{ uri: bookInfo.largeImageUrl }}
              style={{ width: 200, height: 200 }}
            />
          </View>
        }
      </React.Fragment>

  }

  return (
    <GenericTemplate
      content={createContent()}
      title=""
      navigation={navigation}
      route={route}
    />
  )
}
export default BarcodeScanner