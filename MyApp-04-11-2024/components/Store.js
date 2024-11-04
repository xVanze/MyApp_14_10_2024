import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

const Store = ({ route }) => {
  const { store } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: store.imageUrl }} style={styles.storeImage} />
      <Text style={styles.storeName}>{store.Name}</Text>
      <Text>{store.Address}</Text>
      <Text>{store.DeliveryTime}</Text>

      {/* Category product list */}
      {store.Product && Object.entries(store.Product).map(([categoryName, products], index) => (
        <View key={index}>
          <Text style={styles.categoryTitle}>{categoryName}</Text>
          {products.length > 0 ? (
            <FlatList
              data={products}
              renderItem={({ item }) => (
                <View style={styles.productItem}>
                  <Image source={{ uri: item.ImageProduct }} style={styles.productImage} />
                  <Text>{item.name}</Text>
                  <Text>{item.price} VNĐ</Text>
                </View>
              )}
              keyExtractor={(item) => item.name} // Thay đổi để sử dụng một trường duy nhất nếu có
            />
          ) : (
            <Text>Không có sản phẩm nào trong danh mục này.</Text>
          )}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  storeImage: { width: '100%', height: 200 },
  storeName: { fontSize: 22, fontWeight: 'bold', marginVertical: 10 },
  categoryTitle: { fontSize: 18, marginVertical: 10 },
  productItem: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 5 },
  productImage: { width: 50, height: 50 }
});

export default Store;
