import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
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
    <View style={styles.container}>
      <Input
        onSubmitEditing={handleAddEvent}
        returnKeyType="done"
        value={text}
        onChangeText={setText}
        placeholder="Enter your event"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
  },
});

export default EventForm;
