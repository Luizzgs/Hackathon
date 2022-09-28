import 'react-native-gesture-handler'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {MyTabs, Routes, defineInterceptor} from './src/routes/routes';

import { StoreProvider } from './src/contexts/store';

export default function App() {
  return (
    <StoreProvider>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </StoreProvider>
  );
}