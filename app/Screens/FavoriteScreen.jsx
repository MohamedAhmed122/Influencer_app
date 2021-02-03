import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import Constants from "expo-constants";
import CartRow from '../Components/Card/CartRow';

export default function FavoriteScreen() {
    return (
        <ScrollView style={styles.screen}>
           <CartRow />
          
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    screen:{
        height:'100%',
        width:'100%',
        paddingTop: Constants.statusBarHeight,
    },
})
