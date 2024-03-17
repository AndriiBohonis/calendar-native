import React from 'react';
import {
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  TextInputProps,
} from 'react-native';

interface InputProps extends TextInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  onSubmitEditing?: () => void;
}
const Input = ({
  onSubmitEditing,
  value,
  onChangeText,
  placeholder,
  ...props
}: InputProps) => {
  return (
    <KeyboardAvoidingView keyboardVerticalOffset={100} behavior="padding">
      <TextInput
        {...props}
        onSubmitEditing={onSubmitEditing}
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
      />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    width: '100%',
    borderRadius: 10,
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});

export default Input;
