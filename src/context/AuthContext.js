import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [hasSeenOnboarding, setHasSeenOnboarding] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isGuest, setIsGuest] = useState(true);

  useEffect(() => {
    checkAuthState();
  }, []);

  const checkAuthState = async () => {
    try {
      const [token, onboardingStatus] = await Promise.all([
        AsyncStorage.getItem('userToken'),
        AsyncStorage.getItem('hasSeenOnboarding')
      ]);
      setIsAuthenticated(!!token);
      setHasSeenOnboarding(!!onboardingStatus);
    } catch (error) {
      console.error('Error checking auth state:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (token) => {
    await AsyncStorage.setItem('userToken', token);
    setIsAuthenticated(true);
  };

  const logout = async () => {
    await AsyncStorage.removeItem('userToken');
    setIsAuthenticated(false);
  };

  const completeOnboarding = async () => {
    await AsyncStorage.setItem('hasSeenOnboarding', 'true');
    setHasSeenOnboarding(true);
    setIsGuest(true);
  };

  const requireAuth = () => {
    return !isAuthenticated;
  };

  return (
    <AuthContext.Provider value={{
      isAuthenticated,
      hasSeenOnboarding,
      isLoading,
      isGuest,
      login,
      logout,
      completeOnboarding,
      requireAuth
    }}>
      {children}
    </AuthContext.Provider>
  );
};