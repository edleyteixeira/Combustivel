import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import {estilos} from '../css/Css';

export default props => {
  return (

      <View style={estilos.bloco}>
          <TouchableHighlight 
          style={estilos.btn}
          onPress={props.click}>
              <Text style={estilos.btntext}>Calcular</Text>
          </TouchableHighlight>

      </View>


  )};

