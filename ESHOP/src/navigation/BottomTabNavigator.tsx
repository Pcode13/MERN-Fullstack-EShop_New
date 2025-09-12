import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProductHome from '../screens/Products/ProductHome';
import Profile from '../screens/User/Profile';
import Cart from '../screens/Cart/CartContainer';
import Admin from '../screens/Admin/AdminContainer';
import Icon from '@react-native-vector-icons/ionicons';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        headerShown: false,
        // tabBarStyle: { height: 60 },

        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#0b070723',
        tabBarActiveBackgroundColor: '#e0e0e0',
        tabBarInactiveBackgroundColor: '#fff',
      }}
    >
      <Tab.Screen
        name="Home"
        component={ProductHome}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="cart" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Admin"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="menu" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="user"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="person" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
