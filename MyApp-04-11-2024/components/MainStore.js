import React from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Category, Banner, Store } from './StoreData';

const MainStore = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.headerText}>Giao đến Đà Nẵng, Việt Nam</Text>
        </TouchableOpacity>
        <View style={styles.icons}>
          <TouchableOpacity><Text>🧾</Text></TouchableOpacity>
          <TouchableOpacity><Text>🔔</Text></TouchableOpacity>
        </View>
      </View>

      {/* Search Bar */}
      <TextInput
        style={styles.searchBar}
        placeholder="Bạn đang thèm gì?"
      />

      {/* Category List */}
      <FlatList
        data={Category}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()} // Thêm keyExtractor
        renderItem={({ item }) => (
          <View style={styles.categoryItem}>
            <Image source={{ uri: item.CategoryImage || 'placeholder-image-url' }} style={styles.categoryImage} />
            <Text style={styles.categoryText}>{item.name}</Text>
          </View>
        )}
        contentContainerStyle={styles.categoryList} // Thêm contentContainerStyle
      />

      {/* Banner List */}
      <FlatList
        data={Banner}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()} // Thêm keyExtractor
        renderItem={({ item }) => (
          <Image source={{ uri: item }} style={styles.sliderImage} />
        )}
        contentContainerStyle={styles.sliderList} // Thêm contentContainerStyle
      />

      {/* Best Stores Title */}
      <Text style={styles.bestStoresTitle}>Cửa hàng tốt nhất trong khu vực</Text>

      {/* Store List */}
      <FlatList
        data={Store}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()} // Thêm keyExtractor
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Store', { store: item })} style={styles.storeItem}>
            <Image source={{ uri: item.ImageProduct || 'placeholder-image-url' }} style={styles.storeImage} />
            <Text style={styles.storeName}>{item.Name}</Text>
            <Text style={styles.storeRating}>⭐ {item.Rating} ({item.ReviewTime})</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.storeList} // Thêm contentContainerStyle
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f9f9f9',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  headerText: {
    fontWeight: 'bold',
    color: '#333',
    fontSize: 16,
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 60,
  },
  searchBar: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  categoryList: {
    paddingVertical: 10,
  },
  categoryItem: {
    marginRight: 15,
    alignItems: 'center',
  },
  categoryImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#ddd',
    marginBottom: 5,
  },
  categoryText: {
    fontSize: 14,
    textAlign: 'center',
    color: '#333',
  },
  sliderList: {
    paddingVertical: 10,
  },
  sliderImage: {
    width: 320,
    height: 160,
    borderRadius: 12,
    marginRight: 15,
  },
  bestStoresTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 15,
    color: '#333',
  },
  storeList: {
    paddingVertical: 10,
  },
  storeItem: {
    marginRight: 15,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
    padding: 10,
  },
  storeImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  storeName: {
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
    color: '#333',
  },
  storeRating: {
    fontSize: 12,
    color: '#777',
    textAlign: 'center',
  },
});

export default MainStore;
