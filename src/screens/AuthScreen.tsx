import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RegisterForm from '../components/RegisrefForm';

import LoginForm from '../components/LoginForm';
import {Button, View} from 'react-native';
const Stack = createNativeStackNavigator();
const AuthScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        options={({navigation}) => ({
          headerTitle: 'Login',
          headerRight: () => (
            <View style={{marginRight: 10}}>
              <Button
                onPress={() => navigation.navigate('Register')}
                title="Register"
              />
            </View>
          ),
        })}
        component={LoginForm}
      />
      <Stack.Screen name="Register" component={RegisterForm} />
    </Stack.Navigator>
  );
};
export default AuthScreen;
