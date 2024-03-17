import React from 'react';
import {FlatList} from 'react-native';

import {useEventStore} from '../store/eventStore';
import EventItem from './EventItem';
import Loading from './Loading';

const EventList = () => {
  const {events, loading} = useEventStore();

  if (loading) {
    return <Loading />;
  }

  return (
    <FlatList
      data={events}
      renderItem={({item}) => <EventItem item={item} />}
      keyExtractor={item => item.id.toString()}
    />
  );
};

export default EventList;
