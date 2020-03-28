import React, {useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiPower, FiTrash2} from 'react-icons/fi';
import api from '../../services/api';

import imagemLogo from '../../assets/logo.svg';

import './styles.css';

export default function Perfil(){
    const [casos, setCasos] = useState([]);
    const ongNome = localStorage.getItem('ongNome');
    const ongId = localStorage.getItem('ongId');
    const history = useHistory();

    useEffect(() => {
        api.get('perfil', {
            headers: {
                Authorization: ongId, 
            }
        }).then(response => {
           setCasos(response.data); 
        })
    }, [ongId]);
    /*
    function perguntarApagarCaso(id){
        if(confirm("Deseja confirmar a exclusão?")){
            handleDeletarCaso(id);
        }else{

        }
    }
    */
    function handleLogout(){
        //if(confirm("Deseja fazer o logout?")){
            localStorage.clear();
            history.push('/');
        //}
    }

    async function handleDeletarCaso(id){
        try{
            await api.delete(`casos/${id}`, {
                headers: {
                    Authorization: ongId,
                }
            });
            setCasos(casos.filter(caso => caso.id !== id));
        }catch(err){
            alert("Erro ao deletar caso. Tente novamente");
        }
    }

    return(
        <div className="perfil-container">
            <header>
                <img src={imagemLogo} alt="Be The Hero"/>
                <span>Bem vindo(a), {ongNome}</span>
                <Link className="button" to="/casos/novo">Cadastrar novo caso</Link>
                <button onClick={handleLogout} type="button">
                    <FiPower size={18} color="#E02041"/>
                </button>
            </header>

            <h1>Casos Cadastrados</h1>
            <ul>
                {casos.map(caso => (
                    <li key={caso.id}>
                    <strong>CASO:</strong>
                    <p>{caso.titulo}</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>{caso.descricao}</p>

                    <strong>VALOR:</strong>
                    <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(caso.valor)}</p>

                        <button onClick={() => handleDeletarCaso(caso.id)} type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>
                ))}
            </ul>
        </div>
    );
}