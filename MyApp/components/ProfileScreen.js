import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProfileScreen = ({ route }) => {
  const { user } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.coverImage}>
        <Image
            source={{ uri: user.image }}
            style={styles.avatar}
        />
        <Text style={styles.name}>{user.name}</Text>
      </View>      

      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Email:</Text>
        <Text style={styles.infoValue}>{user.email}</Text>

        <Text style={styles.infoLabel}>Location:</Text>
        <Text style={styles.infoValue}>{user.location}</Text>

        <Text style={styles.infoLabel}>Bio:</Text>
        <Text style={styles.infoValue}>{user.bio}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  coverImage: {
    height: 200,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#f96c44',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 10,
  },
  infoContainer: {
    marginTop: 200,
  },
  infoLabel: {
    fontWeight: 'bold',
  },
  infoValue: {
    marginTop: 5,
  },
});

export default ProfileScreen;