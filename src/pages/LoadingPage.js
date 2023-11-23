import { StyleSheet, Text, View, ActivityIndicator, Image } from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
//sha
const LoadingPage = () => {
  const Navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const asyncOperation = async () => {
      await new Promise((reslove) => setTimeout(reslove, 3000));
      setIsLoading(false); 
      Navigation.navigate("login");
    };
    asyncOperation();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Image
          source={require("../assets/images/ellipse.png")}
          style={styles.image}
        />
      </View>
      <View style={styles.container1}>
        <Image
          source={require("../assets/images/LogoWel.png")}
          style={styles.image}
        />
      </View>

      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#3876BF" />
          <Text style={styles.loadingText}>Loading...</Text>
        </View>
      ) : (
        <View style={styles.contentContainer}>
          {/* Your main content goes here */}
        </View>
      )}
    </View>
  );
};

export default LoadingPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F6F6F6",
  },
  container1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 230,
  },
  container2: {
    left: -20,
    top: -9,
    position: "absolute",
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  loadingContainer: {
    justifyContent: "center",
    alignItems: "center",
    top: 100,
  },
  loadingText: {
    marginTop: 10,
    color: "#192655",
    fontFamily: "Poppins",
  },
});
