import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../components/TVList';
import TVDetailScreen from '../components/TVDetail';

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ title: 'Danh sách Tivi' }} // Optional: Customize title
      />
      <Stack.Screen 
        name="Detail" 
        component={TVDetailScreen} 
        options={{ title: 'Chi tiết Tivi' }} // Customize the detail screen title
      />
    </Stack.Navigator>
  );
}
