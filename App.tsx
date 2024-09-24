import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Input } from './components/Input';
import { ButtonType } from './components/ButtonType';

export default function App() {
  return (
    <View style={styles.container}>

      <Text>Seja bem-vindo</Text>
      
      <Input name="E-mail"></Input>
      <Input name="Senha"></Input>

      <ButtonType name="Entrar"></ButtonType>
      <ButtonType name="Cadastrar"></ButtonType>

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
});
