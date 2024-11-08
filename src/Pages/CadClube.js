import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ImageBackground, Image, Button } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

function CadClube() {
    const navigation = useNavigation();
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nomeClube, setNomeClube] = useState('');
    const [dataCriacao, setDataCriacao] = useState('');
    const [escudo, setEscudo] = useState(null);

    const handleCadastro = () => {
        if (!nome || !email || !password || !nomeClube || !dataCriacao || !escudo) {
            Alert.alert("Erro", "Por favor, preencha todos os campos.");
        } else {
            Alert.alert("Cadastro bem-sucedido", `Cadastro de ${nomeClube} realizado com sucesso!`);
        }
    };


    const selecionarEscudo = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        if (!result.canceled) {
            setEscudo(result.assets[0].uri);
        }
    };

    return (
        <ImageBackground
            source={require('../assets/images/campo.png')}
            style={styles.backgroundImage}
        >
            <View style={styles.container}>
                <View style={styles.form}>
                    <Text style={styles.title}>Crie sua conta</Text>
                    <Text style={styles.subtitle}>Cadastro do clube</Text>

                    <TextInput
                        style={styles.input}
                        placeholder="Nome do responsável"
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
                        placeholder="Senha"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Nome do clube"
                        value={nomeClube}
                        onChangeText={setNomeClube}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Data de criação (DD/MM/AAAA)"
                        value={dataCriacao}
                        onChangeText={setDataCriacao}
                        keyboardType="numeric"
                    />

                    { }
                    <TouchableOpacity style={styles.input} onPress={selecionarEscudo}>
                        <Text style={styles.inputText}>
                            {escudo ? 'Escudo selecionado' : 'Selecionar Escudo do Clube'}
                        </Text>
                    </TouchableOpacity>

                    { }
                    {escudo && <Image source={{ uri: escudo }} style={styles.escudoImage} />}

                    <TouchableOpacity style={styles.loginButton} onPress={handleCadastro}>
                        <Text style={styles.loginButtonText}>Cadastrar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.forgotPassword}>Já tem uma conta? Faça login</Text>
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
        padding: 10,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 10,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 22,
        fontWeight: '600',
        color: 'white',
        marginBottom: 30,
        textAlign: 'center',
    },
    form: {
        width: '100%',
        maxWidth: 400,
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        paddingVertical: 20,
        paddingHorizontal: 20,
        borderRadius: 15,
        elevation: 3,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
    },
    input: {
        width: '100%',
        padding: 10,
        marginVertical: 10,
        borderRadius: 15,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ddd',
    },
    inputText: {
        color: '#333',
        fontSize: 16,
    },
    escudoImage: {
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

export default CadClube;

