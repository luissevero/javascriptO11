import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import './styles.css';
import '../../global.css';

import Header from '../../Header';
import Cabecalho from '../../Cabecalho';

export default function Contador(){

  const [contador, setContador] = useState(0);
  //useState: Array[valor, função de atualização]

  function incrementar(){
    if(contador < 10){
      setContador(contador + 1);
      console.log(contador + 1);
    }
  }

  return (  
        <Header>
            Teste Contador: {contador}
            <button onClick={incrementar}>Incrementar</button>
            <Link to="/">
                        <FiLogIn size={16} color="#E02041" />
                            Retornar
                    </Link>
         </Header>        
    );
}