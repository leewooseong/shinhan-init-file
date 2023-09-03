import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const variable = 'variable';

  return (
    <View style={styles.container}>
      <Text>My Name is Trent!!, and I just created my first expo app!</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',

    alignItems: 'center',

    justifyContent: 'center',
  },
});
