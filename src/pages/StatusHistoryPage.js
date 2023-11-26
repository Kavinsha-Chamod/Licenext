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
      <View style={styles.dateTimeContainer}>
        <Text style={styles.dateTime}>
          DATE {"\n"}
          TIME A.M/P.M
        </Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.reason}>REASON {"\n"}
        <Text style={styles.officerId}>Officer Id - {"\n"}
        Location -</Text>
        </Text>
      </View>
      <View style={styles.newPwd}>
        <Image
          source={require("../assets/images/ellipseD.png")}
          style={styles.imageD}
        />
      </View>
      <View style={styles.line}></View>
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
    bottom: 210,
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
  newPwd: {
    flex: 1,
    position: "absolute",
    width: 100,
    height: 50,
    resizeMode: "contain",
    top: 120,
    left: 90,
  },
  imageD: {
    flex: 1,
    position: "absolute",
    top: 520,
    left: 50,
  },
  dateTimeContainer: {
    bottom:85,
    right:120
  },
  dateTime: {
  fontWeight:"bold",
  fontSize:12,
  },
  line: {
    width: 3,
    height: 80,
    backgroundColor: "#192655",
    bottom: 170,
    right:55
  },
  details: {
    bottom:105,
  },
  reason: {
    fontWeight:"bold"
  },
  officerId: {
    fontWeight:"normal"
  }
})