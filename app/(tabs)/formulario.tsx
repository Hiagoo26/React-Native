import React, {useState} from "react";
import{View, Text, TextInput, Button, StyleSheet}from "react-native";

export default function App(){
    const[texto, setTexto] = useState<string>("");
    const[mensagem, setMensagem] = useState<string>("");
    const[texto1, setTexto1] = useState<string>("");
    const[texto2, setTexto2] = useState<string>("");
    
    const handlePress =()=>{
        setMensagem(`Você Digitou: ${texto} ${texto1} ${texto2}`)
    };

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Digite algo:</Text>
            <TextInput style={styles.input} placeholder="Digite Algo..." value={texto} onChangeText={setTexto}/>
            <TextInput style={styles.input} placeholder="Digite outra coisa..." value={texto1} onChangeText={setTexto1}/>
            <TextInput style={styles.input} placeholder="Digite mais outra coisa..." value={texto2} onChangeText={setTexto2}/>
 
            <Button title="Enviar" onPress={handlePress}/>
            {mensagem?<Text style={styles.resultado}>
                {mensagem}</Text>:null}

        </View>
    );
}
    const styles = StyleSheet.create({
        container:{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            padding: 20,
            backgroundColor: "#f5f5f5"
        },
        titulo:{
            fontSize: 20,
            marginBottom: 10,

        },
        input:{
            width: "75%",
            height: 40,
            borderColor: "#ccc",
            borderWidth: 1,
            borderRadius: 5,
            paddingHorizontal: 10,
            marginBottom: 10,
            backgroundColor: "#fff",
        },
        resultado:{
            marginTop: 20,
            fontSize: 18,
            color: "purple"
        }
    })

