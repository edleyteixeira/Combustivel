import React  from 'react';
import {  Text, View } from 'react-native';
import {estilos} from '../css/Css';
import { useState } from 'react';

export default props => {
  return (

      <View style={estilos.bloco}>
          <Text>Melhor Combustivel: {props.resultado}</Text>
         
      </View>


  )};

