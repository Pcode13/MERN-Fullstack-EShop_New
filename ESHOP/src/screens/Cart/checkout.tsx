import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ShippingAddress from '../Checkout/ShippingAddress';
import Payment from '../Checkout/Payment';
import Confirmation from '../Checkout/Confirmation';

const Stack = createNativeStackNavigator();

const Checkout = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="ShippingAddress" 
        component={ShippingAddress}
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="Payment" 
        component={Payment}
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="Confirmation" 
        component={Confirmation}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Checkout;
