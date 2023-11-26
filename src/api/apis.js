import axios from 'axios';
//import { useNavigation } from "@react-navigation/native";
    const conStr="http://192.168.8.155:5000"
    const login = async (username, password) => {
      try {
        const response = await axios.post(`${conStr}/login`, {
          username: username,
          password: password,
        });
        console.log('Login response:', response.data);
        return response.data;
      } catch (error) {
        // Handle errors
        console.error('Error during login:', error);
        throw error;
      }
    };
    //Register
//shashika
//first login register
const firstregister = async (usernamex,passwordx,emailx) =>
{
  const updatedData=
  {
    username:usernamex,
    password:passwordx,
    email:emailx
  }
  try
  {
    const response = await axios.put(`${conStr}/update`, updatedData);
    if (response.status === 200) {
      console.log('User details updated successfully:', response.data);
    } else {
      console.error('Failed to update user details:', response.data.error);
    }
  }
  catch(error)
  {
    console.log(error);
  }
}

const checkdriver = async (id) =>
{
  try {
    const response = await axios.post(`${conStr}/check`, {
      nic:id,
    });
    console.log('Login response:', response.data);
    return response.data;
  } catch (error) {
    // Handle errors
    console.error(error);
    throw error;
  }
}
// adding comments for fines
const addcomment = async (pidx,nicx,commentx,locationx) =>
{
  try
  {const response = await axios.post(`${conStr}/comment`, {
    nic: nicx,
    pid: pidx,
    comment: commentx,
    location: locationx
  });
    return response;}
  catch(error)
  {
    console.log(error);
     return error;
  }

}
//---- to change validity------
const changeValidity = async(nicx,validityx) =>
{ 
  try
  {
    const response = await axios.put(`${conStr}/validity`,{
      nic:nicx,
      validity:validityx
    });
    return response;
  }
  catch(error)
  {
     return error;
  }
}


export {login,firstregister,checkdriver,addcomment,changeValidity}

