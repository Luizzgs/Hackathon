import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Home from '../pages/Home'
import Notification from '../pages/notifications'
import Profile from '../pages/profile'
import Local from '../pages/Local'
import Config from '../pages/Config'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export function HomeNavigation() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Local' component={Local} />
            <Stack.Screen name='Config' component={Config} />
        </Stack.Navigator>
    )
}

export function NotificationNavigation() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Notification' component={Notification} />
        </Stack.Navigator>
    )
}

export function ProfileNavigation() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Profile' component={Profile} />
        </Stack.Navigator>
    )
}

export function MyTabs() {
    return (
      <Tab.Navigator
        initialRouteName="HomeTab"
        screenOptions={{
          tabBarActiveTintColor: '#1D3557',
          headerShown: false
        }}
      >
        <Tab.Screen
          name="HomeTab"
          component={HomeNavigation}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="NotificacoesTab"
          component={NotificationNavigation}
          options={{
            tabBarLabel: 'Notificações',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="bell" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="PerfilTab"
          component={ProfileNavigation}
          options={{
            tabBarLabel: 'Perfil',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
  
  export function AppRoutes() {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Home' component={MyTabs} />
      </Stack.Navigator>
    )
  }

