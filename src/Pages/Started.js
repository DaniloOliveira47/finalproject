import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image, ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native';

export default function Started() {
 const navigation = useNavigation();
    return (
        <ImageBackground
            source={require('../assets/images/start.png')}
            style={styles.backgroundImage}
        >
            <View style={styles.logoCont}>
            <Image 
                source={require('../assets/images/Logo.png')}
                style={styles.logo} 
            />
            </View>
            <View style={styles.overlay}>
                <Text style={styles.text}>Um atleta buscando um clube ou um proprietário buscando o melhor elenco?</Text>
                <Pressable style={styles.button} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.buttonText}>Começar</Text>
                </Pressable>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center', 
    },
    logo: {
        width: 380, 
        height: 380,
        marginBottom: 20, 
        resizeMode: 'contain',
        borderRadius: 20,
        marginTop: 290
    },
    
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        padding: 25,
        marginHorizontal: 10,
        borderRadius: 10,
        elevation: 5,
        height: '30%',
        justifyContent: 'center',
        marginTop: -110
    },
    text: {
        color: 'white',
        fontSize: 29,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 8,
        backgroundColor: 'green',
        marginTop: 20,
        borderRadius: 10
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        
    },
});
