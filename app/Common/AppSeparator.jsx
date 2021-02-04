import React from 'react'
import { StyleSheet, View } from 'react-native'
import { lightGray } from '../config/colors'

export default function AppSeparator({color = lightGray}) {
    return (
        <View style={[styles.separator, {backgroundColor: color}]}></View>
    )
}

const styles = StyleSheet.create({
    separator:{
        width: '95%', 
        marginLeft: '2%',
        height: 2,
        backgroundColor: lightGray,
        
    }
}) 