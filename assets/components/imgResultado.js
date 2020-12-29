import React from 'react';
import { Image, View } from 'react-native';
import {estilos} from '../css/Css';


export default props => {
  return (

      
      <View style={estilos.blocoImg }>

          {props.comb == '' ? 
         <Image source={require('../img/bomba.png')}
         style={estilos.bomba}
         />
        : props.comb == 'Gasolina' ?
        <Image source={require('../img/Gasolina.png')}
         style={estilos.bomba}
         />
         :
         <Image source={require('../img/Etanol.png')}
         style={estilos.bomba}
         />
  }
      </View>
               


  )}

