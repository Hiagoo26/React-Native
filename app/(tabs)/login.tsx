import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const [logado, setLogado] = useState(false);
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');
  const [NomeSalvo, setNomesalvo] = useState('');

  useEffect(() => {
    const Nomesalvo = async () => {
      const name = await AsyncStorage.getItem('nome');
      if (name) {
        setNomesalvo(name);
        setLogado(true);
      }
    };

    Nomesalvo();
  }, []);

  const login = {
    nomeCerto: 'Hiago',
    senhaCerta: '2611'
  };

  const loginfeito = async () => {
    if (nome === login.nomeCerto && senha === login.senhaCerta) {
      await AsyncStorage.setItem('nome', nome);
      setNomesalvo(nome);
      setLogado(true);
      Alert.alert("Login feito!");
    } else {
      Alert.alert("Erro, usuário ou senha incorretos");
    }
  };

  if (logado) {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Bem-vindo, {NomeSalvo}!</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Bem-vindo!</Text>
      <Text style={styles.titulo}>Faça o login para continuar</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
        keyboardType="numeric"
        returnKeyType="done"
      />
      <Button title="Logar" onPress={loginfeito} />
    </View>
  );
}

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
    marginBottom: 20,
    color: '#3a63df',
    textAlign: 'center'
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