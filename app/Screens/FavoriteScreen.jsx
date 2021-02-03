import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

import { useSelector } from 'react-redux'

import Constants from "expo-constants";
import CartRow from '../Components/Card/CartRow';

export default function FavoriteScreen() {

     const {carts} = useSelector(state => state.cart)
    return (
        <ScrollView style={styles.screen}>
            {
                carts.map(user => <CartRow key={user.id} user={user} />)
            }
          
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
