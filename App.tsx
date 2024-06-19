import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Home } from './src/Pages/Home';
import { Inicial } from './src/Pages/Inicial';

export default function App() {
  return (
    <>
      <StatusBar style='auto'/>
      <Home />
    </>
  );
}

