import React from 'react'
import { StyleSheet, Text,TouchableOpacity, View } from 'react-native'
import {  primary } from '../../config/colors'
import { AntDesign } from '@expo/vector-icons';
import AppText from '../../Common/AppText';


export default function SmallCard({email, numbers, icon, color}) {
    return (
        <TouchableOpacity style={styles.smallCard}>
            <View style={styles.flex}>
                <AntDesign name={icon} size={24} color={color} />
                <Text style={styles.email}>{email}</Text>
            </View>
            <AppText style={styles.numbers}>{numbers}</AppText>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    smallCard:{
        marginTop: 20,
        width: '90%',
        marginLeft: '5%',
        padding: 20,
        backgroundColor:'#dbeeff',
        borderRadius:30,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    flex:{
        display:'flex',
        alignItems:'center',
        flexDirection:'row'
    },
    numbers:{
        fontWeight:'bold',
        color: primary,
    },
    email:{
       marginLeft: 10,
       color: primary

    }
})
