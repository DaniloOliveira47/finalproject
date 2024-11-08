import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import Header from '../Components/Header';

export default function Home() {
  return (
    
    <ImageBackground source={require('../assets/images/campoDeFut.png')} style={styles.backgroundImage}>
      <View style={styles.container}>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
});
