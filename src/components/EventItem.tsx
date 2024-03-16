import React from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import {IEventResponse} from '../types';
import {useEventStore} from '../store/eventStore';
import Icon from 'react-native-vector-icons/AntDesign';

const EventItem = ({item}: {item: IEventResponse}) => {
  const {updateEvent, removeEvent} = useEventStore();

  const toggleCheckBox = () => {
    updateEvent({done: !item.done, id: item.id});
  };

  const pressRemove = () => {
    removeEvent(item.id);
  };

  return (
    <View style={styles.item}>
      <TouchableOpacity style={styles.checkBox} onPress={toggleCheckBox}>
        {item.done ? <Icon name="check" size={20} color="#3f6946" /> : null}
      </TouchableOpacity>
      <Text style={styles.text}>{item.description}</Text>
      <Text onPress={pressRemove} style={styles.delete}>
        <Icon name="delete" size={20} color="#f51905" />
      </Text>
      <View />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  text: {
    flex: 1,
    marginHorizontal: 10,
  },
  checkBox: {
    width: 25,
    height: 25,
    borderRadius: 5,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  delete: {
    fontSize: 20,
  },
});
export default EventItem;
