import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Header() {
    return (
        <View style={estilos.topo}>
            <Image 
                source={require('../assets/images/Logo.png')} 
                style={estilos.logo}
            />
            <View style={estilos.containerPesquisa}>
                <TextInput
                    style={estilos.inputPesquisa}
                    placeholder="Pesquisar..."
                    placeholderTextColor="#ccc"
                />
                <TouchableOpacity style={estilos.botaoSettings}>
                    <Ionicons name="settings" size={24} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: 180,
        backgroundColor: '#609d50',
        paddingHorizontal: 10,
        paddingTop: 20,
        alignItems: "center",
        shadowColor: "white",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.9,
        shadowRadius: 20,
        elevation: 120
    },
    logo: {
        width: 300,
        height: 100,
        resizeMode: 'contain',
        marginBottom: 10
    },
    containerPesquisa: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        paddingHorizontal: 10
    },
    inputPesquisa: {
        flex: 1,
        height: 40,
        backgroundColor: "white",
        borderRadius: 10,
        paddingHorizontal: 15,
        marginRight: 10
    },
    botaoSettings: {
        padding: 8,
        backgroundColor: "#333",
        borderRadius: 20
    }
});
