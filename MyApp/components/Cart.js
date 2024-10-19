import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

const Cart = ({ route, navigation }) => {
  const { cartItems } = route.params;

  const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.amount, 0);

  const handlePayNow = () => {
    navigation.navigate('Invoice', { cartItems, totalAmount });
  };

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <Text style={styles.title}>Your Cart</Text>
      <FlatList
        data={cartItems}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.name} (x{item.amount}) - ${item.price * item.amount}</Text>
          </View>
        )}
      />
      <Text style={styles.total}>Total: ${totalAmount.toFixed(2)}</Text>
      <TouchableOpacity style={styles.payButton} onPress={handlePayNow}>
        <Text style={styles.payButtonText}>Pay Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  total: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  payButton: {
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 5,
  },
  payButtonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default Cart;
