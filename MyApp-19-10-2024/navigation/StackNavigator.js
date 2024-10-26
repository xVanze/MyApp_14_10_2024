import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FoodProductList from '../components/FoodProductList';
import Cart from '../components/Cart';
import Invoice from '../components/Invoice';

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={FoodProductList} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Invoice" component={Invoice} />
    </Stack.Navigator>
  );
}
