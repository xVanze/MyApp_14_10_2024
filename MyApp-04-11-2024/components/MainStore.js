import React from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import StoreData from './StoreData'; // Import your StoreData

const MainStore = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.headerText}>Giao đến Đà Nẵng, Việt Nam</Text>
        </TouchableOpacity>
        <View style={styles.icons}>
          <TouchableOpacity><Text>🧾</Text></TouchableOpacity>
          <TouchableOpacity><Text>🔔</Text></TouchableOpacity>
        </View>
      </View>
      <TextInput style={styles.searchBar} placeholder="Bạn đang thèm gì?" />

      <FlatList
        data={StoreData.Category}
        horizontal
        renderItem={({ item }) => (
          <View style={styles.categoryItem}>
            <Image source={{ uri: item.CategoryImage || 'placeholder-image-url' }} style={styles.categoryImage} />
            <Text style={styles.categoryText}>{item}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />

      <FlatList
        data={StoreData.Banner}
        horizontal
        pagingEnabled
        renderItem={({ item }) => (
          <Image source={{ uri: item }} style={styles.sliderImage} />
        )}
        keyExtractor={(item, index) => index.toString()}
      />

      <Text style={styles.bestStoresTitle}>Cửa hàng tốt nhất trong khu vực</Text>
      <FlatList
        data={StoreData.Store}
        horizontal
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Store', { store: item })} style={styles.storeItem}>
            <Image source={{ uri: item.ImageProduct || 'placeholder-image-url' }} style={styles.storeImage} />
            <Text style={styles.storeName}>{item.Name}</Text>
            <Text style={styles.storeRating}>⭐ {item.Rating} ({item.ReviewTime})</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: '#fff' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15 },
  headerText: { fontWeight: 'bold', color: '#333' },
  icons: { flexDirection: 'row', justifyContent: 'space-between', width: 60 },
  searchBar: { borderColor: '#ccc', borderWidth: 1, borderRadius: 5, padding: 10, marginVertical: 10 },
  categoryItem: { marginRight: 10, alignItems: 'center' },
  categoryImage: { width: 60, height: 60, borderRadius: 30 },
  categoryText: { marginTop: 5, textAlign: 'center' },
  sliderImage: { width: 300, height: 150, borderRadius: 10, marginBottom: 10 },
  bestStoresTitle: { fontSize: 18, fontWeight: 'bold', marginVertical: 10 },
  storeItem: { marginRight: 10, alignItems: 'center' },
  storeImage: { width: 100, height: 100, borderRadius: 10 },
  storeName: { fontWeight: 'bold', textAlign: 'center' },
  storeRating: { color: '#777', textAlign: 'center' },
});

export default MainStore;
