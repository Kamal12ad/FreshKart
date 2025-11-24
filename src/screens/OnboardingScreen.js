import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  StatusBar,
} from 'react-native';
import { useAuth } from '../context/AuthContext';

const { width, height } = Dimensions.get('window');

const OnboardingScreen = () => {
  const [currentScreen, setCurrentScreen] = useState(0);
  const { completeOnboarding } = useAuth();

  const screens = [
    {
      title: 'Premium Food\nAt Your Doorstep',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy',
      image: require('../assets/images/splash1.png')
    },
    {
      title: 'Fast Delivery\nService',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy',
      image: require('../assets/images/splash2.png')
    }
  ];

  const handleNext = () => {
    if (currentScreen < screens.length - 1) {
      setCurrentScreen(currentScreen + 1);
    } else {
      completeOnboarding();
    }
  };

  const currentData = screens[currentScreen];
  const isLastScreen = currentScreen === screens.length - 1;

  const renderPaginationDots = () => {
    return (
      <View style={styles.pagination}>
        {screens.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              index === currentScreen ? styles.activeDot : styles.inactiveDot
            ]}
          />
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      <View style={styles.imageContainer}>
        <Image source={currentData.image} style={styles.image} resizeMode="cover" />
      </View>
      
      <View style={styles.bottomContainer}>
        <Text style={styles.title}>{currentData.title}</Text>
        <Text style={styles.subtitle}>{currentData.subtitle}</Text>
        
        {renderPaginationDots()}
        
        <TouchableOpacity style={styles.button} onPress={handleNext}>
          <Text style={styles.buttonText}>Get started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8F5E8',
  },
  imageContainer: {
    flex: 0.6,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 0,
  },
  image: {
    width: width * 1,
    height: height * 0.9,
  },
  bottomContainer: {
    flex: 0.4,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 24,
    paddingTop: 40,
    paddingBottom: 40,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    lineHeight: 36,
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    color: '#999',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 30,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#8BC34A',
  },
  inactiveDot: {
    backgroundColor: '#E0E0E0',
  },
  button: {
    backgroundColor: '#8BC34A',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default OnboardingScreen;