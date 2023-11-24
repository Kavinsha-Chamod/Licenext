import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const StatusHistoryPage = () => {
  return (
    <View style={styles.Container}>
      <View>
        <Image
          source={require("../assets/images/LogoSmall.png")}
          style={styles.smallLogoImage}
        />
      </View>
      <View style={styles.Pwd}>
        <Image
          source={require("../assets/images/statusHistory.png")}
          style={styles.logo}
        />
      </View>
    </View>
  )
}

export default StatusHistoryPage

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F6F6F6",
  },
  smallLogoImage: {
    position: "absolute",
    width: 100,
    height: 50,
    resizeMode: "contain",
    bottom: 270,
    left: 70,
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  Pwd: {
    position: "absolute",
    resizeMode: "contain",
    top: 70,
    left: 90,
  },
})