import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Image, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ImageBackground } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

function CadJogador() {
  const navigation = useNavigation();
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [idade, setIdade] = useState('');
  const [rg, setRg] = useState('');
  const [foto, setFoto] = useState(null);

  const handleNext = () => {
    if (!nome || !email || !telefone || !idade || !rg || !foto) {
      Alert.alert("Erro", "Por favor, preencha todos os campos.");
    } else {
      navigation.navigate('CadJogador2', {
        nome,
        email,
        telefone,
        idade,
        rg,
        foto,
      });
    }
  };

  const selecionarFoto = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setFoto(result.assets[0].uri);
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

          <TextInput
            style={styles.input}
            placeholder="Nome"
            value={nome}
            onChangeText={setNome}
          />

          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <TextInput
            style={styles.input}
            placeholder="Telefone"
            value={telefone}
            onChangeText={setTelefone}
            keyboardType="phone-pad"
          />

          <TextInput
            style={styles.input}
            placeholder="Idade"
            value={idade}
            onChangeText={setIdade}
            keyboardType="numeric"
          />

          <TextInput
            style={styles.input}
            placeholder="RG"
            value={rg}
            onChangeText={setRg}
            keyboardType="numeric"
          />

          <TouchableOpacity style={styles.input} onPress={selecionarFoto}>
            <Text style={styles.inputText}>
              {foto ? 'Foto selecionada' : 'Selecionar Foto do Jogador'}
            </Text>
          </TouchableOpacity>

          {foto && <Image source={{ uri: foto }} style={styles.fotoPreview} />}

          <TouchableOpacity style={styles.loginButton} onPress={handleNext}>
            <Text style={styles.loginButtonText}>Continuar cadastro</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Started')}>
            <Text style={styles.forgotPassword}>Não é o que procura? volte ao início</Text>
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
    shadowColor: '#00',
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    borderWidth: 4,
    borderColor: 'rgba(255, 255, 255, 0.5)',
  },
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 8,
    borderRadius: 15,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  inputText: {
    color: '#333',
    fontSize: 16,
  },
  fotoPreview: {
    width: 100,
    height: 100,
    marginTop: 15,
    borderRadius: 50,
  },
  loginButton: {
    width: '100%',
    padding: 12,
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

export default CadJogador;