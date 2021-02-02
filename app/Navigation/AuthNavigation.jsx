import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../Screens/WelcomeScreen';
import LoginScreen from '../Screens/LoginScreen';
import RegisterScreen from '../Screens/RegisterScreen';

const Stack = createStackNavigator();

export default function AuthNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen component={WelcomeScreen} name='Home' />
            <Stack.Screen component={LoginScreen} name='Login' />
            <Stack.Screen component={RegisterScreen} name='Register' />
       </Stack.Navigator>

    )
}

const styles = StyleSheet.create({})
