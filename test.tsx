import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default  () => {
   

  const [Somar, setSoma] = useState(0);

  const Contador = () => {
    setSoma(Somar + 1);
  };

  return (
    <View>
      <Text style={{ fontSize: 30, textAlign: 'center', marginVertical: 20, marginTop:100  }}>
        Contador: {Somar}
      </Text>
  
  <View  style={styles.button}>
      <Button
      title="Clique para somar" onPress={Contador} />
      </View>
    </View>
  );
};
   

 
  

 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  button:{
    marginVertical:350,
    marginHorizontal:140,
    width:150,
    borderRadius:100,

   

  }
});