import React from 'react';

import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './app/Navigation/TabNavigation';

import { store } from './app/Redux/Store'


export default function App() {
  return (

    <Provider store={store}>
     
        <NavigationContainer>
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
