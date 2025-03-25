import React from 'react';
import {Text, View, StyleSheet, ImageBackground } from 'react-native';
export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground 
      source={require('../../assets/images/teste.jpg')} 
      resizeMode='cover' 
      style={styles.image}>
            <Text style={styles.text}>EU TE AMO MEU AMOR!</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center'
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    height: 'auto'
  }
});