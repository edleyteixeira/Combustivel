import { setStatusBarBackgroundColor } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import {estilos} from '../css/Css';

export default props => {
  return (

      <View style={estilos.bloco}>
          <Text>Digite o preço da Gasolina</Text>
          <TextInput style={estilos.txt}
          keyboardType='numeric'
          clearTextOnFocus={text=>setGasol('')}
          onChangeText={text=>props.setando(text)}/>
      </View>


  )};

