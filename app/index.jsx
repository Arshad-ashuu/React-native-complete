import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function index() {

  return (
    <SafeAreaView style={styles.container}>
      <View>
      <Text>App</Text>
      <Link href="/CoreComponents">CoreComponents</Link>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
   
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
