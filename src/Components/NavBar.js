import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';

export default function Navbar({ navigation, activeScreen }) {
  return (
    <View style={styles.navbar}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Ionicons 
          name="home" 
          size={24} 
          color={activeScreen === 'Home' ? '#7cdd66' : 'white'} 
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Transfer')}>
        <Ionicons 
          name="storefront" 
          size={24} 
          color={activeScreen === 'Transfer' ? '#7cdd66' : 'white'} 
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('estatisticas')}>
        <Ionicons 
          name="bar-chart"
          size={24} 
          color={activeScreen === 'estatisticas' ? '#7cdd66' : 'white'} 
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Perfil')}>
        <Ionicons 
          name="person" 
          size={24} 
          color={activeScreen === 'Perfil' ? '#7cdd66' : 'white'} 
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('MeuElenco')}>
        <Ionicons 
          name="people" 
          size={24} 
          color={activeScreen === 'MeuElenco' ? '#7cdd66' : 'white'} 
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#073642',
    paddingVertical: 15,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
});
