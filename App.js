import React, { useState } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, SafeAreaView, TextInput} from 'react-native';
import api from './src/services/api'

export default function App(){
  const [cep, setCep] = useState('');

  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.area}>
        <Text style={styles.text}>Digite o CEP desejado</Text>
        <TextInput
          style={styles.input}
          placeholder='Ex: 79003241'
          value={cep}
          onChangeText={(value) => setCep(value)}
          keyboardType='numeric'
          />
      </View>

      <View style={styles.buttonsArea}>
        <TouchableOpacity style={[styles.button, {backgroundColor: '#1D75CD'}]}>
          <Text style={styles.buttonText}>
            Buscar 
          </Text>
        </TouchableOpacity>
                <TouchableOpacity style={[styles.button, {backgroundColor: '#CD3E1D'}]}>
          <Text style={styles.buttonText}>
            Limpar
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.resultArea}>
        <Text style={styles.resultItemText}>CEP: 79000000</Text>
        <Text style={styles.resultItemText}>Logradouro: Rua Jesus is</Text>
        <Text style={styles.resultItemText}>Bairro: Centro</Text>
        <Text style={styles.resultItemText}>Cidade: São Paulo</Text>
        <Text style={styles.resultItemText}>Estado: SP</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  area: {
    alignItems: 'center',
  },
  text: {
    marginTop: 25,
    marginBottom: 15,
    fontSize: 25,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 5,
    width: '90%',
    padding: 10,
    fontSize: 18,
  },
  buttonsArea: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'space-around'
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 22,
    color: '#FFF',
  },
  resultArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultItemText:{
    fontSize: 22,
  },
})