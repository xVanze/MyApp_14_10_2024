import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import WhatsAppCallsFakeData from './WhatsAppCallsFakeData';

const WhatsAppCalls = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={WhatsAppCallsFakeData}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Profile', { user: item })}>
            <View style={styles.listItem}>
              <View style={styles.row}>
                <Image
                  source={{ uri: item.image }}
                  style={{ borderRadius: 25, width: 50, height: 50 }}
                />
                <View style={{ flex: 1, marginLeft: 10 }}>
                  <Text style={styles.callerName}>{item.name}</Text>
                  <Text style={styles.callTime}>✓ {item.time}</Text>
                </View>
                <Image
                  source={{ uri: item.video  ? 'https://e1.pngegg.com/pngimages/929/197/png-clipart-button-ui-system-icons-facetime-video-call-icon.png' : 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-voice-icon.png' }}
                  style={{ width: 28, height: 28 }}
                />
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  callerName: {
    fontWeight: '600',
    fontSize: 15,
  },
  callTime: {
    fontSize: 12,
    color: '#666',
  },
});

export default WhatsAppCalls;
