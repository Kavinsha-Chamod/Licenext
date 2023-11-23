import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import CustomSmallButton from '../components/customSmallButton'
import { useRoute } from "@react-navigation/native";

const ELicensePage = () => 
{
  const route = useRoute();
  const url = route.params?.urlx;
  console.log()
  return (
    <View style={styles.container}>
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
      <View style={styles.licenseName}>
        <Image
          source={require("../assets/images/elicenseName.png")}
          style={styles.logo}
        />
      </View>
      <View style={styles.licenseFront}>
      <Image
        source={{ uri: url }}
        style={styles.license}
      />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Status -</Text>
      </View>
      <View style={styles.btn}>
        <CustomSmallButton style={styles.btnCheck} buttonText={"Block Card"}/>
        <CustomSmallButton buttonText={"Unblock Card"}/>
      </View>
    </View>
  )
}

export default ELicensePage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#F6F6F6",
    bottom: 0,
    width: 380,
    height: 725,
  },
  smallLogoImage: {
    position: "absolute",
    width: 100,
    height: 50,
    resizeMode: "contain",
    bottom: 250,
    left: 70,
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
  licenseName:{
    position: "absolute",
    resizeMode: "contain",
    top: 10,
    left: 65,
  },
  licenseFront: {
    position: "absolute",
    resizeMode: "contain",
    top: 160,
    
  },
  logo: {
    width: 250,
    height: 250,
    resizeMode: "contain",
  },
  license:{
    width: 450,
    height: 450,
    resizeMode: "contain",
  },
  textContainer: {
    top: 250,
    right:120,
  },
  text: {
    fontFamily: "Poppins",
    fontWeight: "bold",
    fontSize: 20,
  },
  btn:{
    flexDirection: "row",
    alignItems:"center",
    top:260,
  },
})