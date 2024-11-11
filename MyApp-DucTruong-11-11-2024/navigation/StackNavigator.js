import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, StyleSheet } from 'react-native';
import HomeScreen from '../components/TVList';
import TVDetailScreen from '../components/TVDetail';

const Stack = createStackNavigator();

const CustomHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>Danh sách Tivi</Text>
    </View>
  );
};

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          header: () => <CustomHeader />, // Sử dụng custom header cho màn hình Home
        }}
      />
      <Stack.Screen
        name="Detail"
        component={TVDetailScreen}
        options={{title: 'Chi tiết Tivi'}}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 20,
    borderBottomColor: 'black',
    borderBottomWidth: 2,
  },
  headerTitle: {
    fontSize: 18,
    color: '#333',
    fontWeight: 'bold',
  },
});

export default AppNavigator;
