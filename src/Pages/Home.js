import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Home() {
  return (
    <View style={styles.pagina}>
      <View style={styles.header}>
        <TextInput placeholder="Search" placeholderTextColor="#a5a5a5" style={styles.title} />
        <Ionicons name="search" size={24} color="white" style={styles.searchIcon} />
      </View>

      <View style={styles.mainCard}>
        <Image source={require('../assets/images/NextKick.png')} style={styles.bikeImage} />
        <Text style={styles.legenda}>Encontre o jogador que falta para seu time</Text>
      </View>

      <View style={styles.filtragem}>
        <Filtro title="ALL" />
        <Filtro title="ATA" />
        <Filtro title="MEI" />
        <Filtro title="DEF" />
        <Filtro title="GOL" />
      </View>

      <View style={styles.cardsContainer}>
        <ProductCard nome="Romário" posicao="Centro-Avante" price="R$10.000,00" />
        <ProductCard nome="Jailson" posicao="Goleiro" price="R$600,00" />
        <ProductCard nome="Luva de pedreiro" posicao="Ponta-Direita" price="R$2.000,00" />
        <ProductCard nome="Luva de pedreiro" posicao="Ponta-Esquerda" price="R$1.500,00" />
      </View>

      <View style={styles.navbar}>
        <Ionicons name="home" size={24} color="#7cdd66" />
        <Ionicons name="storefront" size={24} color="white" />
        <Ionicons name="heart" size={24} color="white" />
        <Ionicons name="person" size={24} color="white" />
        <Ionicons name="arrow-back" size={24} color="white" />
      </View>
    </View>
  );
}

function Filtro({ title }) {
  return (
    <TouchableOpacity style={styles.filterButton}>
      <Text style={styles.filterText}>{title}</Text>
    </TouchableOpacity>
  );
}

function ProductCard({ nome, posicao, price }) {
  return (
    <View style={styles.productCard}>
      <Image source={require('../assets/images/jogador.png')} style={styles.productImage} />
      <Text style={styles.productTitle}>{nome}</Text>
      <Text style={styles.productDescription}>{posicao}</Text>
      <Text style={styles.productPrice}>{price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  pagina: {
    flex: 1,
    backgroundColor: '#002b36',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#073642',
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderWidth: 1,
    borderBottomColor: 'white'
  },
  title: {
    backgroundColor: 'white',
    width: '85%',
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 8,
    color: '#333',
    fontWeight: 'bold'
  },
  searchIcon: {
    backgroundColor: '#2aa198',
    padding: 10,
    borderRadius: 15,
  },
  mainCard: {
    backgroundColor: '#e3ffcc',
    borderRadius: 15,
    margin: 20,
    alignItems: 'center',

    borderWidth: 1,
    borderColor: 'white',
    transform: [{ perspective: 1000 }, { rotateX: '-5deg' }, { rotateY: '22deg' }],
  },
  bikeImage: {
    width: '100%',
    height: 200,
    borderRadius: 15,
  },
  filtragem: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  filterButton: {
    backgroundColor: '#eee8d5',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#586e75',
    shadowColor: '#fff',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 5, 
  },

  filterText: {
    color: '#073642',
    fontSize: 14,
    fontWeight: 'bold',
  },
  cardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    paddingHorizontal: 10,
    
  },
  productCard: {
    backgroundColor: '#586e75',
    borderRadius: 10,
    padding: 10,
    width: '45%',
    marginVertical: 10,
    alignItems: 'center',
  
    shadowColor: '#fff',
    shadowOpacity: 0.3,
    shadowOffset: { width: 20, height: 10 },
    shadowRadius: 10,
    elevation: 5, 
  },

  productImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginBottom: 10,
  },
  productTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
    textTransform: 'uppercase'
  },
  productDescription: {
    color: 'black',
    fontSize: 12,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  productPrice: {
    color: '#5fc64d',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#073642',
    paddingVertical: 15,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  legenda: {
    color: 'black',
    textTransform: 'uppercase',
    fontWeight: 'bold'
  }
});

