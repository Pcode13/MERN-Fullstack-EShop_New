import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ProductHome from '../screens/Products/ProductHome';
import SingleProduct from '../screens/Products/SingleProduct';
import { RootStackParamList } from './types/navgationType';
const Stack = createNativeStackNavigator<RootStackParamList>();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={ProductHome}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Product Detail"
        component={SingleProduct}
        options={{
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
}

export default function HomeNavigator() {
  return <MyStack />;
}
