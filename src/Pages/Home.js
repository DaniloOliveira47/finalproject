import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, ActivityIndicator, SafeAreaView, Image, } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import { useIsFocused } from '@react-navigation/native';
import Navbar from '../Components/NavBar';
import Filtro from '../Components/Filtro';
import ProductCard from '../Components/ProductCard';



export default function Home({ navigation }) {
  const [jogadores, setJogadores] = useState([]);
  const [filteredJogadores, setFilteredJogadores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filtroAtivo, setFiltroAtivo] = useState('ALL');
  const [search, setSearch] = useState('');
  const isFocused = useIsFocused();

  const carregarJogadores = () => {
    setLoading(true);
    axios
      .get('http://10.0.2.2:3000/jogadores')
      .then((response) => {
        setJogadores(response.data);
        setFilteredJogadores(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Erro ao buscar jogadores:', error);
        setLoading(false);
      });
  };

  useEffect(() => {
    if (isFocused) {
      carregarJogadores();
    }
  }, [isFocused]);

  const aplicarFiltro = (posicao) => {
    setFiltroAtivo(posicao);
    if (posicao === 'ALL') {
      setFilteredJogadores(jogadores);
    } else {
      const filtrados = jogadores.filter((jogador) => jogador.posicao === posicao);
      setFilteredJogadores(filtrados);
    }
  };

  const filtrarPorNome = (texto) => {
    setSearch(texto);


    if (texto.trim() === '') {
      aplicarFiltro(filtroAtivo);
      return;
    }


    const jogadoresFiltrados = jogadores.filter((jogador) => {
      const nomeMatch = jogador.nome.toLowerCase().includes(texto.toLowerCase());
      const posicaoMatch = filtroAtivo === 'ALL' || jogador.posicao === filtroAtivo;
      return nomeMatch && posicaoMatch;
    });

    setFilteredJogadores(jogadoresFiltrados);
  };


  return (
    <View style={styles.pagina}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <TextInput
            placeholder="Search"
            placeholderTextColor="#a5a5a5"
            style={styles.title}
            value={search}
            onChangeText={filtrarPorNome}
          />
          <Ionicons name="search" size={24} color="white" style={styles.searchIcon} />
        </View>
      </SafeAreaView>

      <View style={styles.mainCard}>
        <Image source={require('../assets/images/NextKick.png')} style={styles.bikeImage} />
        <Text style={styles.legenda}>Encontre o jogador que falta para seu time</Text>
      </View>

      <View style={styles.filtragem}>
        <Filtro title="ALL" ativo={filtroAtivo === 'ALL'} onPress={() => aplicarFiltro('ALL')} />
        <Filtro title="ATA" ativo={filtroAtivo === 'ATA'} onPress={() => aplicarFiltro('Atacante')} />
        <Filtro title="MEI" ativo={filtroAtivo === 'MEI'} onPress={() => aplicarFiltro('Meio-campo')} />
        <Filtro title="DEF" ativo={filtroAtivo === 'DEF'} onPress={() => aplicarFiltro('Defensor')} />
        <Filtro title="GOL" ativo={filtroAtivo === 'GOL'} onPress={() => aplicarFiltro('Goleiro')} />
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="#7cdd66" />
      ) : (
        <FlatList
          data={filteredJogadores}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <ProductCard
              nome={item.nome}
              posicao={item.posicao}
              pernaDominante={item.pernaDominante}
              salario={item.salario}
              foto={item.foto}
              jogador={item}
              navigation={navigation}
            />
          )}
          contentContainerStyle={styles.cardsContainer}
        />
      )}

      <Navbar navigation={navigation} activeScreen="Home" />
    </View>
  );
}

const styles = StyleSheet.create({
  pagina: {
    flex: 1,
    backgroundColor: '#002b36',
  },
  safeArea: {
    backgroundColor: '#073642',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#073642',
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
  },
  title: {
    backgroundColor: 'white',
    width: '85%',
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 8,
    color: '#333',
    fontWeight: 'bold',
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
  },
  filterText: {
    color: '#073642',
    fontSize: 14,
    fontWeight: 'bold',
  },
  cardsContainer: {
    paddingHorizontal: 10,
  },
  productCard: {
    flexDirection: 'row',
    backgroundColor: '#586e75',
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    alignItems: 'center',
    gap: 50
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 10,
    marginLeft: 20
  },
  productDetails: {
    flex: 1,
    alignItems: 'center'
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
  legenda: {
    color: 'black',
    textTransform: 'uppercase',
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
