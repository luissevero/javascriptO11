import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    caso: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#fff',
        marginBottom: 16,
        marginTop: 48,
    },

    casoPropriedade: {
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold',
        marginTop: 24,
    },
    
    casoValor: {
        marginTop: 8,
        fontSize: 15,
        color: '#737380',
    },

    contato: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#fff',
        marginBottom: 16,
    },

    heroTitulo: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#13131a',
        lineHeight: 30,
    },

    heroDescricao: {
        fontSize: 15,
        color: '#737380',
        marginTop: 16,
    },

    botoes: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    botao: {
        backgroundColor: '#e02041',
        borderRadius: 8,
        height: 50,
        width: '48%',
        justifyContent: 'center',
    },

    botaoTexto: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold',
        justifyContent: 'center',
        paddingHorizontal: '20%',
    },

});