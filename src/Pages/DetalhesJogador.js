import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, ImageBackground, Image, ScrollView, TextInput } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import axios from 'axios';

function DetalhesJogador() {
  const navigation = useNavigation();
  const route = useRoute();
  const { jogador } = route.params;
  const [clube, setClube] = React.useState('');

  const handleSalvar = async () => {
    if (!clube.trim()) {
      Alert.alert('Erro', 'Por favor, insira o nome do clube.');
      return;
    }

    try {
      const response = await axios.get('http://10.0.2.2:3000/usuarios');
      const usuarios = response.data;

      const usuario = usuarios.find((user) => user.nomeClube === clube);

      if (!usuario) {
        Alert.alert('Erro', 'Clube não encontrado para associar o jogador.');
        return;
      }

      const jogadorComClube = {
        ...jogador,
        clube: clube,
        escudo: usuario.escudo,
      };

      await axios.post('http://10.0.2.2:3000/transferencias', jogadorComClube);

      await axios.delete(`http://10.0.2.2:3000/jogadores/${jogador.id}`);

      const usuarioAtualizado = {
        ...usuario,
        jogadores: [...usuario.jogadores, jogador],
      };

      await axios.put(`http://10.0.2.2:3000/usuarios/${usuario.id}`, usuarioAtualizado);

      Alert.alert(
        'Informações salvas',
        `O jogador ${jogador.nome} foi contratado com sucesso pelo clube ${clube}!`
      );
      navigation.navigate('Home');
    } catch (error) {
      console.error('Erro ao salvar jogador:', error);
      Alert.alert('Erro', 'Ocorreu um erro ao contratar o jogador.');
    }
  };

  return (
    <ImageBackground source={require('../assets/images/campo.png')} style={styles.backgroundImage}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.page}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Detalhes do Jogador</Text>
          </View>

          <View style={styles.card}>
            <Image source={{ uri: jogador.foto }} style={styles.playerImage} />

            <View style={styles.infoContainer}>
              <View style={styles.linha}>
                <Text style={styles.label}>Nome:</Text>
                <Text style={styles.infoText}>{jogador.nome}</Text>
              </View>

              <View style={styles.linha}>
                <Text style={styles.label}>Idade:</Text>
                <Text style={styles.infoText}>{jogador.idade}</Text>
              </View>

              <View style={styles.linha}>
                <Text style={styles.label}>Email:</Text>
                <Text style={styles.infoText}>{jogador.email}</Text>
              </View>

              <View style={styles.linha}>
                <Text style={styles.label}>Telefone:</Text>
                <Text style={styles.infoText}>{jogador.telefone}</Text>
              </View>

              <View style={styles.linha}>
                <Text style={styles.label}>Posição:</Text>
                <Text style={styles.infoText}>{jogador.posicao}</Text>
              </View>

              <View style={styles.linha}>
                <Text style={styles.label}>Perna Dominante:</Text>
                <Text style={styles.infoText}>{jogador.pernaDominante}</Text>
              </View>

              <View style={styles.linha}>
                <Text style={styles.label}>Salário:</Text>
                <Text style={styles.infoText}>R${jogador.salario},00</Text>
              </View>

              <View style={styles.descricaoContainer}>
                <Text style={styles.label}>Descrição:</Text>
                <Text style={styles.infoText}>
                  {jogador.descricao || 'Nenhuma descrição disponível para este jogador.'}
                </Text>
              </View>
            </View>

            <TextInput
              placeholder="Digite o nome do clube"
              placeholderTextColor="#999"
              style={styles.input}
              value={clube}
              onChangeText={setClube}
            />

            <TouchableOpacity style={styles.saveButton} onPress={handleSalvar}>
              <Text style={styles.saveButtonText}>Contratar</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.logoutButton} onPress={() => navigation.navigate('Home')}>
            <Text style={styles.logoutText}>Sair</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    paddingTop: 20,
  },
  page: {
    width: '90%',
    maxWidth: 400,
    backgroundColor: '#002b36',
    borderRadius: 15,
    padding: 15,
    alignItems: 'center',
    shadowColor: "#fff",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 6.27,
    elevation: 10,
    marginTop: 100
  },
  linha: {
    flexDirection: 'row',
    gap: 20
  },
  header: {
    width: '100%',
    paddingVertical: 10,
    backgroundColor: '#073642',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#7cdd66',
  },
  card: {
    marginTop: 15,
    backgroundColor: '#586e75',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    width: '100%',
  },
  playerImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,

  },
  infoContainer: {
    width: '100%',
    marginBottom: 20,

  },
  label: {
    fontSize: 16,
    color: '#7cdd66',
    fontWeight: '600',
    marginBottom: 5,
  },
  infoText: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 15,
    fontStyle: 'italic',
  },
  saveButton: {
    backgroundColor: '#073642',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    width: '100%',
  },
  saveButtonText: {
    fontSize: 16,
    color: '#7cdd66',
    fontWeight: 'bold',
  },
  logoutButton: {
    backgroundColor: '#073642',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 20,
    width: 90
  },
  logoutText: {
    color: '#7cdd66',
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 15,
    color: '#333',
  },
  descricaoContainer: {
    marginTop: 10,
  },
});

export default DetalhesJogador;
