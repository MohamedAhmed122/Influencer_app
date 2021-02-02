import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppButton from './app/Common/AppButton';
import AppInput from './app/Common/AppInput';
import AppText from './app/Common/AppText';
import LoginScreen from './app/Screens/LoginScreen';
import RegisterScreen from './app/Screens/RegisterScreen';
import WelcomeScreen from './app/Screens/WelcomeScreen';

export default function App() {
  return (
    // <View style={styles.container}>
    //   <AppText>Open up App.js to start working on your app!</AppText>
    //   <AppInput icon='person' placeholder='Search for' />
    //   <AppButton inverted title='new button' />
    //   <StatusBar style="auto" />
    // </View>
    <View>

      <RegisterScreen />
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
