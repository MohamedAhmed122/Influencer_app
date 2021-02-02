import React from 'react'
import { StyleSheet, Text, TouchableOpacity, } from 'react-native'

import { primary, white } from '../config/colors'

export default function AppButton({inverted, title, onPress , color= primary}) {
    return (
        <TouchableOpacity 
           onPress={onPress} 
           style={[
                inverted ?styles.smallContainer :styles.container,
                {backgroundColor: color }]}
        >
            <Text style={inverted ? styles.smallText : styles.text}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: primary,
        width:'98%',
        padding: 13,
        borderRadius:25,
        alignItems:'center',
        justifyContent:'center',
        marginTop:20,
        alignSelf:'center'
    },
    smallContainer:{
        backgroundColor: primary,
        paddingVertical: 10,
        paddingHorizontal: 17,
        borderRadius:30,
        display:"flex",
        alignItems:'center',
        justifyContent:'center',
        marginTop:15,
        alignSelf:'center'
    },
    smallText:{
        fontSize:16,
        color: white,
    },
    text:{
        fontSize:18,
        color: white,
        textTransform:"uppercase",
        fontWeight:'bold'
    }
})