import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Navbar from '../Components/NavBar';
import { useNavigation } from '@react-navigation/native';


export default function Account() {
  const navigation = useNavigation();
 
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userId = await AsyncStorage.getItem('userId');
        
        if (userId) {
          const response = await axios.get(`http://10.0.2.2:3000/usuarios/${userId}`);
          setUserData(response.data);
        } else {
          console.log('Usuário não autenticado');
        }
      } catch (error) {
        console.error('Erro ao buscar os dados do usuário:', error);
      }
    };

    fetchUserData();
  }, []);

  if (!userData) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Carregando informações...</Text>
      </View>
    );
  }

  return (
    <View style={styles.pagina}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Informações do Clube</Text>
      </View>

      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.mainCard}>
          <Text style={styles.sectionTitle}>Detalhes do Clube</Text>
          <View style={styles.infoRow}>
            <Image style={styles.logoClube} source={{ uri: userData.escudo }} />
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Nome do responsável:</Text>
            <Text style={styles.infoValue}>{userData.nome}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Email:</Text>
            <Text style={styles.infoValue}>{userData.email}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Nome do clube:</Text>
            <Text style={styles.infoValue}>{userData.nomeClube}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Data de criação:</Text>
            <Text style={styles.infoValue}>{userData.dataCriacao}</Text>
          </View>
         
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Lema:</Text>
            <Text style={styles.infoValue}>{userData.lema}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Cores:</Text>
            <Text style={styles.infoValue}>{userData.cores}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Títulos:</Text>
            <Text style={styles.infoValue}>{userData.titulos}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Mascote:</Text>
            <Text style={styles.infoValue}>{userData.mascote}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Redes Sociais:</Text>
            <Text style={styles.infoValue}>{userData.redesSociais}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Categoria:</Text>
            <Text style={styles.infoValue}>{userData.categoria}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Visão:</Text>
            <Text style={styles.infoValue}>{userData.visao}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Endereço:</Text>
            <Text style={styles.infoValue}>{userData.endereco}</Text>
          </View>
        </View>
      </ScrollView>

      <Navbar navigation={navigation} activeScreen="Perfil" />
    </View>
  );
}

const styles = StyleSheet.create({
  pagina: {
    flex: 1,
    backgroundColor: '#002b36',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#002b36',
  },
  loadingText: {
    color: '#fff',
    fontSize: 16,
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
  logoClube: {
    alignItems: 'center',
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  container: {
    padding: 20,
  },
  mainCard: {
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
  sectionTitle: {
    color: '#7cdd66',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  infoRow: {
    flexDirection: 'row',
    flexWrap: 'wrap', 
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#404d4f',
  },
  infoLabel: {
    color: '#a5a5a5',
    fontSize: 16,
    flex: 1, 
    flexShrink: 1, 
    paddingRight: 10, 
  },
  infoValue: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    flex: 1, 
    flexShrink: 1, 
    textAlign: 'right', 
  },
});
