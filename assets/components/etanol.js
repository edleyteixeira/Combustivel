import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import {estilos} from '../css/Css';

export default props => {
  return (

      <View style={estilos.bloco}>
          <Text>Digite o preço do Etanol</Text>
          <TextInput style={estilos.txt}
          keyboardType='numeric'
          clearTextOnFocus={text=>setEtanol('')}
          
          onChangeText={text=>props.setando(text)}/>
      </View>


  )};
