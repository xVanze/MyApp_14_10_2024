import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { categories, dishes } from './FoodAppFakeData';

const FoodApp = () => {
  const [selectedCategory, setSelectedCategory] = useState('Burgers');

  const handleCategoryPress = (category) => {
    setSelectedCategory(category);
  };

  return (
    <View style={styles.container}>
      {/* Categories List */}
      <FlatList
        data={categories}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.categoryButton,
              selectedCategory === item.name && styles.selectedCategory
            ]}
            onPress={() => handleCategoryPress(item.name)}
          >
            <Text style={styles.categoryIcon}>{item.icon}</Text>
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
      />

      {/* Dishes List */}
      <FlatList
        data={dishes[selectedCategory]}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.dishCard}>
            <Image source={{ uri: item.image }} style={styles.dishImage} />
            <View style={styles.timeContainer}>
              <Text>{item.time}</Text>
            </View>
            <Text style={styles.dishName}>{item.name}</Text>
            <View style={styles.infoContainer}>
              <Text style={styles.ratingText}>⭐ {item.rating}</Text>
              <Text style={styles.tagText}>{item.tags}</Text>
              <View style={styles.priceContainer}>
                {[...Array(3)].map((_, index) => (
                  <Text
                    key={index}
                    style={index < item.priceLevel ? styles.greenDollar : styles.grayDollar}
                  >
                    $
                  </Text>
                ))}
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  categoryButton: {
    alignItems: 'center',
    marginHorizontal: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    backgroundColor: '#f2f2f2',
  },
  selectedCategory: {
    backgroundColor: '#e0e0e0',
  },
  categoryIcon: {
    fontSize: 24,
  },
  dishCard: {
    backgroundColor: '#f9f9f9',
    borderRadius: 15,
    padding: 15,
    marginVertical: 10,
  },
  dishImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  timeContainer: {
    position: 'absolute',
    top: 130,
    left: 15,
    backgroundColor: '#fff',
    borderTopRightRadius: 25, // Only the top-right corner is rounded
    paddingHorizontal: 20,
    paddingVertical: 10,
  }, 
  dishName: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  ratingText: {
    marginRight: 10, // Spacing between rating and next item
  },
  tagText: {
    marginRight: 10, // Spacing between tags and next item
  },
  priceContainer: {
    flexDirection: 'row',
  },
  greenDollar: {
    color: 'green',
  },
  grayDollar: {
    color: 'gray',
  },
});

export default FoodApp;
