import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Navbar from '../Components/NavBar';


export default function MeuElenco() {
  const navigation = useNavigation();
  const [jogadores, setJogadores] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadJogadores = async () => {
      try {
        
        const userId = await AsyncStorage.getItem('userId');
        if (userId) {
          
          axios.get('http://10.0.2.2:3000/usuarios')
            .then((response) => {
              const usuarios = response.data;
              const usuarioLogado = usuarios.find(u => u.id === userId);  
              if (usuarioLogado) {
                const jogadores = usuarioLogado.jogadores || [];  
                setJogadores(jogadores);
              }
              setLoading(false);
            })
            .catch((error) => {
              console.error('Erro ao carregar jogadores:', error);
              setLoading(false);
            });
        } else {
          console.error('Usuário não logado!');
          setLoading(false);
        }
      } catch (error) {
        console.error('Erro ao acessar AsyncStorage:', error);
        setLoading(false);
      }
    };

    loadJogadores();
  }, []);

  if (loading) {
    return <Text>Carregando...</Text>;
  }

 
  const jogadoresPorPosicao = (posicao) =>
    jogadores.filter((jogador) => jogador.posicao === posicao);

 
  const renderJogadores = (posicao, titulo) => {
    const jogadoresFiltrados = jogadoresPorPosicao(posicao);
    if (jogadoresFiltrados.length === 0) {
      return (
        <View style={styles.card}>
          <Text style={styles.nenhumJogador}>Nenhum jogador</Text>
        </View>
      );
    }

    return jogadoresFiltrados.map((jogador) => (
      <View key={jogador.id} style={styles.card}>
        <Image source={{ uri: jogador.foto }} style={styles.playerImage} />
        <View style={styles.infoContainer}>
          <Text style={styles.playerName}>{jogador.nome}</Text>
          <Text style={styles.infoLabel}>Salário: R$ {jogador.salario.toLocaleString('pt-BR')},00</Text>
        </View>
      </View>
    ));
  };

  return (
    <View style={styles.pagina}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Meu Elenco</Text>
        <Ionicons name="football-outline" size={24} color="white" />
      </View>

      <ScrollView contentContainerStyle={styles.container}>
        {/* Atacantes */}
        <Text style={styles.sectionTitle}>Atacantes</Text>
        {renderJogadores('Atacante', 'Atacantes')}

        {/* Meias */}
        <Text style={styles.sectionTitle}>Meias</Text>
        {renderJogadores('Meio-campo', 'Meias')}

        {/* Defensores */}
        <Text style={styles.sectionTitle}>Defensores</Text>
        {renderJogadores('Zagueiro', 'Defensores')}

        {/* Goleiros */}
        <Text style={styles.sectionTitle}>Goleiros</Text>
        {renderJogadores('Goleiro', 'Goleiros')}
      </ScrollView>

      <Navbar navigation={navigation} activeScreen="MeuElenco" />
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
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    backgroundColor: '#073642',
    paddingTop: 15,
    paddingBottom: 15,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  container: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#7cdd66',
    marginVertical: 10,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#586e75',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    alignItems: 'center',
    shadowColor: '#fff',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
  },
  playerImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  infoContainer: {
    flex: 1,
  },
  playerName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  infoLabel: {
    color: '#a5a5a5',
    fontSize: 14,
    marginTop: 5,
  },
  nenhumJogador: {
    fontSize: 16,
    color: '#fff',
    fontStyle: 'italic',
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
