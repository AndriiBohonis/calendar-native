import {create} from 'zustand';
import {IUserType} from '../types/storeTypes';
import {getUser, loginUser, logoutUser, registerUser} from '../api';
import {AxiosError} from 'axios';
import SecureToken from '../helper/Secure';

export const useUserStore = create<IUserType>()(set => ({
  user: null,
  error: null,
  loading: false,
  isUser: false,
  registerUser: async body => {
    set({loading: true});
    try {
      const data = await registerUser(body);
      SecureToken.storeToken(data.token);

      set({
        user: data.user,
        error: null,
        isUser: true,
        loading: false,
      });
    } catch (error) {
      if (error instanceof AxiosError) {
        set({loading: false, error: error});
      }
    }
  },
  loginUser: async body => {
    set({loading: true});
    try {
      const data = await loginUser(body);

      SecureToken.storeToken(data.token);

      set({
        user: data.user,
        isUser: true,
        error: null,
        loading: false,
      });
    } catch (error) {
      if (error instanceof AxiosError) {
        set({loading: false, error: error});
      }
    }
  },
  getUser: async () => {
    set({loading: true});
    try {
      const user = await getUser();

      if (!user.email) {
        SecureToken.removeToken();
        set({
          isUser: false,

          loading: false,
        });
      } else {
        set({
          user,
          error: null,
          isUser: true,
          loading: false,
        });
      }
    } catch (error) {
      SecureToken.removeToken();
      set({loading: false});
      if (error instanceof AxiosError) {
        set({loading: false, error: error});
      }
    }
  },
  logoutUser: async () => {
    set({loading: true, user: null});
    SecureToken.removeToken();
    try {
      await logoutUser();

      set({
        isUser: false,
        loading: false,
      });
    } catch (error) {
      if (error instanceof AxiosError) {
        set({loading: false, error: error});
      }
    }
  },
}));
