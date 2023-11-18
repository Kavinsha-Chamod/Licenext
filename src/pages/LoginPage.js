import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import CustomTextField from "../components/customTextField";
import {heightPercentageToDP,widthPercentageToDP} from "react-native-responsive-screen";
import { CheckBox } from "react-native-elements";
import CustomButton from "../components/customButton";

const LoginPage = () => {
  const Navigation = useNavigation();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    Navigation.navigate("firstLogin");

    console.log("Username:", username);
    console.log("Password:", password);
    console.log("Remember Me:", rememberMe);
  };

  const handleRememberMeToggle = () => {
    setRememberMe(!rememberMe);
  };

  const handleResetPassword = () => {
    Navigation.navigate("forgotPassword");
  };

  return (
    <View style={styles.Container}>
      <View style={styles.Circle}>
        <Image
          source={require("../assets/images/ellipse.png")}
          style={styles.logo}
        />
      </View>
      <View style={styles.headingContainer}>
        <Image
          source={require("../assets/images/LogoWel.png")}
          style={styles.image}
        />
      </View>
      <View style={styles.IdContainer}>
        <CustomTextField
          placeholder={"Enter your Id"}
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        <Image
          style={styles.IdImage}
          source={require("../assets/images/IdLogo.png")}
        />
      </View>
      <View style={styles.PasswordContainer}>
        <CustomTextField
          placeholder={"Enter password"}
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />
        <Image
          style={styles.PasswordImage}
          source={require("../assets/images/pwd.png")}
        />
      </View>
      <View>
        <CheckBox
          title="Remember Me"
          checked={rememberMe}
          onPress={handleRememberMeToggle}
          containerStyle={styles.rememberMeContainer}
          textStyle={styles.rememberMeText}
          checkedColor="#3876BF"
        />
      </View>
      <View>
        <TouchableOpacity
          onPress={handleResetPassword}
          style={styles.forgetpassword}
        >
          <Text style={styles.forgetpassword}>Forget Password</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.btnContainer}>
        <CustomButton buttonText={"Login"} buttonFunction={handleLogin} />
      </View>
    </View>
  );
};

export default LoginPage;

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
  logo: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  headingContainer: {
    bottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 220,
    height: 200,
    resizeMode: "contain",
  },
  IdContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    bottom: 25,
  },
  IdImage: {
    width: widthPercentageToDP(6),
    height: heightPercentageToDP(3),
    marginTop: heightPercentageToDP(2),
    marginLeft: widthPercentageToDP(4),
    position: "absolute",
    bottom: 22,
    right: 20,
  },
  PasswordContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    bottom: 25,
  },
  PasswordImage: {
    width: widthPercentageToDP(6),
    height: heightPercentageToDP(3),
    marginTop: heightPercentageToDP(2),
    marginLeft: widthPercentageToDP(4),
    position: "absolute",
    bottom: 22,
    right: 20,
  },
  rememberMeContainer: {
    backgroundColor: "transparent",
    borderWidth: widthPercentageToDP(0),
    marginLeft: widthPercentageToDP(0),
    marginRight: widthPercentageToDP(0),
    right: 80,
    bottom: 40,
  },
  rememberMeText: {
    fontFamily: "Poppins",
    fontSize: 14,
    fontWeight: "bold",
    color: "#192655",
  },
  forgetpassword: {
    fontFamily: "Poppins",
    color: "#192655",
    left: 45,
    bottom: 39,
  },
  btnContainer: {
    bottom: 40,
  },
});
