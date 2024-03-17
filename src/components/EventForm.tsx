import React, {useState} from 'react';
import {StyleSheet, KeyboardAvoidingView, Platform} from 'react-native';
import {useEventStore} from '../store/eventStore';
import {formatISODate} from '../helper/Date';
import Input from './Input';

const EventForm = ({selectedDate}: {selectedDate: Date}) => {
  const [text, setText] = useState('');
  const {createEvent} = useEventStore();
  const handleAddEvent = () => {
    if (text.trim() !== '') {
      createEvent({
        description: text,
        event_date: formatISODate(selectedDate),
      });
      setText('');
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 150 : 0}>
      <Input
        onSubmitEditing={handleAddEvent}
        returnKeyType="done"
        value={text}
        onChangeText={setText}
        placeholder="Enter your event"
      />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
  },
});

export default EventForm;
