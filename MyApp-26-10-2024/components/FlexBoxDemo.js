import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const FlexBoxDemo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.pink}>
        <Text style={styles.number}>1</Text>
      </View>
      <View style={styles.blue}>
        <Text style={styles.number}>2</Text>
      </View>
      <View style={styles.yellow}>
        <Text style={styles.number}>3</Text>
      </View>
    </View>
  );
};

export default FlexBoxDemo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#495057",
    justifyContent: "center",
    alignItems: "center",
  },

  pink: {
    width: 100,
    height: 100,
    backgroundColor: "#ea638c",
    margin: 5,
    justifyContent: 'center', // Căn giữa nội dung theo chiều dọc
    alignItems: 'center', // Căn giữa nội dung theo chiều ngang
  },

  blue: {
    width: 100,
    height: 100,
    backgroundColor: "#47ebff",
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  yellow: {
    width: 100,
    height: 100,
    backgroundColor: "#ffd670",
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  number: {
    fontSize: 42, // Kích thước chữ lớn hơn
    fontWeight:'bold',
    color: 'black', // Màu chữ trắng
  },
});
