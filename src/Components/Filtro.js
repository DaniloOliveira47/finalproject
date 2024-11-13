import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function Filtro(props) {
  return (
    <Pressable style={styles.container} >
      <Text style={styles.text}>{props.title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 70,
    height: 70,
    borderRadius: 15,
    backgroundColor: '#002a00',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 12
  },
});
