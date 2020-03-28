import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';
import '../../global.css';
import logoImagem from '../../assets/logo.svg';

export default function Registro(){

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [cidade, setCidade] = useState('');
  const [uf, setUF] = useState('');

  const history = useHistory();

  async function handleRegistro(e){
    e.preventDefault();
    const dados = {
        nome,
        email,
        whatsapp,
        cidade,
        uf,                
    };
    try{
        const response = await api.post('ongs', dados);
        alert(`Seu ID de acesso: ${response.data.id}`);
        history.push('/');
    }catch(err){
        alert('erro no cadastro, tente novamente');
    }
  } 

  return (  
    <div className="registro-container">
        <div className="conteudo">
            <section>
                <img src={logoImagem} alt="Be The Hero" />
                <h1>Cadastro</h1>
                <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
                <Link className="back-link" to="/">
                    <FiArrowLeft size={16} color="#E02041" />
                    Não tenho cadastro
                </Link> 
            </section>
            <form onSubmit={handleRegistro}>
                <input 
                    placeholder="Nome da ONG" 
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                />
                <input 
                    type="email" 
                    placeholder="E-Mail" 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <input 
                    placeholder="Whatsapp" 
                    value={whatsapp}
                    onChange={e => setWhatsapp(e.target.value)}
                />
                <div className="input-grupo">
                    <input 
                        placeholder="Cidade"
                        value={cidade}
                        onChange={e => setCidade(e.target.value)}
                    />
                    <input 
                        placeholder="UF" 
                        value={uf}
                        onChange={e => setUF(e.target.value)}
                        style={{ width: 80 }}
                    />
                </div>
                <button className="button" type="submit">Cadastrar</button> 
            </form>
        </div>
    </div>       
    );
}