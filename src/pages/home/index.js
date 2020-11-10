import React from 'react';
import { View, Text,StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import Shoes from '../../component/shoes';

export default function Home() {
  const navigation = useNavigation();

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={require('../../assets/images/banner.png')}
            style={styles.image}/>
        </View>

        <View style={styles.textContainer}>
        <Text style={styles.text}>TÊNIS</Text>
            <Text style={[styles.text, { color: '#CECECF'} ]}>•</Text>
            <Text style={[styles.text, { color: '#CECECF'} ]}>MASCULINO</Text>
            <TouchableOpacity style={{position: 'absolute', right: 0, alignSelf: 'center'}}>
              <MaterialIcons
                name="filter-list"
                size={24}
                color="#000"
              />
            </TouchableOpacity>
        </View>

        <View style={styles.line} />

        <ScrollView>
          <Text style={styles.text}>LANÇAMENTOS</Text>

          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <Shoes img={require('../../assets/images/1.png')} cost="R$140,90" onClick={()=> navigation.navigate('Detail') }>
              Nike Air Max Dia
            </Shoes>
            <Shoes img={require('../../assets/images/2.png')} cost="R$280,90" onClick={()=> alert('CLICOU') }>
              Nike Downshifter 10
            </Shoes>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <Shoes img={require('../../assets/images/3.png')} cost="R$340,00" onClick={()=> alert('CLICOU')}>
                Nike Air Max Dia
            </Shoes>
            <Shoes img={require('../../assets/images/4.png')} cost="R$200,00" onClick={()=> alert('CLICOU')}>
                Nike Downshifter 10
            </Shoes>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <Shoes img={require('../../assets/images/5.png')} cost="R$140,00" onClick={()=> alert('CLICOU')}>
                Nike Air Max Dia Sujeito Programador
            </Shoes>
            <Shoes img={require('../../assets/images/6.png')} cost="R$100,00" onClick={()=> alert('CLICOU')}>
                Nike Downshifter 10
            </Shoes>
          </View>

        </ScrollView>

      </View>
    );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    width: '100%',
    backgroundColor: '#FFF'
  },
  header:{
    marginBottom: 8
  },
  image:{
    width: '100%'
  },
  textContainer:{
    flexDirection: 'row',
    marginVertical: '5%',
    marginHorizontal: '5%'
  },
  text:{
    fontFamily: 'Anton_400Regular',
    fontSize: 26,
    marginHorizontal: '1%'
  },
  line:{
    borderBottomColor: '#D8d8d8',
    borderBottomWidth: 2,
  }
});  
