import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Keyboard
} from 'react-native';
import api from './src/services/api';

export default function App() {
  const [cep, setCep] = useState('');
  const inputRef = useRef('');
  const [cepUser, setCepUser] = useState(null);

  async function search() {
    if(cep == ''){
      alert('Digite um CEP válido');
      setCep('');
      return;
    }

    try {
      const response = await api.get(`${cep}/json`);
      setCepUser(response.data)
      Keyboard.dismiss();

      console.log(response.data);
    } catch (error) {
      console.log(`ERROR: ${error}`);
    }

  }

  function clean() {
    setCep('');
    inputRef.current.focus();
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.area}>
        <Text style={styles.text}>Digite o CEP desejado</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: 79003241"
          value={cep}
          onChangeText={value => setCep(value)}
          keyboardType="numeric"
          ref={inputRef}
        />
      </View>

      <View style={styles.buttonsArea}>
        <TouchableOpacity
          style={[styles.button, {backgroundColor: '#1D75CD'}]}
          onPress={search}>
          <Text style={styles.buttonText}>Buscar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, {backgroundColor: '#CD3E1D'}]}
          onPress={clean}>
          <Text style={styles.buttonText}>Limpar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.resultArea}>
        <Text style={styles.resultItemText}>CEP: {cepUser.cep}</Text>
        <Text style={styles.resultItemText}>Logradouro: {cepUser.logradouro}</Text>
        <Text style={styles.resultItemText}>Bairro: {cepUser.bairro}</Text>
        <Text style={styles.resultItemText}>Cidade: {cepUser.localidade}</Text>
        <Text style={styles.resultItemText}>Estado: {cepUser.uf}</Text>
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
    justifyContent: 'space-around',
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
  resultItemText: {
    fontSize: 22,
  },
});
