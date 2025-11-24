import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="MainTabs" component={BottomTabNavigator} />
      <Stack.Screen name="Login" component={require('../screens/auth/LoginScreen').default} />
      <Stack.Screen name="Signup" component={require('../screens/auth/SignupScreen').default} />
    </Stack.Navigator>
  );
};

export default AppStack;
