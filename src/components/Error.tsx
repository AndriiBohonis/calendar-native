import React from 'react';
import {StyleSheet, Text} from 'react-native';

const Error = ({message}: {message: string}) => {
  return <Text style={styles.message}>{message}</Text>;
};
const styles = StyleSheet.create({
  message: {
    fontSize: 20,
    textAlign: 'center',
  },
});
export default Error;
