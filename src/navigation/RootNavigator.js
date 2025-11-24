import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, ActivityIndicator } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import AppStack from './AppStack';
import AuthStack from './AuthStack';
import OnboardingScreen from '../screens/OnboardingScreen';

const RootNavigator = () => {
  const { isAuthenticated, hasSeenOnboarding, isLoading, isGuest } = useContext(AuthContext);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#4CAF50" />
      </View>
    );
  }

  if (!hasSeenOnboarding) {
    return (
      <NavigationContainer>
        <OnboardingScreen />
      </NavigationContainer>
    );
  }

  return (
    <NavigationContainer>
      {isAuthenticated || isGuest ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default RootNavigator;