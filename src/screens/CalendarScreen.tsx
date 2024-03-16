/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import EventScreen from './EventScreen';
import {useEventStore} from '../store/eventStore';
import {formatISODate} from '../helper/Date';
import Icon from 'react-native-vector-icons/AntDesign';
const CalendarScreen = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const {getDayEvents} = useEventStore();
  useEffect(() => {
    getDayEvents(formatISODate(selectedDate));
  }, [selectedDate]);

  const previousDay = () => {
    const newDate = new Date(selectedDate);
    newDate.setDate(newDate.getDate() - 1);
    setSelectedDate(newDate);
  };
  const nextDay = () => {
    const newDate = new Date(selectedDate);
    newDate.setDate(newDate.getDate() + 1);
    setSelectedDate(newDate);
  };

  return (
    <View style={styles.container}>
      <View style={styles.dateContainer}>
        <Icon onPress={previousDay} name="arrowleft" size={30} />

        <Text style={styles.dateText}>{selectedDate.toDateString()}</Text>
        <Icon onPress={nextDay} name="arrowright" size={30} />
      </View>
      <EventScreen selectedDate={selectedDate} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    alignItems: 'center',
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  dateText: {
    marginHorizontal: 10,
    fontSize: 18,
    width: 170,
    textAlign: 'center',
  },
});

export default CalendarScreen;
