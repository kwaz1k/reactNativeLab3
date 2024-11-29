import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Штанько Пётр</Text>
      <Text style={styles.text}>Я Frontend программист</Text>
      <Text style={styles.text}>В свободное время художник</Text>
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

export default AboutScreen;
