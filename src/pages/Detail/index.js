import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';

import Dot from '../../component/Dot';
import SizeButton from '../../component/SizeButton';
import Button from '../../component/Button';

export default function Detail({navigation}) {

  navigation.setOption ({
    headerTitle: 'Nike Dwonshift 10'
  })
  return (
      <ScrollView style={styles.container}>
        <Image
          source={require('../../assets/images/detail.png')}
          style={styles.image}
          resizeMode="cover"
        />
        <View>
            <View>
              <Text style={[styles.title, {fontSize: 24}]}>R$ 280,90</Text>
            </View>
            
            <View opacity={0.4}>
              <Text style={[styles.title, {fontSize: 30}]}>Nike Dwonshift 10</Text>
            </View>

            <View style= {styles.dotContainer}>
              <Dot color="#2379f4" />
              <Dot color="#FB6E53" />
              <Dot color="#DDD" />
              <Dot color="#000" />
            </View>

            <View style={{flexDirection: 'row', width: '100%'}}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <SizeButton bgColor='#17181a' color='#fff'>40</SizeButton>
                <SizeButton>37</SizeButton>
                <SizeButton>39</SizeButton>
                <SizeButton>42</SizeButton>
              </ScrollView>
            </View>

            <View style={styles.textContent}>
              <Text style={styles.textTitle}>Nike Dwonshift 10</Text>
              <Text style={styles.textContent}>
                O Tênis Nike Marculino Dwonshift 10 traz amortecimento e suporte autalizado, para garantir o seu conforto.
              </Text>
              <Text style={styles.textList}>
                - Categoria: Amortecimento
              </Text>
              <Text style={styles.textList}>
                - Material: Mesh
              </Text>
            </View>

            <Button />

            <View style={styles.line}/>
        </View>
      </ScrollView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      backgroundColor: '#FFF'
    },
    image: {
        width: '100%'
    },
    title: {
      fontFamily: 'Anton_400Regular',
      paddingHorizontal: '2%'
    },
    dotContainer: {
      flexDirection: 'row',
      marginVertical: '7%',
    },
    textContent: {
      fontSize: 16,
      lineHeight: 25,
      marginVertical: '2%',
      paddingHorizontal: '2%'
    },
    textTitle: {
      fontSize: 22,
      marginVertical: '2%'
    },
    textList: {
      fontSize: 16,
      lineHeight: 25
    },
    line: {
      borderWidth: 1,
      borderColor: '#ddd',
      marginVertical: '2%'
    }

});
