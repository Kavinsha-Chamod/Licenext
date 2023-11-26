import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
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
      <View style={styles.newPwd}>
        <Image
          source={require("../assets/images/ellipseD.png")}
          style={styles.imageD}
        />
      </View>
      <View style={styles.container}>
    <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContainer}>
        {Array.isArray(data) && data.length > 0 ? (
          data.map((item) => (
            <View style={styles.details} key={item._id}>
              <Text style={styles.reason}>{item.comment}</Text>
              <Text style={styles.officerId}>Officer Id - {item.pid}</Text>
              <Text style={styles.officerId}>Location - {item.location}</Text>
              <Text style={styles.officerId}>Date and Time - {item.date}</Text>
            </View>
          ))
        ) : (
          <Text>No data available</Text>
        )}
      </ScrollView>
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
  container: {
    top:50,
  },
  scrollView: {
    height: 200,
  },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  smallLogoImage: {
    position: "absolute",
    width: 100,
    height: 50,
    resizeMode: "contain",
    bottom:670,
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
  details: {
    bottom:105,
  },
  reason: {
    fontWeight:"bold",
    fontSize:18,
    marginTop:15,
  },
  officerId: {
    fontWeight:"normal",
    fontSize:16,
    marginTop: 2,
  }
})