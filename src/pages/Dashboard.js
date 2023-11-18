import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Dashboard = () => {
  return (
    <View style={styles.Container}>
     <View style={styles.Circle}>
        <Image
          source={require("../assets/images/ellipse.png")}
          style={styles.image}
        />
      </View>
      <View>
        <Image
          source={require("../assets/images/LogoSmall.png")}
          style={styles.smallLogoImage}
        />
      </View>
      <View style={styles.newPwd}>
        <Image
          source={require("../assets/images/ellipseD.png")}
          style={styles.imageD}
        />
      </View>
      <View style={styles.rectangle}></View>
    </View>
  )
}

export default Dashboard

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#F6F6F6",
    bottom: 0,
    width: 380,
    height: 725,
  },
  Circle: {
    left: -20,
    top: -9,
    position: "absolute",
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  smallLogoImage: {
    position:'absolute',
    width: 100,
    height: 50,
    resizeMode: "contain",
    bottom:270,
    left:70,
  },
  newPwd: {
    flex:1,
    position:'absolute',
    width: 100,
    height: 50,
    resizeMode: "contain",
    top:120,
    left:90,
  },
  imageD:{
    flex:1,
    position:'absolute',
    top:520,
    left:50,
  },
  rectangle: {
    width: 200,
    height: 100,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    margin: 20,
    padding: 10,
  },
})