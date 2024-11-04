import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import products from './fakeDataProduct';  // Import the product data
import ProductItem from './ProductItem';   // Import the ProductItem component

const ProductList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ProductItem product={item} />}  // Render each product item
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default ProductList;
