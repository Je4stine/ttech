import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import StackNavigator from './Components/Navigation';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StackNavigator/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1D3B87',
  },
});