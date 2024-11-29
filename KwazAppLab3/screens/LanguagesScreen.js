import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LanguagesScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Мои ЯПы:</Text>
      <Text style={styles.text}>JavaScript и 1С</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#a100ff'
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff'  
  },
});

export default LanguagesScreen;
