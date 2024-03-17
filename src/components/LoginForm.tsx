import React, {useState} from 'react';
import {View, Button, StyleSheet} from 'react-native';

import {useUserStore} from '../store/userStote';
import Input from './Input';
import Error from './Error';
import Loading from './Loading';

const LoginForm = () => {
  const {loginUser, loading, error} = useUserStore();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  console.log(error);

  const handleLogin = () => {
    loginUser({
      email,
      password,
    });
  };
  if (loading) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      {error && <Error message={error.message} />}
      <Input
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your login"
      />
      <Input
        value={password}
        onChangeText={setPassword}
        placeholder="Enter your password"
        secureTextEntry={true}
        onSubmitEditing={handleLogin}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
});

export default LoginForm;
