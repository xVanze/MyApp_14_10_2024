import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../components/WhatsAppCalls';
import ProfileScreen from '../components/ProfileScreen';

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}
