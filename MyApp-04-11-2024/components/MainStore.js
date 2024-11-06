import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity, StyleSheet, ScrollView, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'; // Import LinearGradient
import { Category, Banner, Store } from './StoreData';

const { width } = Dimensions.get('window');

const MainStore = ({ navigation }) => {
  const [activeBanner, setActiveBanner] = useState(0);

  const handleScroll = (event) => {
    const slide = Math.ceil(event.nativeEvent.contentOffset.x / event.nativeEvent.layoutMeasurement.width);
    if (slide !== activeBanner) {
      setActiveBanner(slide);
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header with Gradient */}
      <LinearGradient 
        colors={['#00FFFF', '#000080']} // Aqua to Navy gradient colors
        style={styles.header} 
      >
        <TouchableOpacity>
          <Text style={styles.headerText}>Giao đến Đà Nẵng, Việt Nam</Text>
        </TouchableOpacity>
        <View style={styles.icons}>
          <TouchableOpacity><Text>🧾</Text></TouchableOpacity>
          <TouchableOpacity><Text>🔔</Text></TouchableOpacity>
        </View>
      </LinearGradient>

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
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.categoryItem}>
            <Image source={{ uri: item.CategoryImage || 'placeholder-image-url' }} style={styles.categoryImage} />
            <Text style={styles.categoryText}>{item.name}</Text>
          </View>
        )}
        contentContainerStyle={styles.categoryList}
      />

      {/* Banner List with Dots */}
      <View style={styles.bannerContainer}>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll}
          scrollEventThrottle={16}
        >
          {Banner.map((image, index) => (
            <Image
              key={index}
              source={{ uri: image }}
              style={styles.bannerImage}
            />
          ))}
        </ScrollView>
        <View style={styles.pagination}>
          {Banner.map((_, index) => (
            <Text
              key={index}
              style={index === activeBanner ? styles.activeDot : styles.dot}
            >
              ●
            </Text>
          ))}
        </View>
      </View>

      {/* Best Stores Title */}
      <Text style={styles.bestStoresTitle}>Cửa hàng tốt nhất trong khu vực</Text>

      {/* Store List */}
      <FlatList
        data={Store}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Store', { store: item })} style={styles.storeItem}>
            <Image source={{ uri: item.ImageProduct || 'placeholder-image-url' }} style={styles.storeImage} />
            <Text style={styles.storeName}>{item.Name}</Text>
            <Text style={styles.storeRating}>⭐ {item.Rating} ({item.ReviewTime})</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.storeList}
      />
    </ScrollView>
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
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 15,
  },
  headerText: {
    fontWeight: 'bold',
    color: '#fff',
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
  bannerContainer: {
    marginVertical: 10,
  },
  bannerImage: {
    width: 360,
    height: 160,
    borderRadius: 12,
    marginRight: 15,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 5,
  },
  dot: {
    fontSize: 20,
    color: '#ccc',
    marginHorizontal: 2,
  },
  activeDot: {
    fontSize: 20,
    color: '#333',
    marginHorizontal: 2,
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
    elevation: 2,
    padding: 10,
    width: 170,
    height: 170,
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
