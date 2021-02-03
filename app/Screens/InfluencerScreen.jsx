import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import Card from '../Components/Card/Card'
import users from '../API/users'
import { white } from '../config/colors'
import Constants from "expo-constants";
import AppInput from '../Common/AppInput'
import Banner from '../Components/Banner/Banner'


export default function InfluencerScreen({navigation}) {
    return (
        <ScrollView style={styles.screen}>
            <AppInput 
                placeholder='Search for Influencers' 
                icon='search' 
                endIcon='cancel' 
            />
            <Banner />
            <View style={styles.container}>
                {users.map(user =>( 
                <Card onPress={()=>navigation.navigate('Influencer Details', user)} key={user.id} item={user} /> ))}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    screen:{
        height:'100%',
        width:'100%',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: white
    },
    container:{
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap',
        marginTop: 20,
    },

})
