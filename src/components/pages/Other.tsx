import { RouteProp } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import { StatusBar } from "expo-status-bar"
import React from "react"
import { StyleSheet, Button, Text, View } from "react-native"
import { OtherStackParamList } from "../../routers/OtherStacks"
import GenericTemplate from "../templates/GenericTemplate"

export type OtherScreenRouteProp = RouteProp<OtherStackParamList, "Other">

export type OtherScreenNavigationProp = StackNavigationProp<
  OtherStackParamList,
  "Other"
>

type Props = {
  route: OtherScreenRouteProp
  navigation: OtherScreenNavigationProp
}

const OtherScreen: React.VFC<Props> = ({ navigation, route }) => {

  const createContent = () => {
    return (
      <View style={styles.container}>
        <Text>Hello World!</Text>
        <Button
          title="Go to Setting"
          onPress={() => console.log("各設定項目へ移動するよ")}
        />
        <StatusBar style="auto" />
      </View>
    )
  }

  return (
    <GenericTemplate
      content={createContent()}
      title="その他"
      navigation={navigation}
      route={route}
    />
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