import React from 'react';
import { View, Text, Image, Button, StyleSheet, Alert } from 'react-native';

const TVInformation = ({ route, navigation }) => {
  const { selectedTV } = route.params; // Get the selected TV data passed as params

  const handleOrder = () => {
    Alert.alert(
      "Đặt hàng thành công",  // Title of the alert
      `Bạn đã đặt hàng ${selectedTV.name} với giá ${selectedTV.price}.`,  // Message in the alert
      [
        { text: "OK", onPress: () => console.log("OK Pressed") }  // OK button
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: selectedTV.image || 'placeholder-url' }} style={styles.detailImage} />
      <Text style={styles.detailName}>{selectedTV.name}</Text>
      <Text style={styles.detailPrice}>{selectedTV.price}</Text>
      <Button title="Đặt hàng" onPress={() => { handleOrder }} />
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  detailImage: {
    width: 500,
    height: 300,
    backgroundColor: '#f0f0f0', // Placeholder background
  },
  detailName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  detailPrice: {
    fontSize: 16,
    color: '#888',
    marginBottom: 20,
  },
});

export default TVInformation;
