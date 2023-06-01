import { useEffect, useState } from 'react';
import {StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import * as Font from 'expo-font'

export default function App() {

  const [fonteCarregada, setFonteCarregada] = useState(false);
  const [Somar, setSoma] = useState(0);
  const Contador = () => {
    setSoma(Somar + 1);
  };

  async function loadFonts() {
    await Font.loadAsync({
      geologic_regular: require('./assets/Geologica/static/Geologica_Auto-Regular.ttf'),
      geologic_bold: require('./assets/Geologica/static/Geologica-Bold.ttf'),
      geologic_light: require('./assets/Geologica/static/Geologica-Light.ttf')
    });
  }

  useEffect(() => {
    loadFonts()
      .then(() => {
        setFonteCarregada(true);
      })
      .catch((error) => {
        console.log('Ocorreu um erro', error);
      })
  }, []);

  return (
    <View style={styles.container}>
      {fonteCarregada ?
        <Text style={{ fontFamily: 'geologic_regular', fontSize: 30 }}>Bem vindo!</Text>
        :
        <Text>Bem vindo!</Text>
      }
      <View>
        <Text style={{ fontSize: 50 }}>Contador: {Somar} </Text>
      </View>

        <View style={styles.Center}>
          <TouchableHighlight
          style={styles.button}
          onPress={Contador}>
            <Text style={{ fontSize: 15 }}>Clique para somar</Text>
          </TouchableHighlight>
        </View>
      </View>
      
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  button:{
    justifyContent: 'center',
        alignItems: 'center',
        elevation: 15,
        backgroundColor: 'pink',
        width: 150,
        height: 150,
        borderRadius: 100,
        position: 'absolute',
        marginTop:120
  },

  Center:{
    alignItems: 'center',
   
}
});
