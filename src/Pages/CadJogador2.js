
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Image, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ImageBackground } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import axios from 'axios';

function CadJogador2({ route }) {
  const navigation = useNavigation();
  const { nome, email, telefone, idade, rg, foto } = route.params;

  const [posicao, setPosicao] = useState('');
  const [pernaDominante, setPernaDominante] = useState('');
  const [descricao, setDescricao] = useState('');
  const [salario, setSalario] = useState('')

  const handleFinalizarCadastro = async () => {
    if (!posicao || !pernaDominante) {
      Alert.alert("Error", "Please fill out all fields.");
    } else {
      const jogador = {
        nome,
        email,
        telefone,
        idade,
        rg,
        posicao,
        pernaDominante,
        descricao,
        salario,
        foto
      };

      try {
        const response = await axios.post('http://10.0.2.2:3000/jogadores', jogador);
        Alert.alert("Success", "Cadastro realizado com sucesso!");
        navigation.navigate('Started');
      } catch (error) {
        Alert.alert("Error", "Falha ao cadastrar. Tente novamente.");
        console.error(error);
      }
    }
  };
  return (
    <ImageBackground
      source={require('../assets/images/grama.png')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../assets/images/Logo.png')} />
        <View style={styles.form}>
          <Text style={styles.title}>Pronto para seu próximo passo atleta?</Text>
          <Text style={styles.subtitle}>Cadastre-se</Text>

          <Text style={styles.pickerLabel}>Fale sobre suas caracteristicas e habilidades</Text>
          <TextInput
            style={styles.input}
            value={descricao}
            onChangeText={setDescricao}
          />
           <Text style={styles.pickerLabel}>Quanto você deseja receber pelo torneio?</Text>
            <TextInput
          style={styles.salario}
          onChangeText={setSalario}
          value={salario}
          keyboardType="numeric"
        />
          <Text style={styles.pickerLabel}>Posição</Text>
          <Picker
            selectedValue={posicao}
            style={styles.picker}
            onValueChange={(itemValue) => setPosicao(itemValue)}
          >
            <Picker.Item label="Selecione uma posição" value="" />
            <Picker.Item label="Goleiro" value="Goleiro" />
            <Picker.Item label="Defensor" value="Defensor" />
            <Picker.Item label="Meio-campo" value="Meio-campo" />
            <Picker.Item label="Atacante" value="Atacante" />
          </Picker>

          <Text style={styles.pickerLabel}>Perna Dominante</Text>
          <Picker
            selectedValue={pernaDominante}
            style={styles.picker}
            onValueChange={(itemValue) => setPernaDominante(itemValue)}
          >
            <Picker.Item label="Selecione a perna dominante" value="" />
            <Picker.Item label="Direita" value="Direita" />
            <Picker.Item label="Esquerda" value="Esquerda" />
            <Picker.Item label="Ambas" value="Ambas" />
          </Picker>

          <TouchableOpacity style={styles.loginButton} onPress={handleFinalizarCadastro}>
            <Text style={styles.loginButtonText}>Finalizar Cadastro</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={ () => navigation.navigate('Started')}>
            <Text style={styles.forgotPassword}>Não é o que procura? volte ao inicio</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  salario: {
    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: 10,
    marginVertical: 8,
    borderRadius: 15,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    minHeight: 50, 
    fontSize: 16,
    textAlignVertical: 'center', 
  },
  input: {
    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: 10,
    marginVertical: 8,
    borderRadius: 15,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    minHeight: 50, 
    fontSize: 16,
    textAlignVertical: 'center', 
  },
  picker: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 15,
    marginVertical: 8,
    minHeight: 50, 
    justifyContent: 'center', 
  },
  pickerLabel: {
    color: 'white',
    alignSelf: 'flex-start',
    marginLeft: 10,
    marginTop: 10,
  },
  logo: {
    width: 300,
    height: 190,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: 'white',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 22,
    fontWeight: '600',
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
  },
  form: {
    width: '100%',
    maxWidth: 400,
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 15,
    borderWidth: 4,
    borderColor: 'rgba(255, 255, 255, 0.5)',
  },
  loginButton: {
    width: '100%',
    padding: 15,
    borderRadius: 15,
    backgroundColor: 'green',
    alignItems: 'center',
    marginTop: 15,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgotPassword: {
    color: 'white',
    marginTop: 15,
    textDecorationLine: 'underline',
    fontSize: 14,
  },
});


export default CadJogador2;
