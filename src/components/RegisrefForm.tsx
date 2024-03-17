import React, {useState} from 'react';
import {View, Button, StyleSheet} from 'react-native';
import {useUserStore} from '../store/userStote';
import Input from './Input';
import Error from './Error';
import Loading from './Loading';

const RegisterForm = () => {
  const {registerUser, error, loading} = useUserStore();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    if (name && email && password) {
      registerUser({
        name,
        email,
        password,
      });
    }
  };
  if (loading) {
    return <Loading />;
  }
  return (
    <View style={styles.container}>
      {error && <Error message={error.message} />}
      <Input
        value={name}
        onChangeText={setName}
        placeholder="Enter your name"
      />
      <Input
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your email"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Input
        value={password}
        onChangeText={setPassword}
        placeholder="Enter your password"
        secureTextEntry={true}
        onSubmitEditing={handleRegister}
      />
      <Button title="Register" onPress={handleRegister} />
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

export default RegisterForm;
