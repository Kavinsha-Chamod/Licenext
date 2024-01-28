import { StyleSheet, Text, View, Image,TextInput } from "react-native";
import React,{useEffect, useState} from "react";
import CustomTextField from "../components/customTextField";
import CustomSmallButton from "../components/customSmallButton";
import { useNavigation, useRoute } from "@react-navigation/native";
import { addcomment,changeValidity } from "../api/apis";
import route from "color-convert/route";
import { checkdriver } from "../api/apis"
const ReasonPage = () => {
  const [inputValue, setInputValue] = useState('');
  const [Location, setLocation] = useState('');
  const route = useRoute();
  const officerID = route.params?.pid;
  const nic=route.params?.nic;
  const image=route.params?.image;
  const Navigation = useNavigation();
  //setInputValue(officerID+" , "+nic);
//  useEffect(()=>{
//   setInputValue(officerID+" , "+nic);
//  },[]);
 const handleSave = async()=>
 {
   const commentstatus = addcomment(officerID,nic,inputValue,Location);
   const validitystatus = changeValidity(nic,"false");
   const url=
   {nic:nic,
    validity:"false",
    image:image
   }
   if(commentstatus !== "" && validitystatus !== "")
   {
      console.log("reason added successfully");
      changeValidity(url.nic,"false");
      Navigation.navigate("e-license",{urlx: url, pid: officerID,validity:false});
   }
   else
   {
      console.log("somthing went wrong");
   }
 }

  return (
    <View style={styles.Container}>
      <View>
        <Image
          source={require("../assets/images/LogoSmall.png")}
          style={styles.smallLogoImage}
        />
      </View>
      <View style={styles.Pwd}>
        <Image
          source={require("../assets/images/reason.png")}
          style={styles.logo}
        />
      </View>
      <View style={styles.newPwd}>
        <Image
          source={require("../assets/images/ellipseD.png")}
          style={styles.imageD}
        />
      </View>
      <View>
        <CustomTextField
        placeholder={"Enter the Reason"}
        value={inputValue}
        onChangeText={(text) => setInputValue(text)}
        height={200}
        />
      </View>
      <View>
        <CustomTextField
        placeholder={"Enter the Location"}
        value={Location}
        onChangeText={(text) => setLocation(text)}
        />
      </View>
      <View style={styles.btn}>
        <CustomSmallButton style={styles.btnSave} buttonText={"Save"} buttonFunction={handleSave}/>
      </View>
    </View>
  );
};

export default ReasonPage;

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
  logo: {
    width: 130,
    height: 130,
    resizeMode: "contain",
  },
  Pwd: {
    position: "absolute",
    resizeMode: "contain",
    top: 100,
    left: 120,
  },
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
  container: {
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  btn:{
    flexDirection: "row",
    alignItems:"center",
    top:10,
    left:80,
  },
});
