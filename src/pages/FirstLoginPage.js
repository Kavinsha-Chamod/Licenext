import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../components/customButton";
import CustomTextField from "../components/customTextField";
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

const FirstLoginPage = () => {
  const Navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
//sha
  const handleLogin = () => {
    Navigation.navigate("dashboard");

    console.log("Email:", email);
    console.log("CurrentPassword:", currentPassword);
    console.log("Password:", password);
  };
  return (
    <View style={styles.container}>
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
          source={require("../assets/images/newPwd.png")}
          style={styles.image}
        />
      </View>
      <View style={styles.newPwd}>
        <Image
          source={require("../assets/images/ellipseD.png")}
          style={styles.imageD}
        />
      </View>
      <View style={styles.EmailContainer}>
        <CustomTextField
          placeholder={"Enter your mail address"}
          value={email}
          onChangeText={(text) => setUsername(text)}
        />
        <Image
          style={styles.Image}
          source={require("../assets/images/mail.png")}
        />
      </View>
      <View style={styles.EmailContainer}>
        <CustomTextField
          placeholder={"Enter Current password"}
          value={currentPassword}
          onChangeText={(text) => setpassword(text)}
          secureTextEntry
        />
        <Image
          style={styles.Image}
          source={require("../assets/images/pwd.png")}
        />
      </View>
      <View style={styles.EmailContainer}>
        <CustomTextField
          placeholder={"Enter New password"}
          value={password}
          onChangeText={(text) => setpassword(text)}
          secureTextEntry
        />
        <Image
          style={styles.Image}
          source={require("../assets/images/pwd.png")}
        />
      </View>
      <View style={styles.EmailContainer}>
        <CustomTextField
          placeholder={"Confirm password"}
          value={confirmPassword}
          onChangeText={(text) => setpassword(text)}
          secureTextEntry
        />
        <Image
          style={styles.Image}
          source={require("../assets/images/pwd.png")}
        />
      </View>
      <View style={styles.btnContainer}>
      <CustomButton buttonText={"Login"} buttonFunction={handleLogin}/>
      </View>
    </View>
  )
}

export default FirstLoginPage

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
    bottom:120,
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
  EmailContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    top: 30,
    padding:1
  },
  Image: {
    width: widthPercentageToDP(7),
    height: heightPercentageToDP(3),
    marginTop: heightPercentageToDP(2),
    marginLeft: widthPercentageToDP(4),
    position: "absolute",
    bottom: 25,
    right: 20,
  },
  btnContainer: {
    top: 50,
  },
})