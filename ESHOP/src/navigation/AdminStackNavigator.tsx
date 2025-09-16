import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AdminContainer from '../screens/Admin/AdminContainer';
import { RootStackParamList } from './types/navgationType';

const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="AdminContainer" 
        component={AdminContainer }
        options={{ headerShown: false }}
      />
   
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;