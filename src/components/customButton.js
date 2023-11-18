import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const CustomButton = ({ buttonText, buttonFunction }) => {
  return (
    <View>
      <Pressable onPress={buttonFunction}>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonTextStyle}>{buttonText}</Text>
        </View>
      </Pressable>
    </View>
  );
};
export default CustomButton;

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: "center",
    height: 50,
    borderRadius: 30,
    alignItems: "center",
    backgroundColor: "#3876BF",
    width: 255,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 5,
  },
  buttonTextStyle: {
    fontFamily: "Poppins",
    color: "white",
    fontSize: 20,
  },
});
