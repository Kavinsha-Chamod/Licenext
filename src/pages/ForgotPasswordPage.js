import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../components/customButton";

const ForgotPasswordPage = () => {
  const Navigation = useNavigation();
  const [email, setEmail] = useState("");
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
      <View style={styles.Pwd}>
        <Image
          source={require("../assets/images/forgotPassword.png")}
          style={styles.logo}
        />
      </View>
      <View style={styles.newPwd}>
        <Image
          source={require("../assets/images/ellipseD.png")}
          style={styles.imageD}
        />
      </View>
      <View style={styles.message}>
        <Text style={styles.text}>
          The recovery code was sent to your mail {"\n"}
          {email} {"\n"}
          Please enter the code:
        </Text>
      </View>
      <View style={styles.CodeNum}>
        <View style={styles.rectangle}></View>
        <View style={styles.rectangle}></View>
        <View style={styles.rectangle}></View>
        <View style={styles.rectangle}></View>
        <TextInput style={styles.rectangle}/>
      </View>
      <View>
      <Text style={styles.text1}>
          If you didn't receive a code, <TouchableOpacity><Text style={styles.text2}>Resend</Text></TouchableOpacity>
        </Text>
      </View>
      <View style={styles.btnContainer}>
        <CustomButton buttonText={"Verify"} buttonFunction={""} />
      </View>
    </View>
  );
};

export default ForgotPasswordPage;

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
  smallLogoImage: {
    position: "absolute",
    width: 100,
    height: 50,
    resizeMode: "contain",
    top: -240,
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
    top: 150,
    left: 90,
  },
  newPwd: {
    flex: 1,
    position: "absolute",
    width: 100,
    height: 60,
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
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  message: {
    top: 1,
  },
  text: {
    fontFamily: "Poppins",
    fontWeight: "bold",
    fontSize: 16,
  },
  rectangle: {
    width: 60,
    height: 60,
    justifyContent:'center',
    backgroundColor: "#fff",
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
    margin: 5,
    padding: 10,
  },
  CodeNum: {
    flexDirection: 'row',
    top:30,
  },
  text1: {
    fontFamily: "Poppins",
    fontSize: 14,
    color:"#0C4271",
    top:40

  },
  text2:{
    fontFamily: "Poppins",
    fontSize: 14,
    color:"#3876BF",
    top:2
  },
  btnContainer: {
    top: 70,
  },
});

