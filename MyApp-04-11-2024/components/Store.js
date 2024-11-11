import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Để sử dụng icon

const Store = ({ route }) => {
  const { store } = route.params;  // Get the store details from navigation params

  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.headerContainer}>
        {/* Store Image */}
        <Image source={{ uri: store.ImageProduct }} style={styles.storeImage} />

        {/* Logo Section */}
        <View style={styles.logoContainer}>
          <Image source={{ uri: store.Logo }} style={styles.logoImage} />
        </View>

        {/* Store Name */}
        <Text style={styles.storeName}>{store.Name}</Text>

        {/* Active Time */}
        <Text style={styles.activeTime}>{store.ActiveTime}</Text>

        {/* Store Details (Row with three sub-views) */}
        <View style={styles.storeDetailsContainer}>
          {/* Rating & Review Time */}
          <View style={styles.detailView}>
            <Text style={styles.rating}>⭐ {store.Rating}</Text>
            <Text style={styles.reviewTime}>{store.ReviewTime} reviews</Text>
          </View>

          {/* Address */}
          <View style={styles.detailView}>
            <Ionicons name="location-sharp" size={18} color="red" />
            <Text style={styles.address}>Địa chỉ quán</Text>
          </View>

          {/* Delivery Time */}
          <View style={styles.detailView}>
            
            <Text style={styles.deliveryTime}><Ionicons name="time" size={14} color="blue" />{store.DeliveryTime}</Text>
            <Text style={styles.deliveryLabel}>dự kiến giao</Text>
          </View>
        </View>
      </View>

      {/* Body Section (Product List) */}
      <View style={styles.bodyContainer}>
        {store.Product && Object.entries(store.Product).map(([categoryName, products], index) => (
          <View key={index}>
            <Text style={styles.categoryTitle}>{categoryName}</Text>

            {products.length > 0 ? (
              <FlatList
                data={products}
                renderItem={({ item }) => (
                  <View style={styles.productItem}>
                    <Image source={{ uri: item.ImageProduct }} style={styles.productImage} />
                    <View style={styles.productDetails}>
                      <Text style={styles.productName}>{item.name}</Text>
                      <Text>{item.price} VNĐ</Text>
                    </View>
                  </View>
                )}
                keyExtractor={(item) => item.name}
                horizontal={false}
              />
            ) : (
              <Text>Không có sản phẩm nào trong danh mục này.</Text>
            )}
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  headerContainer: {
    height: '35%',  // Header chiếm 35% chiều cao container
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    padding: 10,
    justifyContent: 'flex-start',  // Để nội dung nằm ở phía trên
    alignItems: 'center',
  },
  storeImage: {
    width: '100%',
    height: '40%',
    borderRadius: 8,
  },
  logoContainer: {
    position: 'absolute',
    top: '35%', // Đặt logo dưới storeImage (sau khi chiếm 40% cho storeImage)
    alignItems: 'center',
  },
  logoImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: 'white',
  },
  storeName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 40,
  },
  activeTime: {
    fontSize: 14,
    color: '#888',
    marginVertical: 5,
  },
  storeDetailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 15,
  },
  detailView: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  rating: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  reviewTime: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  address: {
    fontSize: 14,
    textAlign: 'center',
    marginLeft: 5,
    fontWeight: 'bold',
  },
  deliveryTime: {
    fontSize: 15,
  },
  deliveryLabel: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  bodyContainer: {
    height: '65%',  // Body chiếm 65% chiều cao container
    paddingTop: 10,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  productItem: {
    flexDirection: 'row',
    marginVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 10,
  },
  productImage: {
    width: 70,
    height: 70,
    borderRadius: 8,
  },
  productDetails: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  productName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Store;
