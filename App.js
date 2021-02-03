import React from 'react';

import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './app/Navigation/TabNavigation';

import { store } from './app/Redux/Store'


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
    <Provider store={store}>
      <NavigationContainer>
        {/* <AuthNavigation /> */}
        <TabNavigation />
      </NavigationContainer>

    </Provider>

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
