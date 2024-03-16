import React from 'react';
import {FlatList} from 'react-native';

import {useEventStore} from '../store/eventStore';
import EventItem from './EventItem';

const EventList = () => {
  const {events} = useEventStore();

  return (
    <FlatList
      data={events}
      renderItem={({item}) => <EventItem item={item} />}
      keyExtractor={item => item.id.toString()}
    />
  );
};

export default EventList;
