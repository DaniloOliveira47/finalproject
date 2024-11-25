import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Filtro({ title, ativo, onPress }) {
  return (
    <TouchableOpacity
      style={[styles.filterButton, ativo && styles.filterButtonAtivo]}
      onPress={onPress}
    >
      <Text style={[styles.filterText, ativo && styles.filterTextAtivo]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  filterButton: {
    backgroundColor: '#eee8d5',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#586e75',
  },
  filterText: {
    color: '#073642',
    fontSize: 14,
    fontWeight: 'bold',
  },
  filterButtonAtivo: {
    backgroundColor: '#2aa198',
    borderColor: '#002b36',
  },
  filterTextAtivo: {
    color: 'white',
  },
});
