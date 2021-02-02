import React from 'react'
import { StyleSheet, View, ImageBackground } from 'react-native'
import AppButton from '../Common/AppButton'
import { secondary } from '../config/colors';
import { useNavigation } from '@react-navigation/native';



export default function WelcomeScreen() {

    const navigation = useNavigation();

    return (
        <ImageBackground 
            blurRadius={10}
            resizeMode='cover'
            source={require('../../assets/welcome.jpg')}
            style={styles.screen}
        >
           <View style={styles.buttonContainer}>
               <AppButton onPress={() => navigation.navigate('Login')} title='Login' />
               <AppButton onPress={() => navigation.navigate('Register')} title='Register' color={secondary} />
           </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    screen:{
        width:'100%',
        height:'100%',
    },
   
    buttonContainer:{
        top:'75%',
    }
})
