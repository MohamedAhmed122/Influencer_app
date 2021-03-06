import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

import * as Yup from 'yup'
import Constants from "expo-constants";

import AppForm from '../Components/Form/AppForm'
import AppFormField from '../Components/Form/AppFormField'
import SubmitButton from '../Components/Form/SubmitButton'
import { primary, secondary, white } from '../config/colors'

const validationSchema = Yup.object().shape({
    name:Yup.string().required().label('User') ,
    email: Yup.string().required().email().label('Email') ,
    password: Yup.string().required().min(5).label('Password'),
    confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
});

export default function RegisterScreen() {
    return (
        <ScrollView style={styles.screen}>
            <View style={styles.logo}>
                <Text style={styles.text}>LOGO</Text>
            </View>
            <View style={styles.register}>
                <AppForm
                    initialValues={{
                        email: '', password:'', name: '',confirmPassword: ''
                    }}
                    validationSchema={validationSchema}
                    onSubmit={(values)=> console.log(values)}
                >
                    <AppFormField 
                        icon='person'
                        name='name'
                        placeholder='Name'
                        autoCapitalize='none'
                        autoCorrect
                        keyboardType='default'
                        textContentType='name'
                    />
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
                    <AppFormField 
                        icon='lock'
                        placeholder='Confirm Password'
                        autoCapitalize='none'
                        autoCorrect={false}
                        secureTextEntry
                        name='confirmPassword'
                    />
                    <SubmitButton title='Register' color={secondary} />
                </AppForm>
            </View>
            <View style={{margin: 100,}}></View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    screen:{
        paddingTop: Constants.statusBarHeight,
        height:'100%',
        backgroundColor:white,
        width:'100%',
    },
    register:{
        top: '20%'
    },
    logo :{
        top: '15%',
        alignItems:'center'
    },
    text:{
        fontSize: 40,
        color: primary
    }
})
