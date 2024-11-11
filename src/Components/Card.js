import React from 'react'
import { Button, Image, ImageBackground, StyleSheet, Text, View } from 'react-native'

export default function Card(props) {
    return (
      
            <View style={styles.card}>
                  <Image style={styles.imagem} source={require('../assets/images/grama.png')}/>
                <Text style={styles.cardTitle}></Text>
                <Text style={styles.cardContent}>
                    {props.content}
                </Text>
               
            </View>
       
    )
}

const styles = StyleSheet.create({
    card: {
        marginLeft: 50,
        borderRadius: 20,
        backgroundColor: '#103a0c',
        marginTop: 12,
        height: 200,
        width: 400,
        transform: [{ perspective: 600 }, { rotateX: '-5deg' }, { rotateY: '22deg' }],
        borderWidth: 2,
        borderColor: '#bfdfa9'
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    cardContent: {
        fontSize: 14,
        marginBottom: 10,
    },
    imagem: {
        width: '100%',
        height: '100%',
        borderRadius: 20
    }
});
