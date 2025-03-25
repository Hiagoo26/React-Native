import { useState } from "react";
import {View, Text, TextInput, Button, StyleSheet, Keyboard} from "react-native";


export default function cal(){
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [result, setResult] = useState("");

    function soma(){
        const soma = parseFloat(num1) + parseFloat(num2);
        setResult(soma);
    }

    function subtrari(){
        const subtrai = parseFloat(num1) - parseFloat(num2);
        setResult(subtrai);

    }

    function multiplica(){
        const multi = parseFloat(num1) * parseFloat(num2);
        setResult(multi)
    }

    function divide(){
        const div = parseFloat(num1) / parseFloat(num2)
        setResult(div)
    }

    return(
        <View style ={styles.container}>
            <Text style ={styles.titulo}>Calculadora</Text>

            <TextInput
            style= {styles.input}
            placeholder="Digite um numero"
            keyboardType="numeric"
            returnKeyType="done"
            onSubmitEditing={Keyboard.dismiss}
            value={num1}
            onChangeText={setNum1}
            />

            <TextInput
            style= {styles.input}
            placeholder="Digite outro numero"
            keyboardType="numeric"
            returnKeyType="done"
            onSubmitEditing={Keyboard.dismiss}
            value={num2}
            onChangeText={setNum2}
            />

            <Button title= "Somar" onPress={soma}/>
            <Button title="Subtrair" onPress={subtrari}/>
            <Button title="Multiplica" onPress={multiplica}/>
            <Button title="Divide" onPress={divide}/>

            {result !== null && (
                <Text style={styles.resultado}>Resultado: {result}</Text>
             )}
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
        marginBottom: 20
    },
    input: {
        borderWidth: 1,
        padding: 10,
        width: 200,
        marginBottom: 10,
        borderRadius: 5,
        textAlign: 'center'
    },
    resultado: {
        fontSize: 10,
        fontWeight: 'bold',
        marginTop: 20,
        color: 'purple'
    }
});