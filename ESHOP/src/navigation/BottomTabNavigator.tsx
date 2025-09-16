import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from '@react-native-vector-icons/ionicons';
import HomeStackNavigator from './HomeStackNavigator';
import { RootStackParamList } from './types/navgationType';
import CartStackNavigator from './CartStackNavigator';

import { useAppSelector } from '../hooks/reduxHooks';
import Profile from '../screens/User/Profile';
import AdminContainer from '../screens/Admin/AdminContainer';

const Tab = createBottomTabNavigator<RootStackParamList>();

const BottomTabNavigator = () => {
  const { user, isAuthenticated } = useAppSelector(state => state.auth);
  const isAdmin = isAuthenticated && user?.isAdmin;
  console.log('isAdmon', isAdmin);

  return (
    <Tab.Navigator
      // initialRouteName="Home"
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#0b070723',
        tabBarActiveBackgroundColor: '#e0e0e0',
        tabBarInactiveBackgroundColor: '#fff',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartStackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="cart" size={size} color={color} />
          ),
        }}
      />

      {isAdmin && (
        <Tab.Screen
          name="Admin"
          component={AdminContainer}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Icon name="settings" size={size} color={color} />
            ),
          }}
        />
      )}
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
