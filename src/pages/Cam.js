import React from 'react';
import { View,StyleSheet } from 'react-native';
import QRScanner from './QRScanner'; // Adjust the path accordingly

const Cam = () => {
  const handleScanned = ({ type, data }) => {
    console.log(`Scanned QR code of type ${type} with data: ${data}`);
    // Handle the scanned data as needed
  };

  return (
    <View style={styles.container}>
      <QRScanner style={styles.container} onScanned={handleScanned} />
    </View>
  );
};

export default Cam;
const styles = StyleSheet.create({
  container: {
    flex:1,
    width: 80,
    height: 75,
  },
});
