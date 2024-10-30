import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import FriendCard from './FriendCard';

const friends = [
  {
    id: '1',
    name: 'John Parker',
    country: 'Canada',
    age: '21-30 Years old',
    rating: 3,
    sports: ['Football', 'Baseball', 'Basketball', 'Soccer'],
    imageUrl: 'https://bootdey.com/img/Content/avatar/avatar1.png',
  },
  {
    id: '2',
    name: 'John Parker',
    country: 'Canada',
    age: '21-30 Years old',
    rating: 4,
    sports: ['Football', 'Baseball', 'Basketball', 'Soccer'],
    imageUrl: 'https://bootdey.com/img/Content/avatar/avatar2.png',
  },
  {
    id: '3',
    name: 'John Parker',
    country: 'Canada',
    age: '21-30 Years old',
    rating: 3.5,
    sports: ['Football', 'Baseball', 'Basketball', 'Soccer'],
    imageUrl: 'https://bootdey.com/img/Content/avatar/avatar3.png',
  },
  {
    id: '4',
    name: 'John Parker',
    country: 'Canada',
    age: '21-30 Years old',
    rating: 3.5,
    sports: ['Football', 'Baseball', 'Basketball', 'Soccer'],
    imageUrl: 'https://bootdey.com/img/Content/avatar/avatar4.png',
  },
  {
    id: '5',
    name: 'John Parker',
    country: 'Canada',
    age: '21-30 Years old',
    rating: 3.5,
    sports: ['Football', 'Baseball', 'Basketball', 'Soccer'],
    imageUrl: 'https://bootdey.com/img/Content/avatar/avatar5.png',
  },
];

const FriendListScreen = () => {
  return (
    <FlatList
      data={friends}
      renderItem={({ item }) => <FriendCard friend={item} />}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: 40,
  },
});

export default FriendListScreen;
