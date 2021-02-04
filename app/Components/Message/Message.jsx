import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { white } from '../../config/colors'

export default function Message() {
    return (
        <View >
            <View style={styles.container}>
                <View style={styles.messageSender}>
                    <Text style={styles.textSender}>Hello this Sara</Text>
                </View>
            </View>
            <View style={styles.containerRight}>
                <View style={styles.messageReceiver}>
                    <Text style={styles.textReceiver}> Lorem, ipsum dolor sit amet consectetur adipisicing elit. </Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        display:'flex',
      alignItems:'flex-start'
        
    },
    containerRight:{
        display:'flex',
        alignItems:'flex-end'
    },
    messageSender:{
        alignItems:'flex-start',
        backgroundColor : white,
        paddingVertical: 15,
        paddingHorizontal: 17,
        borderRadius:35,
       marginHorizontal: 10,
       marginTop: 9,
       marginBottom: 10,
    },
    messageReceiver:{
        backgroundColor : '#03A9F4',
        paddingVertical: 15,
        paddingHorizontal: 17,
        borderRadius:35,
       marginHorizontal: 10,
       marginTop: 15,
       marginBottom: 10,
    },
    textSender:{ 
        fontWeight:'bold',
        fontSize: 16,
    },
    textReceiver:{
        fontWeight:'bold',
        fontSize:16,
        color: white,
    }
})
