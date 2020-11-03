import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// import { Container } from './styles';

const Button = () => {
  return <View style={styles.container}>
      <TouchableOpacity style={styles.btnContainer}>
        <Text style= {styles.title}>Comprar</Text>
      </TouchableOpacity>
  </View>;
}

export default Button;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnContainer: {
        width: '90%',
        height: 50,
        backgroundColor: '#17181a',
        borderRadius: 5,
        marginVertical: '5%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 17,
        colo: '#fff'
    }

});