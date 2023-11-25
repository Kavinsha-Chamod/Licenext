import React from 'react';
import { View,StyleSheet,Text } from 'react-native';
import QRScanner from './QRScanner'; // Adjust the path accordingly

const Cam = () => {
  const handleScanned = ({ type, data }) => {
    console.log(`Scanned QR code of type ${type} with data: ${data}`);
    // Handle the scanned data as needed
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
    height:350,
    left:40,
    top:150,
    backgroundColor:"#F6F6F6",
  },
  text: {
    fontFamily: "Poppins",
    fontWeight: "bold",
    fontSize: 20,
    top:120,
    left:160,
  },
});
