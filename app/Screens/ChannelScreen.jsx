import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { chatColor } from '../config/colors'
import Constants from "expo-constants";
import AppButton from '../Common/AppButton';

export default function ChannelScreen({navigation}) {
    return (
        <View style={styles.screen}>
            <Text>Heellllooo</Text>
            <AppButton title='go back' onPress={()=>navigation.goBack()} />
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        height:'100%',
        width:'100%',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: chatColor
    },
})
