import React from "react";
import { View, Text, Image, Button, StyleSheet, Alert, TouchableOpacity } from "react-native";

const TVDetail = ({ route }) => {
  const { selectedTV } = route.params;

  const handleOrder = () => {
    Alert.alert(
      "Đặt hàng thành công",
      `Bạn đã đặt hàng ${selectedTV.name} với giá ${selectedTV.price}.`,
      [
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.detailImageContainer}>
        <Image
          source={{ uri: selectedTV.image || "placeholder-url" }}
          style={styles.detailImage}
        />
      </View>

      <Text style={styles.detail}>{selectedTV.id}</Text>
      <Text style={styles.detail}>{selectedTV.name}</Text>
      <Text style={styles.detail}>{selectedTV.price}</Text>
      <TouchableOpacity style={styles.ButtonOrder} onPress={handleOrder}>
        <Text style={{ color: 'white' }}>Đặt hàng</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  detailImageContainer: {
    width: "100%",
    height: 300,
    backgroundColor: "#f0f0f0",
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailImage: {
    marginTop: 100,
    width: "70%",
    height: "55%",
    resizeMode: 'stretch',
  },
  detail: {
    fontSize: 18,
    marginBottom: 10,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    fontWeight: '400'
  },
  ButtonOrder: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4CAF50",
    padding: 10,
    borderRadius: 5,
    fontWeight: "bold",
  },
});

export default TVDetail;
