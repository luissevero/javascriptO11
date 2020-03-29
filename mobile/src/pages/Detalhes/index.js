import React from 'react';
import {View, Image, Text, TouchableOpacity, Linking} from 'react-native';
import {Feather} from '@expo/vector-icons';
import {useNavigation, useRoute} from '@react-navigation/native'; 
import * as MailComposer from 'expo-mail-composer';

import styles from './styles';
import logoImg from '../../assets/logo.png'

export default function Detalhes(){
    const navigation = useNavigation();
    const route = useRoute();
    const caso = route.params.caso;

    const mensagem = `Olá, ${caso.nome}, estou entrando em contato pois gostaria de ajudar no caso: ${caso.titulo} com o valor de ${Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(caso.valor)}`;

    function retornar(){
        navigation.goBack();
    }

    function enviarEmail(){
        MailComposer.composeAsync({
            subject: `Herói do caso: ${caso.titulo}`,
            recipients: [caso.email],
            body: mensagem,
        })
    }

    function enviarWhatsApp(){
        Linking.openURL(`whatsapp://send?phone=${caso.whatsapp}&text=${mensagem}`);
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg}/>
                <TouchableOpacity onPress={retornar}>
                    <Feather name="arrow-left" size={28} color='#e02041'/>
                </TouchableOpacity>
            </View>

            <View style={styles.caso}>
                <Text style={[styles.casoPropriedade, {marginTop: 0}]}>ONG:</Text>
                <Text style={styles.casoValor}>{caso.nome} de {caso.cidade}/{caso.uf}</Text>

                <Text style={styles.casoPropriedade}>Caso:</Text>
                <Text style={styles.casoValor}>{caso.descricao}</Text>

                <Text style={styles.casoPropriedade}>Valor:</Text>
                <Text style={styles.casoValor}>{
                    Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                    }).format(caso.valor)}
                </Text>
            </View>

            <View style={styles.contato}>
                <Text style={styles.heroTitulo}>Salve o dia</Text>
                <Text style={styles.heroTitulo}>Seja o herói deste caso.</Text>
                <Text style={styles.heroDescricao}>Entre em contato</Text>

                <View style={styles.botoes}>
                    <TouchableOpacity style={styles.botao} onPress={enviarWhatsApp}>
                        <Text style={styles.botaoTexto}>WhatsApp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.botao} onPress={enviarEmail}>
                        <Text style={styles.botaoTexto}>E-Mail</Text>
                    </TouchableOpacity>
                </View>
            </View>

            
        </View>
    );
}