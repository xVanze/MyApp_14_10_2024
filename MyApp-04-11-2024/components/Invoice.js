import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const Invoice = ({ route }) => {
  const { cartItems, totalAmount } = route.params;
  const invoiceNumber = 12345; // Invoice number can be generated dynamically

  const today = new Date().toLocaleDateString();

  return (
    <View style={styles.container}>
      <Text style={styles.invoiceHeader}>Invoice Number: {invoiceNumber}</Text>
      <Text style={styles.invoiceDate}>Invoice Date: {today}</Text>

      <Text style={styles.customerHeader}>Customer Information</Text>
      <Text>Name: John Smith</Text>
      <Text>Email: john@example.com</Text>
      <Text>Address: 123 Main St, Anytown USA 12345</Text>

      <Text style={styles.invoiceHeader}>Invoice Items</Text>
      <FlatList
        data={cartItems}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <Text style={styles.itemText}>
            {item.name} - ${item.price} (x{item.amount}) = ${(item.price * item.amount).toFixed(2)}
          </Text>
        )}
      />

      <Text style={styles.total}>Total: ${totalAmount.toFixed(2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#f9f9f9', // Light background color
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
    elevation: 2,
  },
  invoiceHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#ccc',
  },
  invoiceDate: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
  },
  customerHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  total: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#d9534f', // Bootstrap danger color for total
    marginTop: 20,
    paddingTop: 10,
    borderTopWidth: 2,
    borderTopColor: '#ddd',
  },
  itemText: {
    fontSize: 16,
    color: '#666',
    paddingVertical: 5,
  },
});

export default Invoice;
