// TV.js

import React, { useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, Button, StyleSheet } from 'react-native';
import tvData from '../components/tvData/tvData';

const TV = () => {
  const [selectedTV, setSelectedTV] = useState(null);

  const renderTVItem = ({ item }) => (
    <TouchableOpacity onPress={() => setSelectedTV(item)}>
      <View style={styles.itemContainer}>
        <Image source={{ uri: item.image || 'placeholder-url' }} style={styles.tvImage} />
        <Text style={styles.tvName}>{item.name}</Text>
        <Text style={styles.tvPrice}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <Text style={styles.header}>Danh sách Tivi</Text>
        <FlatList
          data={tvData}
          renderItem={renderTVItem}
          keyExtractor={item => item.id}
        />
      </View>

      {selectedTV && (
        <View style={styles.detailContainer}>
          <Image source={{ uri: selectedTV.image || 'placeholder-url' }} style={styles.detailImage} />
          <Text style={styles.detailName}>{selectedTV.name}</Text>
          <Text style={styles.detailPrice}>{selectedTV.price}</Text>
          <Button title="Đặt hàng" onPress={() => { /* Handle order logic */ }} />
        </View>
      )}
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
  },
  listContainer: {
    width: '50%', // List takes half the screen width
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
  detailContainer: {
    width: '50%',
    padding: 20,
    alignItems: 'center',
  },
  detailImage: {
    width: 200,
    height: 200,
    backgroundColor: '#f0f0f0', // Placeholder background
  },
  detailName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  detailPrice: {
    fontSize: 16,
    color: '#888',
    marginBottom: 20,
  },
});

export default TV;
