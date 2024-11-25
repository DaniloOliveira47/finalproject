import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CartaoEstatisticas({ titulo, estatisticas }) {
  return (
    <View style={styles.cartao}>
      <Text style={styles.tituloSecao}>{titulo}</Text>
      {estatisticas.map(({ rotulo, valor }, indice) => (
        <View style={styles.linhaInfo} key={indice}>
          <Text style={styles.rotuloInfo}>{rotulo}:</Text>
          <Text style={styles.valorInfo}>{valor}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  cartao: {
    backgroundColor: '#586e75',
    borderRadius: 15,
    padding: 15,
    marginVertical: 10,
    shadowColor: '#fff',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
  },
  tituloSecao: {
    color: '#7cdd66',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  linhaInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#404d4f',
  },
  rotuloInfo: {
    color: '#a5a5a5',
    fontSize: 16,
  },
  valorInfo: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
