import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAppSelector } from '../hooks/reduxHooks';
import BottomTabNavigator from './BottomTabNavigator';
import UserNavigator from './UserNavigation';

const Stack = createNativeStackNavigator();

function MainStack() {
  const { isAuthenticated } = useAppSelector(state => state.auth);
  
  return isAuthenticated ? <BottomTabNavigator /> : <UserNavigator />;
}

export default MainStack;
