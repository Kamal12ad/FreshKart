// In your App.js
import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AuthProvider } from './src/context/AuthContext';
import RootNavigator from './src/navigation/RootNavigator';
import { StatusBar } from 'react-native';

export default function App() {
  useEffect(() => {
    // Hide splash screen after JS loads
    SplashScreen.hide();
  }, []);

  return (
    <SafeAreaProvider>
      <StatusBar
        hidden={false}
        // barStyle="dark-content" // or "light-content"
        // backgroundColor="#ffffff"
      />
      <AuthProvider>
        <RootNavigator />
      </AuthProvider>
    </SafeAreaProvider>
  );
}
