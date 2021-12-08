import { StatusBar } from 'react-native';
import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import {
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold
} from '@expo-google-fonts/roboto'
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { Login } from './src/screens/Login';
import { theme } from './src/global/styles/theme';
import { Routes } from './src/routes';
import { NativeBaseProvider } from 'native-base';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        <Routes />
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background
  },
});
