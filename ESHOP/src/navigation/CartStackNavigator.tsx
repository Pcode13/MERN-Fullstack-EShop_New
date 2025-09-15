import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CartContainer from '../screens/Cart/CartContainer';
import Checkout from '../screens/Cart/checkout';

const Stack = createNativeStackNavigator();

const CartStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="CartContainer" 
        component={CartContainer}
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="Checkout" 
        component={Checkout}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default CartStackNavigator;