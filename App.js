import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import AuthNavigation from './app/Navigation/AuthNavigation';
import InfluencerScreen from './app/Screens/InfluencerScreen';
import TabNavigation from './app/Navigation/TabNavigation';
import InfluencerDetailScreen from './app/Screens/InfluencerDetailScreen';

export default function App() {
  return (
    // <View style={styles.container}>
    //   <AppText>Open up App.js to start working on your app!</AppText>
    //   <AppInput icon='person' placeholder='Search for' />
    //   <AppButton inverted title='new button' />
    //   <StatusBar style="auto" />
    // </View>
    // <View>

    //   <RegisterScreen />
    // </View>
    // <View>
    //    <InfluencerDetailScreen />
    // </View>
    <NavigationContainer>
      {/* <AuthNavigation /> */}
      <TabNavigation />
    </NavigationContainer>

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
