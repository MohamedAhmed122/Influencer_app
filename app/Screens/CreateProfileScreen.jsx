import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

import * as Yup from 'yup'
import Constants from "expo-constants";

import AppForm from '../Components/Form/AppForm'
import AppFormField from '../Components/Form/AppFormField'
import SubmitButton from '../Components/Form/SubmitButton'
import AppText from '../Common/AppText'
import { primary, white } from '../config/colors'

const validationSchema = Yup.object().shape({
    name:Yup.string().required().label('Name') ,
    phone: Yup.string().required().label('Phone') ,
    city: Yup.string().required().label('City') ,
    price: Yup.string().required().label('Price') ,
    bio: Yup.string().required().label('Bio') ,
    
});

export default function CreateProfileScreen() {
    return (
        <ScrollView style={styles.screen}>
            <View style={styles.register}>
                <AppForm
                    initialValues={{
                        name: '', phone:'', city: '',price: '',
                        instagramAccount: '', facebookAccount:'',
                        bio:'', friend:'', follower:'',
                        subscriber:'', youtubeAccount :""
                    }}
                    validationSchema={validationSchema}
                    onSubmit={(values)=> console.log(values)}
                >
                    <AppText style={styles.text}>Insert some information about you</AppText>
                    <AppFormField icon='person' name='name' placeholder='Name'/>
                    <AppFormField icon='phone' placeholder='Phone Number' name='phone'/>
                    <AppFormField icon='description' placeholder='Bio' name='bio'/>
                    <AppFormField icon='add-location' placeholder='City' name='city' />
                    <AppFormField icon='money' placeholder='Price' name='price' />
                    <AppText style={styles.text}>Information about your facebook account</AppText>
                    <AppFormField icon='facebook' placeholder='Facebook Account' name='facebookAccount'/>
                    <AppFormField icon='supervisor-account' placeholder='How many friend on facebook?' name='friend'/>
                    <AppText style={styles.text}>Information about your instagram account</AppText>
                    <AppFormField icon='face' placeholder='Instagram Acoount' name='instagramAccount' />
                    <AppFormField icon='supervisor-account' placeholder='How many friend on instagram?' name='follower' />
                    <AppText style={styles.text}>Information about your Youtube account</AppText>
                    <AppFormField icon='ondemand-video' placeholder='Youtube Channel' name='youtubeAccount' />
                    <AppFormField icon='supervisor-account' placeholder='How many subscriber on youtube?' name='subscriber' />
                   
                    <SubmitButton title='Create' color={primary} />
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
    
    text:{
        textAlign:'center'
    }
   
})