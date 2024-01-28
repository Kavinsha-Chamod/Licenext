import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import CustomSmallButton from '../components/customSmallButton'
import CustomCancelButton from '../components/customCancelButton';
import { useNavigation, useRoute } from "@react-navigation/native";
import Modal from "react-native-modal";
import { deleteComments,changeValidity} from '../api/apis';

const ELicensePage = () => 
{ const Navigation= useNavigation();
  const route = useRoute();
  const url = route.params?.urlx;
  const val = route.params?.validity; 
  const officerID = route.params?.pid;
  const [validity, setvalidity]=useState("");
  console.log(url.image); 
  console.log(url);
  const [isModalVisible, setModalVisible] = useState(false);
  const [isModalVisible1, setModalVisible1] = useState(false);
  const [isButtonDisabled, setisButtonDisabled]= useState(false);
  const convertion = () => {
    
    useEffect(()=>{
      setvalidity(val);
    },[val]);


if(url.validity === "true")
{
  useEffect(
    ()=>
    {setvalidity("Unblocked");},
    []); 
}
else if(url.validity === "false")
{
  useEffect(
   ()=>
   {setvalidity("Blocked");},
   []);
}
  }
// useEffect(()=>{

   convertion();

// },[]);
const UnlockLicense = () =>
{
 
  deleteComments(url.nic);
  changeValidity(url.nic,"true");
  setvalidity("Unblocked");
  handleBlkCancel(false);

//  convertion();
}


const blkCard = () =>{
  Navigation.navigate("reason",{pid:officerID,nic:url.nic,image:url.image})
  toggleModal(false);
};

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const toggleModal1 = () => {
    setModalVisible1(!isModalVisible1);
  };

  const verifyButton = async () => {
    toggleModal();
  }
  const UnblockButton = async () => {
    toggleModal1();
  }

  const handleCancel = () => {
    setModalVisible(!isModalVisible);
  };
  const handleBlkCancel = () => {
    setModalVisible1(!isModalVisible1);
  };

  const statusHistory = () => {
    Navigation.navigate("historyPage",{nicx:url.nic});
  }


  const renderModalContent = () => (
    <View style={styles.modalContainer}>
      <View>
        <Text style={styles.modaltext1}>
          Are you sure you want <Text style={styles.blkColor}>BLOCK</Text>
          {"\n"}                 the card ?
        </Text>
      </View>
      <View style={styles.btnblk}>
        <CustomSmallButton buttonText={"Block Card"} buttonFunction={blkCard}/>
        <CustomCancelButton buttonText={"Cancel"} buttonFunction={handleCancel}/>
      </View>
    </View>
  );

  const renderCancelModalContent = () => (
    <View style={styles.modalContainer}>
      <View>
        <Text style={styles.modaltext1}>
          Are you sure you want <Text style={styles.unblkColor}>UNBLOCK</Text>
          {"\n"}                    the card ?
        </Text>
      </View>
      <View style={styles.btnblk}>
        <CustomSmallButton buttonText={"Unblock Card"} buttonFunction={UnlockLicense}/>
        <CustomCancelButton buttonText={"Cancel"} buttonFunction={handleBlkCancel}/>
      </View>
    </View>
  );
 
  return (
    <View style={styles.container}>
     <View>
        <Image
          source={require("../assets/images/LogoSmall.png")}
          style={styles.smallLogoImage}
        />
      </View>
      <View style={styles.newPwd}>
        <Image
          source={require("../assets/images/ellipseD.png")}
          style={styles.imageD}
        />
      </View>
      <View style={styles.licenseName}>
        <Image
          source={require("../assets/images/elicenseName.png")}
          style={styles.logo}
        />
      </View>
      <View style={styles.licenseFront}>
      <Image
        source={{ uri: url.image }}
        style={styles.license}
      />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Status -{validity}</Text>
      </View>
      <View style={styles.btn}>
        <CustomSmallButton style={styles.btnCheck} buttonText={"Block Card"} buttonFunction={verifyButton} onPress={toggleModal}/>
        <Modal
        isVisible={isModalVisible}
        onBackdropPress={toggleModal}
        onBackButtonPress={toggleModal}
      >
        {renderModalContent()}
      </Modal>
      <View>
      <CustomSmallButton disabled={isButtonDisabled} buttonText={"Unblock Card"} buttonFunction={UnblockButton} onPress={toggleModal}/>
      <Modal
        isVisible={isModalVisible1}
        onBackdropPress={toggleModal1}
        onBackButtonPress={toggleModal1}
      >
        {renderCancelModalContent()}
      </Modal>
      </View>
      </View>
      <View style={styles.statusHistory}>
        <TouchableOpacity onPress={statusHistory}>
        <Text style={styles.statusHistoryTxt}>Check Status History</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ELicensePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#F6F6F6",
    bottom: 0,
    width: 380,
    height: 725,
  },
  smallLogoImage: {
    position: "absolute",
    width: 100,
    height: 50,
    resizeMode: "contain",
    bottom: 250,
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
  licenseName:{
    position: "absolute",
    resizeMode: "contain",
    top: 10,
    left: 65,
  },
  licenseFront: {
    position: "absolute",
    resizeMode: "contain",
    top: 160,
    
  },
  logo: {
    width: 250,
    height: 250,
    resizeMode: "contain",
  },
  license:{
    width: 450,
    height: 450,
    resizeMode: "contain",
  },
  textContainer: {
    top: 255,
    right:72,
  },
  text: {
    fontFamily: "Poppins",
    fontWeight: "bold",
    fontSize: 20,
  },
  btn:{
    flexDirection: "row",
    alignItems:"center",
    top:290,
  },
  modaltext1: {
    fontFamily: "Poppins",
    fontSize: 22,
    bottom:120,
  },
  modalContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F6F6F6",
    borderRadius: 60,
    height: 450,
    top: 400,
    width: 380,
    right: 20,
  },
  btnblk:{
    bottom:100,
    flexDirection: "row",
  },
  blkColor:{
    color:"#1AB700"
  },
  unblkColor: {
    color:"red",
  },
  statusHistory: {
   top:190,
   right:93
  },
  statusHistoryTxt: {
    fontFamily:"Poppins",
   color:"#0C4271",
  },
})
