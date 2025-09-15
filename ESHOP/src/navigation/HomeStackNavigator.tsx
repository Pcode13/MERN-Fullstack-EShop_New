import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductHome from '../screens/Products/ProductHome';
import SingleProduct from '../screens/Products/SingleProduct';
import { RootStackParamList } from './types/navgationType';

const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="ProductHome" 
        component={ProductHome}
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="SingleProduct" 
        component={SingleProduct}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;