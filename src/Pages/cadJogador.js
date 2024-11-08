import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Image, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ImageBackground } from 'react-native';

function CadJogador() {
  const navigation = useNavigation();
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [idade, setIdade] = useState('');
  const [rg, setRg] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!nome || !email || !telefone || !idade || !rg || !password) {
      Alert.alert("Error", "Please fill out all fields.");
    } else {
      Alert.alert("Success", `Welcome, ${nome}!`);
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

          <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('CadJogador2')}>
            <Text style={styles.loginButtonText}>Continuar cadastro</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Started')}>
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
  logo: {
    width: 300,
    height: 190
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
    borderColor: 'rgba(255, 255, 255, 0.5)'
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
