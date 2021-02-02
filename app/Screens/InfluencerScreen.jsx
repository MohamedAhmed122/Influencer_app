import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import Card from '../Components/Card/Card'
import users from '../API/users'
import { white } from '../config/colors'
import Constants from "expo-constants";


export default function InfluencerScreen() {
    return (
        <ScrollView style={styles.screen}>
            <View style={styles.container}>
                {users.map(user =>( <Card key={user.id} item={user} /> ))}
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
