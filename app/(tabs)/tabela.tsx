import { useState, useEffect } from "react";
import {View, Text, TextInput, Button, StyleSheet, FlatList, Alert, ImageBackground} from 'react-native'
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App(){
    const [nome, setNome] = useState('');
    const [nomes, setNomes] = useState([]);

    useEffect(() => {
        const salvaNome = async () => {
            const nomesSalvos = await AsyncStorage.getItem('nomes');
        }
        salvaNome();
}, []);

    const addNome = async () => {
        if(nome.trim() === "") {
            Alert.alert('Adicione um nome!')
            return;
        }
        const attNomes = [...nomes, nome];
        setNomes(attNomes);
        setNome('')

        await AsyncStorage.setItem('nomes', attNomes.join(','))
    }



    return (
        <View style={styles.tudo}>
            <ImageBackground 
            source={require('../../assets/images/OnePiece.jpeg')} 
            resizeMode='cover' 
            style={styles.image}>  
                <View style = {styles.container}>
                    <Text style= {styles.titulo}>Insira os nomes para salvar na lista</Text>
                    <TextInput
                         style= {styles.input}
                         placeholder="Nome"
                        value={nome}
                        onChangeText={setNome}
                     />

                    <Button title="Adicionar" onPress={addNome}/>
                    <FlatList
                         data={nomes}
                        keyExtractor={(item, index) => index.toString()}
                         renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}/>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: 20
    },
    titulo: {
        color: 'black',
        fontSize: 18,
        marginBottom: 10,
        margin: 20
    },
    input: {
        borderWidth: 1,
        padding: 10,
        width: 250,
        marginBottom: 10,
        borderRadius: 5,
        textAlign: 'center'
    },
    item: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        width: 250,
        textAlign: 'center'
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    tudo: {
        flex: 1,
    }

});