import React from 'react';
import {ActivityIndicator} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { useStore } from '../contexts/store';

import Loading from '../pages/Loading';
import { AuthRoutes } from './auth.routes';
import { AppRoutes } from './app.routes';


const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

export function Routes() {
  const [store] = useStore();
  if (!store.rehydrated) {
    return <Loading />;
  }  
  return store.auth ?  <AppRoutes /> : <AuthRoutes />
}
