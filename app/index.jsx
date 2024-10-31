import { useEffect } from 'react';
import { Link, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { auth } from '../firebaseConfig'
import { onAuthStateChanged } from 'firebase/auth';

export default function Index() {
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        router.replace('/home'); // Redirect if user is logged in
      }
    });
    return unsubscribe;
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>App homepage before login</Text>
        <Link href="/login">
          <Text style={styles.linkText}>Go to Login</Text>
        </Link>
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
  linkText: {
    color: 'blue',
    marginTop: 20,
  },
});
