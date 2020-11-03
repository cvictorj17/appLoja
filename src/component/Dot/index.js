import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

// import { Container } from './styles';

const Dot = (props) => {
  return <View>
      <Text style={[styles.container,{backgroundColor: props.color}]}> </Text>

  </View>;
}

export default Dot;

const styles = StyleSheet.create({
    container: {
      width: Dimensions.get('window').width * 0.050,
      height: Dimensions.get('window').width * 0.050, 
      borderRadius: Dimensions.get('window').width * 0.050 / 2,
      marginHorizontal: '2.5%',
      elevation: 5
    }
});
