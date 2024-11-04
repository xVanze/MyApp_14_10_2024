import React from 'react';
import { View, Text, FlatList, Button, StyleSheet, Image } from 'react-native';

const ProductItem = ({ product }) => {
  return (
    <View style={styles.productContainer}>
      {/* Horizontal FlatList for product images */}
      <FlatList
        data={product.images}
        horizontal
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Image source={{ uri: item }} style={styles.image} />
        )}
        showsHorizontalScrollIndicator={false}
      />

      {/* Product Name and Price */}
      <Text style={styles.productName}>{product.name}</Text>
      <Text style={styles.productPrice}>{product.price}</Text>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <Button title="Add to Cart" onPress={() => {}} />
        <Button title="More Details" onPress={() => {}} />
        <Button title="Wish List" onPress={() => {}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  productContainer: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 2,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
    borderRadius: 8,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 5,
  },
  productPrice: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default ProductItem;
