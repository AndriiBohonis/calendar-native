import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

class SecureToken {
  token: string;

  constructor() {
    this.token = '';
  }

  async storeToken(token: string): Promise<void> {
    try {
      await AsyncStorage.setItem('token', token);
      this.token = token;
      this.axiosToken(token);
    } catch (error) {
      console.error(error);
    }
  }

  async getToken(): Promise<string | null> {
    try {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        this.axiosToken(token);
      }
      return token;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async removeToken(): Promise<void> {
    try {
      await AsyncStorage.removeItem('token');
      this.axiosToken('');
    } catch (error) {
      console.error(error);
    }
  }

  axiosToken(token: string): void {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  }
}

export default new SecureToken();
