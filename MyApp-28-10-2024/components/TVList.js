import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import tvData from './tvData'
import { useNavigation } from '@react-navigation/native';

const TVList = () => {
  const navigation = useNavigation();

  // Render TV Item
  const renderTVItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Detail', { selectedTV: item })}>
      <View style={styles.itemContainer}>
        {/* Image of the TV */}
        <Image source={{ uri: item.image || 'placeholder-url' }} style={styles.tvImage} />
        
        {/* TV Information */}
        <View style={styles.textContainer}>
          <Text style={styles.tvName}>{item.name}</Text>
          <Text style={styles.tvPrice}>{item.price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={tvData}
        renderItem={renderTVItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  itemContainer: {
    flexDirection: 'row',  // Align image and text horizontally
    alignItems: 'center',  // Center the content vertically
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
  },
  tvImage: {
    width: 80,
    height: 60,
    marginRight: 10,
    backgroundColor: '#f0f0f0', // Placeholder background
  },
  textContainer: {
    flex: 1, // Take up remaining space
  },
  tvName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  tvPrice: {
    fontSize: 14,
    color: '#888',
  },
});

export default TVList;
