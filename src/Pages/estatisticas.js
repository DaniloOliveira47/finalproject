import React, { useEffect, useState } from 'react';
import { View, ScrollView, ActivityIndicator, StyleSheet } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Navbar from '../Components/NavBar';
import CartaoEstatisticas from '../Components/CartaoEstatisticas';
import Cabecalho from '../Components/Header';
import { useNavigation } from '@react-navigation/native';
import ListaTopJogadores from '../Components/topJogadores';
import CartaoDestaque from '../Components/CartaoDestaque';

export default function EstatisticasClube() {
    const navigation = useNavigation();
  const [jogadores, setJogadores] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const carregarJogadores = async () => {
      try {
        const userId = await AsyncStorage.getItem('userId');
        if (userId) {
          const response = await axios.get(`http://10.0.2.2:3000/usuarios/${userId}`);
          const jogadores = response.data?.jogadores || [];
          setJogadores(jogadores);
        }
      } catch (error) {
        console.error('Erro ao carregar jogadores:', error);
      } finally {
        setCarregando(false);
      }
    };

    carregarJogadores();
  }, []);

  if (carregando) {
    return <ActivityIndicator size="large" color="#fff" />;
  }

  const totalJogadores = jogadores.length || 0;
  const quantidadePorPosicao = (posicao) =>
    jogadores.filter((jogador) => jogador.posicao === posicao).length || 0;
  const totalSalarios = jogadores.reduce(
    (acc, jogador) => acc + parseFloat(jogador.salario || 0),
    0
  );
  const destaque = jogadores.reduce(
    (prev, curr) =>
      parseFloat(prev.salario || 0) > parseFloat(curr.salario || 0) ? prev : curr,
    jogadores[0]
  ) || {};
  const topJogadores = [...jogadores]
    .sort((a, b) => parseFloat(b.salario || 0) - parseFloat(a.salario || 0))
    .slice(0, 3);

  return (
    <View style={styles.pagina}>
      <Cabecalho titulo="Estatísticas do Clube" aoVoltar={() => navigation.goBack()} />
      <ScrollView contentContainerStyle={styles.container}>
        <CartaoEstatisticas
          titulo="Estatísticas"
          estatisticas={[
            { rotulo: 'Total de jogadores', valor: totalJogadores },
            { rotulo: 'Total em salários', valor: `R$ ${totalSalarios.toLocaleString('pt-BR')},00` },
            { rotulo: 'Atacantes', valor: quantidadePorPosicao('Atacante') },
            { rotulo: 'Meio-campistas', valor: quantidadePorPosicao('Meio-campo') },
            { rotulo: 'Zagueiros', valor: quantidadePorPosicao('Zagueiro') },
            { rotulo: 'Goleiros', valor: quantidadePorPosicao('Goleiro') },
          ]}
        />
        <CartaoDestaque destaque={destaque} />
        <ListaTopJogadores jogadores={topJogadores} />
      </ScrollView>
      <Navbar navigation={navigation} activeScreen="estatisticas" />
    </View>
  );
}

const styles = StyleSheet.create({
  pagina: {
    flex: 1,
    backgroundColor: '#002b36',
  },
  container: {
    padding: 20,
  },
});
