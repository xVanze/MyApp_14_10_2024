import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import tvData from './TVData'; // Import the data
import { useNavigation } from '@react-navigation/native';

const TVList = () => {
  const navigation = useNavigation(); // Use navigation

  // Render TV Item
  const renderTVItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Detail', { selectedTV: item })}>
      <View style={styles.itemContainer}>
        <Image source={{ uri: item.image || 'placeholder-url' }} style={styles.tvImage} />
        <Text style={styles.tvName}>{item.name}</Text>
        <Text style={styles.tvPrice}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView>
      <View style={styles.container}>
        <FlatList
          data={tvData}
          renderItem={renderTVItem}
          keyExtractor={item => item.id}
        />
      </View>
    </ScrollView>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  itemContainer: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  tvImage: {
    width: '100%',
    height: 100,
    backgroundColor: '#f0f0f0', // Placeholder background
  },
  tvName: {
    fontSize: 16,
    marginTop: 5,
  },
  tvPrice: {
    fontSize: 14,
    color: '#888',
  },
});

export default TVList;
