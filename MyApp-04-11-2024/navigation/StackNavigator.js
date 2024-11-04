import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../components/Login"; // Màn hình đăng nhập
import MainStoreScreen from "../components/MainStore"; // Màn hình trang chủ sau đăng nhập
import Store from "../components/Store";

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login">
      {/* Đặt Login là màn hình đầu tiên */}
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MainStore"
        component={MainStoreScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Store"
        component={Store}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
