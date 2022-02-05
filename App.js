import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Homescreen from './Components/Screens/Homescreen';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Homescreen/>
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