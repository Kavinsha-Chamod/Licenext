import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../components/customButton";
import CustomTextField from "../components/customTextField";
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { firstregister } from '../api/apis';
import { useRoute } from "@react-navigation/native";

const FirstLoginPage = () => {
  const route = useRoute();
  const Navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const username = route.params?.usernamex;
  const cpassword = route.params?.currentpasswordx;

  const handleLogin = () => {
    const lastNineChars = password.slice(-9);
    if(cpassword !== currentPassword)
    {
      //--Kavinsha
      console.log("current password is not correct");
    }
    else if( password !== confirmPassword)
    {
      //--kavinsha
      console.log("passwords are not matching");
    }
    else if(lastNineChars === "@slpolice")
    {
      //--kavinsha
      console.log("please change last 9 charcters in password this password is not compatibal with system");
    }
    else if(cpassword === currentPassword && password === confirmPassword && lastNineChars !== "@slpolice")
      {
    Navigation.navigate("dashboard",{usernamey:username});
    firstregister(username,password,email);
    console.log("username", username);
    console.log("Email:", email);
    console.log("CurrentPassword:", currentPassword);
    console.log("Password:", password);
    console.log("you have successfully updated your account");
      }
      else
      {
        console.log("Unknown error occured");
      }
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
          onChangeText={(text) => setEmail(text)}
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
          onChangeText={(text) => setCurrentPassword(text)}
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
          onChangeText={(text) => setconfirmPassword(text)}
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