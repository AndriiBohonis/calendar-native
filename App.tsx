/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import CalendarScreen from './src/screens/CalendarScreen';

import {useUserStore} from './src/store/userStote';
import SecureToken from './src/helper/Secure';
import AuthScreen from './src/screens/AuthScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  const {isUser, user, getUser, logoutUser} = useUserStore();

  useEffect(() => {
    const getToken = async () => {
      const token = await SecureToken.getToken();
      if (token) {
        getUser();
      }
    };
    getToken();
  }, []);

  const handleLogout = () => {
    logoutUser();
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!isUser ? (
          <Stack.Screen
            options={{headerShown: false}}
            name="Auth"
            component={AuthScreen}
          />
        ) : (
          <Stack.Screen
            name="Calendar"
            options={{
              headerStyle: {
                backgroundColor: '#0c7bc9',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              headerRight: () => (
                <TouchableOpacity onPress={handleLogout}>
                  <Icon name="logout" size={30} />
                </TouchableOpacity>
              ),
              headerLeft: () => (
                <TouchableOpacity onPress={handleLogout}>
                  <Text style={{color: '#fff', fontSize: 16}}>
                    Hi {user?.name}
                  </Text>
                </TouchableOpacity>
              ),
            }}
            component={CalendarScreen}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
