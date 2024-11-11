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
          <Text style={styles.tvPrice}>Đơn giá: <Text style={{fontWeight: '600', color: 'black'}}>{item.price}</Text></Text>
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
    paddingHorizontal: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: 'gray',
    backgroundColor: '#fff',
    height:100,
  },
  tvImage: {
    width: 100,
    height: 75,
    marginRight: 10,
    backgroundColor: '#f0f0f0',
    resizeMode: 'stretch',
  },
  textContainer: {
    marginBottom:40,
  },
  tvName: {
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 5,
  },
  tvPrice: {
    fontSize: 13,
    color: 'red',
    fontWeight: '600'
  },
});

export default TVList;
