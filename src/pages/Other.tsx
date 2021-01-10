import { RouteProp } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import { StatusBar } from "expo-status-bar"
import React from "react"
import { StyleSheet, Button, Text, View } from "react-native"
import { OtherStackParamList } from "../routers/OtherStacks"

type OtherScreenRouteProp = RouteProp<OtherStackParamList, 'Other'>

type SearchScreenNavigationProp = StackNavigationProp<
  OtherStackParamList,
  'Other'
>

type Props = {
  route: OtherScreenRouteProp
  navigation: SearchScreenNavigationProp
}

const OtherScreen: React.VFC<Props> = () => {
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

export default OtherScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})