import React from 'react';
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';

export default function ProductCard({ nome, posicao, pernaDominante, salario, foto, navigation, jogador }) {
  return (
    <TouchableOpacity
      style={styles.productCard}
      onPress={() => navigation.navigate('DetalhesJogador', { jogador })}
    >
      <Image source={{ uri: foto }} style={styles.productImage} />
      <View style={styles.productDetails}>
        <Text style={styles.productTitle}>{nome}</Text>
        <Text style={styles.productDescription}>Posição: {posicao}</Text>
        <Text style={styles.productDescription}>Perna: {pernaDominante}</Text>
        <Text style={styles.productPrice}>Salário: R${salario},00</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  productCard: {
    flexDirection: 'row',
    backgroundColor: '#586e75',
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    alignItems: 'center',
    gap: 50,
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 10,
    marginLeft: 20,
  },
  productDetails: {
    flex: 1,
    alignItems: 'center',
  },
  productTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
    textTransform: 'uppercase',
  },
  productDescription: {
    color: 'black',
    fontSize: 12,
    textAlign: 'left',
    fontWeight: 'bold',
  },
  productPrice: {
    color: '#5fc64d',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
});
