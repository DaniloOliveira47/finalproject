import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import Navbar from '../Components/NavBar';


export default function Categories() {
  const [transferencias, setTransferencias] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    axios
      .get('http://10.0.2.2:3000/transferencias')
      .then((response) => {
        setTransferencias(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Erro ao buscar transferências:', error);
        setLoading(false);
      });
  }, []);

  const CategoryItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.foto }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.nome}</Text>
        <Text style={styles.position}>{item.posicao}</Text>
        <Text style={styles.price}>Salário: R${item.salario},00</Text>
        <Text style={styles.closedText}>FECHADO</Text>
      </View>
      <Image source={{ uri: item.escudo }} style={styles.clubBadge} />
    </View>
  );

  if (loading) {
    return (
      <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
        <ActivityIndicator size="large" color="#7cdd66" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transferências</Text>
      <FlatList
        data={transferencias}
        renderItem={({ item }) => <CategoryItem item={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
      />

      <Navbar navigation={navigation} activeScreen="Transfer" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#002b36',
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#7cdd66',
    textAlign: 'center',
    marginVertical: 20,
  },
  closedText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ff5555',
    backgroundColor: '#ffe6e6',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    textAlign: 'center',
    marginTop: 10,
    alignSelf: 'flex-start',
  },
  listContent: {
    paddingBottom: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#073642',
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
  },
  clubBadge: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginLeft: 10,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  position: {
    fontSize: 16,
    color: '#b0bec5',
  },
  price: {
    fontSize: 16,
    color: '#7cdd66',
    marginTop: 4,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#073642',
    paddingVertical: 15,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
});
