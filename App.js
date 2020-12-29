import React from 'react';
import { SafeAreaView } from 'react-native';
import Gasolina from './assets/components/gasolina';
import Etanol from './assets/components/etanol';
import Btn from './assets/components/btnCalc';
import Resultado from './assets/components/resultado';
import ImgResult from './assets/components/imgResultado';
import {estilos} from './assets/css/Css';
import { useState } from 'react';
import resultado from './assets/components/resultado';

export default function App() {

  const [gasol, setGasol] = useState(0)
  const [etanol, setEtanol] = useState(0)
  const [resultado, setResultado] = useState('')

  const calcular = () =>{
    if(!gasol){
      alert('Informe o preço da Gasolina');
      return 
    }
    if(!etanol){
      alert('Informe o preço do Etanol');
      return 
    }
    let res
    let calc=((etanol/gasol)*100).toFixed(0)

    if (calc > 70){
      res = 'Gasolina'
    }else{
      res = 'Etanol'
    }
    alert(`o Etanol esta custantdo ${calc}% da Gasolina, portanto é recomendado abastecer com ${res}`)
    setResultado(res)
  }

  const limpar = () =>{
    setResultado('')
  }
const setGasolina = (v) =>{
  limpar()
  setGasol(v)
}
const setEta = (v) =>{
  limpar()
  setEtanol(v)
}


  return (
    <SafeAreaView style={estilos.main}>
        <Gasolina setando={setGasolina}/>
        <Etanol setando={setEta}/>
        <Btn click={calcular}/>
        <Resultado resultado={resultado}/>
        <ImgResult comb={resultado}/>
    </SafeAreaView>
    
  );
}

