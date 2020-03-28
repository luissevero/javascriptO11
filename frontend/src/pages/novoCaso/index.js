import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';
import api from '../../services/api';

import logoImagem from '../../assets/logo.svg';

import './styles.css';

export default function NovoCaso(){
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [valor, setValor] = useState('');
    const idOng = localStorage.getItem('ongId');
    const history = useHistory();

    async function handleNovoCaso(e){
        e.preventDefault();

        const dados = {
            titulo,
            descricao,
            valor,
        };

        try{
            await api.post('casos', dados, {
                headers: {
                    Authorization: idOng,
                }
            });
            history.push('/perfil');
        }catch(err){
            alert("Erro ao fazer o cadastro. Tente novamente.");
        }

    }

    return (
        <div className="novo_caso-container">
        <div className="conteudo">
            <section>
                <img src={logoImagem} alt="Be The Hero" />
                <h1>Cadastrar novo caso</h1>
                <p>Descreva o caso detalhadamente para encontrar um Herói para resolver isto.</p>
                <Link className="back-link" to="/perfil">
                    <FiArrowLeft size={16} color="#E02041" />
                    Voltar para Perfil
                </Link> 
            </section>
            <form onSubmit={handleNovoCaso}>
                <input 
                    placeholder="Título do caso"
                    value={titulo}
                    onChange = {e => setTitulo(e.target.value)}                 
                />
                <textarea 
                    placeholder="Descrição" 
                    value={descricao}
                    onChange = {e => setDescricao(e.target.value)}                
                />
               <input 
                    placeholder="Valor em Reais"
                    value={valor}
                    onChange = {e => setValor(e.target.value)}            
                />
                <button className="button" type="submit">Cadastrar</button> 
            </form>
        </div>
    </div>
    );
}