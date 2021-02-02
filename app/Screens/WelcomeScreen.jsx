import React from 'react'
import Constants from "expo-constants";

import { StyleSheet, View, ImageBackground } from 'react-native'
import AppButton from '../Common/AppButton'
import { secondary } from '../config/colors';

export default function WelcomeScreen() {
    return (
        <ImageBackground 
            blurRadius={10}
            resizeMode='cover'
            source={require('../../assets/welcome.jpg')}
            style={styles.screen}
        >
           <View style={styles.buttonContainer}>
               <AppButton title='Login' />
               <AppButton title='Register' color={secondary} />
           </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    screen:{
        width:'100%',
        height:'100%',
    },
    image:{
        width: '50%',
        height: 50,
        position: 'relative',
        top: 100,
        alignItems: 'center',
        justifyContent:'center'
    },
    buttonContainer:{
        top:'80%',
    }
})
