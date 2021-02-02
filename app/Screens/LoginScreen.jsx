import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import * as Yup from 'yup'
import Constants from "expo-constants";

import AppForm from '../Components/Form/AppForm'
import AppFormField from '../Components/Form/AppFormField'
import SubmitButton from '../Components/Form/SubmitButton'
import { primary, white } from '../config/colors'

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email') ,
    password: Yup.string().required().min(3).label('Password')
})

export default function LoginScreen() {
    return (
        <View style={styles.screen}>
            <View style={styles.logo}>
                <Text style={styles.text}>Logo</Text>
            </View>
            <View style={styles.login}>
                <AppForm
                    initialValues={{email: '', password:''}}
                    validationSchema={validationSchema}
                    onSubmit={(values)=> console.log(values)}
                >
                    <AppFormField 
                        icon='email'
                        name='email'
                        placeholder='Email Address'
                        autoCapitalize='none'
                        autoCorrect={false}
                        keyboardType='email-address'
                        textContentType='emailAddress'
                    />
                    <AppFormField 
                        icon='lock'
                        placeholder='Password'
                        autoCapitalize='none'
                        autoCorrect={false}
                        textContentType='password'
                        secureTextEntry
                        name='password'
                    />
                    <SubmitButton title='Login' />
                </AppForm>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        paddingTop: Constants.statusBarHeight,
        height:'100%',
        backgroundColor:white,
        width:'100%',
    },
    login:{
        top: '35%'
    },
    logo :{
        top: '20%',
        alignItems:'center'
    },
    text:{
        fontSize: 40,
        color: primary
    }
})
