import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { driverHistory } from '../api/apis' //me
import { useRoute } from '@react-navigation/native'

const StatusHistoryPage = () => {

const route= useRoute(); //me
const nicy= route.params?.nicx;
const [data, setdata]=useState([])
console.log(nicy);
const [loading, setLoading] = useState(true);

useEffect(() => {
  const retrieve = async (nic) => {
    try {
      const datax = await driverHistory(nic);
      console.log(datax);
      setdata(datax);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };
  retrieve(nicy);
}, []);


console.log("ssssssss" + data);

  return (
    <View style={styles.Container}>

<View>
        {Array.isArray(data) && data.length > 0 ? (
          data.map((item) => (
            <View key={item._id}>
              <Text>{item.pid}</Text>
              <Text>{item.comment}</Text>
              <Text>{item.date}</Text>
              <Text>{item.location}</Text>
            </View>
          ))
        ) : (
          <Text>No data available</Text>
        )}
      </View>
      
      <View>
        <Image
          source={require("../assets/images/LogoSmall.png")}
          style={styles.smallLogoImage}
        />
      </View>
      <View style={styles.Pwd}>
        <Image
          source={require("../assets/images/statusHistory.png")}
          style={styles.logo}
        />
      </View>
      <View style={styles.dateTimeContainer}>
        <Text style={styles.dateTime}>
          DATE {"\n"}
          TIME A.M/P.M
        </Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.reason}>REASON {"\n"}
        <Text style={styles.officerId}>Officer Id - {"\n"}
        Location -</Text>
        </Text>
      </View>
      <View style={styles.newPwd}>
        <Image
          source={require("../assets/images/ellipseD.png")}
          style={styles.imageD}
        />
      </View>
      <View style={styles.line}></View>
    </View>
  );
};

export default StatusHistoryPage

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F6F6F6",
  },
  smallLogoImage: {
    position: "absolute",
    width: 100,
    height: 50,
    resizeMode: "contain",
    bottom: 210,
    left: 70,
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  Pwd: {
    position: "absolute",
    resizeMode: "contain",
    top: 70,
    left: 90,
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
  dateTimeContainer: {
    bottom:85,
    right:120
  },
  dateTime: {
  fontWeight:"bold",
  fontSize:12,
  },
  line: {
    width: 3,
    height: 80,
    backgroundColor: "#192655",
    bottom: 170,
    right:55
  },
  details: {
    bottom:105,
  },
  reason: {
    fontWeight:"bold"
  },
  officerId: {
    fontWeight:"normal"
  }
})