import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import api from '../../services/api';

import './styles.css';

import heroesImagem from '../../assets/heroes.png';
import logoImagem from '../../assets/logo.svg';

export default function Logon(){

    const [id, setId] = useState(''); 
    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();

        try{
            const response = await api.post('sessions', {id});
            console.log(response.data.nome);
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongNome', response.data.nome);
            history.push('/perfil');
        }catch(err){
            alert('Não existe este ID cadastrado');
            console.log("Não existe este ID cadastrado");
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImagem} alt="Be The Hero" />
                <form onSubmit={handleLogin}>
                    <h1>Faça seu Logon</h1>
                    <input 
                        placeholder="Seu ID"
                        value={id}
                        onChange={ e => setId(e.target.value)} 
                    />
                    <button className="button" type="submit">Entrar</button>
                    
                    <Link className="back-link" to="/registro">
                        <FiLogIn size={16} color="#E02041" />
                        Não tenho cadastro
                    </Link>
                    <Link to="/contador">
                        Bonus
                    </Link>
                </form>
            </section>
            <img src={heroesImagem} alt="Heroes" />
        </div>
    );
}