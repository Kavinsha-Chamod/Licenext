import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import { useNavigation } from "@react-navigation/native";
import CustomTextField from "../components/customTextField";
import CustomButton from "../components/customButton";
import CustomSmallButton from "../components/customSmallButton";
import { checkdriver } from "../api/apis";
import { useRoute } from "@react-navigation/native";

const FingerprintPage = () => {
  const Navigation = useNavigation();
  const route = useRoute();
  const officerID = route.params?.pid;
  const [isModalVisible, setModalVisible] = useState(false);
  const [nic, setNic] = useState("");
  const [isErrorModalVisible, setIsErrorModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const camera = () => {
    Navigation.navigate("open",{pid:officerID});
  };

  const closeErrorModal = () => {
    setIsErrorModalVisible(false);
  };

  const verifyNIC = async () => {
    var url = await checkdriver(nic);
    if (url === "user not existing in system") {
      setIsErrorModalVisible(true);
      console.log(url);
    } else {
      Navigation.navigate("e-license", { urlx: url,pid: officerID });
      console.log("Checking NIC details:", nic);
      toggleModal();
    }
  };

  const renderModalContent = () => (
    <View style={styles.modalContainer}>
      <View style={styles.modaltext}>
        <Text style={styles.modaltext1}>
          Check using NIC and Unlock{"\n"}E -
          <Text style={styles.modaltext2}>Driving License</Text> Information
        </Text>
      </View>
      <View style={styles.textField}>
        <CustomTextField
          placeholder={"Enter NIC Number"}
          value={nic}
          onChangeText={(text) => setNic(text)}
        />
      </View>
      <View style={styles.btnCheck}>
        <CustomButton buttonText={"Check"} buttonFunction={verifyNIC} />
      </View>
      <View>
        <Modal isVisible={isErrorModalVisible}>
          <View style={styles.alertContainer}>
            <Text style={styles.errorMsg}>
              {"\n"}           ERROR !{"\n"}
              <Text style={styles.errormsg}>Invalid NIC Number</Text>
            </Text>
            <View style={styles.msgOK}>
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
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Scan using QR Code and Unlock {"\n"}E -
          <Text style={styles.text1}>Driving License</Text> Information
        </Text>
      </View>
      <View>
        <TouchableOpacity onPress={camera}>
          <Image
            source={require("../assets/images/qrIcon.png")}
            style={styles.image}
          />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={toggleModal}>
          <Text style={styles.text2}>Attempts Left - 05</Text>
        </TouchableOpacity>
      </View>
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={toggleModal}
        onBackButtonPress={toggleModal}
      >
        {renderModalContent()}
      </Modal>
    </View>
  );
};

export default FingerprintPage;

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
  newPwd: {
    flex: 1,
    position: "absolute",
    width: 100,
    height: 50,
    resizeMode: "contain",
    top: 125,
    left: 100,
  },
  imageD: {
    flex: 1,
    position: "absolute",
    top: 520,
    left: 50,
  },
  smallLogoImage: {
    position: "absolute",
    width: 100,
    height: 50,
    resizeMode: "contain",
    bottom: 180,
    left: 70,
  },
  text: {
    fontFamily: "Poppins",
    fontSize: 16,
  },
  text1: {
    fontFamily: "Poppins",
    fontSize: 16,
    color: "#0C4271",
  },
  modaltext1: {
    fontFamily: "Poppins",
    fontSize: 22,
  },
  image: {
    height: 150,
    width: 150,
    bottom: 40,
  },
  text2: {
    fontFamily: "Poppins",
    right: 65,
    color: "#0C4271",
  },
  modaltext2: {
    fontFamily: "Poppins",
    fontSize: 22,
    color: "#0C4271",
  },
  textContainer: {
    bottom: 100,
  },
  modalContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F6F6F6",
    borderRadius: 60,
    height: 450,
    top: 300,
    width: 380,
    right: 20,
  },
  modalInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    margin: 10,
    padding: 5,
  },
  modalButton: {
    margin: 10,
    padding: 10,
    backgroundColor: "#0C4271",
    borderRadius: 5,
    alignItems: "center",
  },
  modaltext: {
    bottom: 100,
  },
  textField: {
    bottom: 60,
  },
  btnCheck: {
    bottom: 35,
  },
  alertContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D9D9D9",
    height: 160,
    borderRadius: 40,
  },
  errorMsg: {
    fontFamily: "Poppins",
    alignItems: "center",
    fontSize: 18,
    bottom: 13,
    color: "red",
  },
  msgOK: {
    bottom: 5,
  },
  errormsg: {
    color: "black",
  },
});
