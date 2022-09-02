import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
      <Text>Open up App.js to start working on your app!</Text>
      <Text style={styles.texto}>ECT2525</Text>
      <Image style={styles.imagem} source={require('./assets/imagens/ufrn.png')}></Image>
      <StatusBar style="auto" />
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
  texto :{
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'monospace',
    color: "#F3A545"
  },
  imagem : {
    height: 200,
    resizeMode: 'contain'
  }
});
