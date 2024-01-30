import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import moment from "moment";

const Dashboard = () => {
  const Navigation = useNavigation();
  const route = useRoute();
  const officerID = route.params?.usernamey;
  const handleLicense = () => {
    Navigation.navigate("fingerprint", { pid: officerID });
  };
  //-----------------------------------------

  const [currentTime, setCurrentTime] = useState(moment().format("HH:mm"));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(moment().format("HH:mm"));
    }, 1000); // Update every second

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  //------------------------------------------
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
      <View style={styles.rectangle}>
        <Text style={styles.time}>{currentTime}</Text>
        <Text style={styles.officerID}>
          Officer ID {"\n"} {officerID}
        </Text>
      </View>
      <View style={styles.line}></View>
      <View>
        <TouchableOpacity onPress={handleLicense}>
          <View style={styles.licenceBox}>
            <Image
              source={require("../assets/images/CDL.png")}
              style={styles.CDL}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Dashboard;

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
    position: "absolute",
    width: 100,
    height: 50,
    resizeMode: "contain",
    bottom: 120,
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
  rectangle: {
    width: 310,
    height: 100,
    backgroundColor: "#fff",
    borderRadius: 35,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    margin: 20,
    padding: 10,
    bottom: 130,
  },
  line: {
    width: 380,
    height: 5,
    backgroundColor: "#192655",
    bottom: 120,
  },
  licenceBox: {
    width: 310,
    height: 180,
    backgroundColor: "#fff",
    borderRadius: 35,
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    margin: 20,
    padding: 10,
    bottom: 100,
  },
  text: {
    textAlign: "center",
    fontFamily: "Poppins",
    fontWeight: "bold",
    fontSize: 24,
  },
  CDL: {
    width: 290,
    height: 60,
    resizeMode: "contain",
  },
  time: {
    fontSize: 42,
    fontWeight: "bold",
    left: 170,
    top: 15,
    color: "black",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  officerID: {
    fontSize: 16,
    fontWeight: "bold",
    left: 10,
    bottom: 28,
  },
});
