import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Input } from './src/components/Input';
import { ButtonType } from './src/components/ButtonType';
import Login from './src/pages/login';

export default function App() {
  return (
    <View style={styles.container}>

      <StatusBar style="auto" />
      
      <Login></Login>
      
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
