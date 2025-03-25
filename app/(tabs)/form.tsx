import React, { useState } from "react";
import {View,Text, TextInput, Button, StyleSheet, Alert} from 'react-native';

export default function name(){
    const[name, setName] = useState('');

    function confirm(){
    if(name.trim()===""){
        Alert.alert("Erro. Por favor digite seu nome.");
        console.log("Erro! nome vazio");
        return
    }
    Alert.alert(`Bem-vindo!, ${name}`, "Sua entrada foi concluida com sucesso!");
    console.log(`Nome digitado: ${name}`)
  }

  return(
    <View style = {styles.container}>
        <Text style= {styles.titulo}>Bem vindo!</Text>
        <TextInput style = {styles.input} placeholder="Digite seu nome: "
            value={name}
            onChangeText= {setName}
        />

        <Button title="Confirmar entrada" onPress={confirm}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20
    },

    input: {
        borderWidth: 1,
        padding: 10,
        width: 200,
        marginBottom: 10,
        borderRadius: 5
    },
});