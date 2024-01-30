import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import CustomTextField from "../components/customTextField";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { CheckBox } from "react-native-elements";
import CustomButton from "../components/customButton";
import CustomSmallButton from "../components/customSmallButton";
import { login,mailing } from "../api/apis";
import Modal from "react-native-modal";

const LoginPage = () => {
  const Navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isErrorModalVisible, setIsErrorModalVisible] = useState(false);

  const handleLogin = async () => {
    const lastNineChars = password.slice(-9);
    var answer = await login(username, password);
     
    if (answer === "go to home" && lastNineChars === "@slpolice") {
      Navigation.navigate("firstLogin", {
        usernamex: username,
        currentpasswordx: password,
      });
    } else if (answer === "go to home" && lastNineChars !== "@slpolice") {
      Navigation.navigate("dashboard", { usernamey: username });
    } else if (
      answer === "wrong password" ||
      answer === "user name cannot be found"
    ) {
      setIsErrorModalVisible(true);
      console.log("login failed");
    }
    const passedVariable = {
      Username: username,
      Password: password,
    };

    console.log("Username:", username);
    console.log("Password:", password);
    console.log("Remember Me:", rememberMe);
  };

  const handleRememberMeToggle = () => {
    setRememberMe(!rememberMe);
  };

  const handleResetPassword = async () => {
    const OTP= await mailing(username);
    Navigation.navigate("forgotPassword",{usernamex: username,OTPx : OTP});
  };
  const closeErrorModal = () => {
    setIsErrorModalVisible(false);
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
      <View>
        <Modal isVisible={isErrorModalVisible}>
          <View style={styles.alertContainer}>
            <Text style={styles.errorMsg}>
              {"\n"}                      ERROR !{"\n"}
              <Text style={styles.errormsg}>Invalid username or password</Text>
            </Text><View style={styles.msgOK}>
            <CustomSmallButton
              buttonText={"Ok"}
              buttonFunction={closeErrorModal}
            />
            </View>
          </View>
        </Modal>
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
  alertContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D9D9D9",
    height:160,
    borderRadius:40,
  },
  errorMsg: {
    fontFamily: "Poppins",
    alignItems: "center",
    fontSize:18,
    bottom:13,
    color:"red"
  },
  msgOK: {
    bottom:5,
  },
  errormsg: {
color:"black"
  }
});