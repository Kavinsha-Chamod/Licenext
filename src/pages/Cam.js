import React from 'react';
import { View } from 'react-native';
import QRScanner from './QRScanner'; // Adjust the path accordingly

const Cam = () => {
  const handleScanned = ({ type, data }) => {
    console.log(`Scanned QR code of type ${type} with data: ${data}`);
    // Handle the scanned data as needed
  };

  return (
    <View style={{ flex: 1 }}>
      <QRScanner onScanned={handleScanned} />
      {/* Add other components or UI elements as needed */}
    </View>
  );
};

export default Cam;
