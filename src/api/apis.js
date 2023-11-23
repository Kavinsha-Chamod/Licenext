import axios from 'axios';
import { useNavigation } from "@react-navigation/native";

    const login = async (username, password) => {
      try {
        const response = await axios.post('http://localhost:5000/login', {
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
    const response = await axios.put(`http://localhost:5000/update`, updatedData);
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



export {login,firstregister}

