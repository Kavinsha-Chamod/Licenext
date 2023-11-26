import React from "react";
import { View, StyleSheet, Text } from "react-native";
import QRScanner from "./QRScanner";
import { useNavigation } from "@react-navigation/native";
import { checkdriver } from "../api/apis";
import { useRoute } from "@react-navigation/native";

const Cam = () => {
  const Navigation = useNavigation();
  const route = useRoute();
  const officerID = route.params?.pid;
  const handleScanned = async ({ type, data }) => {
    console.log(`Scanned QR code of type ${type} with data: ${data}`);
    var url = await checkdriver(data);
    Navigation.navigate("e-license", { urlx: url, pid: officerID });
  };

  return (
    <View>
      <View>
        <Text style={styles.text}>SCAN</Text>
      </View>
      <View style={styles.container}>
        <QRScanner style={styles.container} onScanned={handleScanned} />
      </View>
    </View>
  );
};

export default Cam;
const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 350,
    left: 40,
    top: 150,
    backgroundColor: "#F6F6F6",
  },
  text: {
    fontFamily: "Poppins",
    fontWeight: "bold",
    fontSize: 20,
    top: 120,
    left: 160,
  },
});
