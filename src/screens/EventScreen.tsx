import React from 'react';
import {View, StyleSheet} from 'react-native';
import AddEventForm from '../components/EventForm';
import EventList from '../components/EventList';

const EventScreen = ({selectedDate}: {selectedDate: Date}) => {
  return (
    <View style={styles.container}>
      <EventList />
      <AddEventForm selectedDate={selectedDate} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 10,
  },
});

export default EventScreen;
