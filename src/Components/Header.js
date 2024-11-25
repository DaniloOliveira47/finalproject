import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Cabecalho({ titulo }) {
  return (
    <View style={styles.cabecalho}>
      <Text style={styles.tituloCabecalho}>{titulo}</Text>
      <Ionicons name="analytics" size={24} color="white" />
    </View>
  );
}

const styles = StyleSheet.create({
  cabecalho: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    backgroundColor: '#073642',
    paddingVertical: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  tituloCabecalho: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
