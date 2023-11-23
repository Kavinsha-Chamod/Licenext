import axios from 'axios';
import { useNavigation } from "@react-navigation/native";

    const login = async (username, password) => {
      try {
        const response = await axios.post('http://192.168.43.181:5000/login', {
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


export {login}

