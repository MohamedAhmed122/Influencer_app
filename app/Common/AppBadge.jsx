import React from 'react'
import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import { primary, secondary } from '../config/colors'

export default function AppBadge({title, color}) {
    return (
        <TouchableOpacity style={[styles.container,{ backgroundColor: color}]}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: secondary,
        paddingVertical: 10,
        paddingHorizontal: 17,
        borderRadius:30,
       marginHorizontal: 10,
       marginTop: 9,
    },
    text:{
        color:primary,
    }
})
