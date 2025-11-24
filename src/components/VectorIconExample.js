import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import IoniconsIcon from '@react-native-vector-icons/ionicons';
import MaterialIcon from '@react-native-vector-icons/material-icons';
import FontAwesomeIcon from '@react-native-vector-icons/fontawesome';

const VectorIconExample = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vector Icons Example</Text>
      
      <View style={styles.iconRow}>
        <IoniconsIcon name="home" size={30} color="#007AFF" />
        <Text style={styles.iconLabel}>Ionicons Home</Text>
      </View>
      
      <View style={styles.iconRow}>
        <MaterialIcon name="shopping-cart" size={30} color="#4CAF50" />
        <Text style={styles.iconLabel}>Material Shopping Cart</Text>
      </View>
      
      <View style={styles.iconRow}>
        <FontAwesomeIcon name="heart" size={30} color="#E91E63" />
        <Text style={styles.iconLabel}>FontAwesome Heart</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  iconLabel: {
    marginLeft: 10,
    fontSize: 16,
  },
});

export default VectorIconExample;