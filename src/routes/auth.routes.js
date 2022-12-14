import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Login from '../pages/Login';
import SignUp from '../pages/SignUp';


const Stack = createStackNavigator();

export function AuthRoutes() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='SignUp' component={SignUp} />
        </Stack.Navigator>
    )
}
