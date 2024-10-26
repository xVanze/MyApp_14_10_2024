import React, { useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import FoodProductListData from './FoodProductListData'; // Import danh sách thực phẩm

const FoodProductList = ({ navigation }) => {
  const [amounts, setAmounts] = useState(Array(FoodProductListData.length).fill(0));

  const updateAmount = (index, delta) => {
    const newAmounts = [...amounts];
    const newAmount = newAmounts[index] + delta;
    if (newAmount >= 0) {
      newAmounts[index] = newAmount;
      setAmounts(newAmounts);
    }
  };

  const handleContinue = () => {
    const cartItems = FoodProductListData.map((item, index) => ({
      ...item,
      amount: amounts[index],
    })).filter(item => item.amount > 0);
    
    navigation.navigate('Cart', { cartItems });
  };

  const FoodCard = ({ item, index }) => (
    <TouchableOpacity>
      <View style={styles.listItem}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.infoContainer}>
          <Text style={styles.productName}>{item.name}</Text>
          <Text style={styles.productDescription}>{item.description}</Text>
          <Text style={styles.productPrice}>
            ${item.price} <Text style={styles.perItem}>per item</Text>
          </Text>
        </View>
        <View style={styles.amountContainer}>
          <TouchableOpacity onPress={() => updateAmount(index, -1)} style={styles.button}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.amountText}>{amounts[index]}</Text>
          <TouchableOpacity onPress={() => updateAmount(index, 1)} style={styles.button}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={FoodProductListData}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item, index }) => <FoodCard item={item} index={index} />}
      />
      <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 10,
  },
  productName: {
    fontWeight: '600',
    fontSize: 16,
  },
  productDescription: {
    fontSize: 12,
    color: '#666',
  },
  productPrice: {
    fontSize: 14,
    color: 'green',
    fontWeight: 'bold',
  },
  perItem: {
    color: '#000',
    fontWeight: 'normal',
  },
  amountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'orange',
    borderRadius: 50,
    padding: 5,
    marginHorizontal: 5,
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
  },
  amountText: {
    fontSize: 16,
    marginHorizontal: 10,
  },
  continueButton: {
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 5,
    margin: 10,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  continueButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default FoodProductList;
