import React, { useState, useEffect, useRef } from "react";
import { View, TextInput, Text } from "react-native";
import StyleSheet from "react-native-media-query";
import * as Animatable from "react-native-animatable";

const CustomTextField = ({
  placeholder,
  height,
  textAlignVertical,
  editable,
  inlineStyle,
  onChangeText,
  onBlur,
  secureTextEntry,
  defaultValue,
  value,
  keyboardType,
  customTextFieldStyle,
}) => {
  const [text, setText] = useState("");

 

  const { styles } = StyleSheet.create({
    textField: {
      "@media (max-width: 1600px) and (min-width: 800px)": {
        width: 350,
        height: height ? height : 50,
        borderRadius: 20,
      },
      "@media (max-width: 799px)": {
        width: 330,
        height: height ? height : 50,
        borderRadius: 20,
      },
      paddingLeft: 25,
      paddingRight: 20,
      borderRadius: 2,
      marginBottom:10,
      fontFamily: "Poppins",
      backgroundColor: "#ffffff",
      fontSize: 16,
      color: "black",
      textAlignVertical: textAlignVertical ? textAlignVertical : "center",
    },
  });

  return (
    <View>
      <TextInput
        multiline={height ? true : false}
        placeholderTextColor={"#45461B"}
        keyboardType={keyboardType}
        value={value}
        defaultValue={defaultValue}
        secureTextEntry={secureTextEntry}
        onBlur={onBlur}
        onChangeText={onChangeText}
        style={[
          !customTextFieldStyle ? styles.textField : customTextFieldStyle,
          inlineStyle,
        ]}
        placeholder={placeholder}
        editable={editable}></TextInput>
    </View>
  );
};

export default CustomTextField