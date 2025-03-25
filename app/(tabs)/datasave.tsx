import React, {useState, useEffect} from "react";
import {View, TextInput, Text, Button, StyleSheet} from 'react-native'
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App(){
    const[nome, setNome] = useState('');

    useEffect(() =>{
        carregarNome();
    },[])

    async function carregarNome(){
        const nomeSalvo = await AsyncStorage.getItem('nome')

        if(nomeSalvo) setNome(nomeSalvo);
    }

    async function salvarNome(){
        await AsyncStorage.setItem('nome', nome);
    }

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Digite seu nome</Text>
            <TextInput style={styles.input}
            placeholder="Digite seu nome"
            value={nome}
            onChangeText={setNome}/>

            <Button title="Salvar" onPress={salvarNome}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
        
    },

    titulo: {
        fontSize: 24,
        fontWeight: 'black',
        marginBottom: 20,
        color: '#3a63df'
    },

    input: {
        borderWidth: 1,
        padding: 10,
        width: 250,
        marginBottom: 10,
        borderRadius: 5,
        textAlign: 'center'
    }


});