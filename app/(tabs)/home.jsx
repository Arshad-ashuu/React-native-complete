import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link, router } from 'expo-router';
import { TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const Index = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.header}>Welcome back</Text>
      <View style={styles.groupB}>
        <TouchableOpacity onPress={() => router.replace('/TodoApp')} style={styles.button}>
          <Text style={styles.buttonText}>Todo App</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/CoreComponents')} style={styles.button}>
          <Text style={styles.buttonText}>Core Components</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  header: {
    fontSize: 28,
    padding: 12,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  groupB: {
    flexDirection: 'row', // Arrange buttons in a row
    justifyContent: 'space-between',
    width: '80%',
  },
  button: {
    flex: 1, // Make buttons evenly spread out
    padding: 6,
    marginHorizontal: 6, // Space between buttons
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
