import { useFonts } from "expo-font";
import React from "react";
import AppNavigator from "./src/routing";

export default function App() {
  const [loaded] = useFonts({
    Poppins: require("./src/assets/fonts/Poppins-Regular.ttf"),
    Montserrat: require("./src/assets/fonts/Montserrat-VariableFont_wght.ttf"),
  });
//sha
  if (!loaded) {
    return null;
  }
  return (
    <>
      <AppNavigator />
    </>
  );
}
