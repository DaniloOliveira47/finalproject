import React from 'react';
import {StyleSheet, Text, View } from 'react-native';
import Card from '../Components/Card';
import Filtro from '../Components/filtro';


export default function Home() {
  return (
   <View style={styles.pagina}>
    <View style={styles.corpo}>
  <Card style={styles.card}/>
  <View>
  </View>
  </View>
   </View>
  );
}

const styles = StyleSheet.create({
   pagina: {
    alignItems: 'center',
    backgroundColor: '#1f5019',
    width: '100%',
    height: '100%',
    
   },
   corpo: {
    marginTop: 100,
   }
   
});
