import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

import { useSelector } from 'react-redux'

import Constants from "expo-constants";
import CartRow from '../Components/Card/CartRow';
import AppText from '../Common/AppText';
import { orange, primary } from '../config/colors';
import AppButton from '../Common/AppButton';

export default function FavoriteScreen() {

     const {carts} = useSelector(state => state.cart)
    return (
        <ScrollView style={styles.screen}>
            { carts.length > 0?
            <>
            <AppText style={styles.text}>
                Get in touch with your favorite Influencer
            </AppText>
            {carts.map(user => <CartRow key={user.id} user={user} />)}
            </>:
            <View style={styles.container}> 
                <AppText style={styles.text}>
                    You haven't added Influencer to your favorite yet
                </AppText>
                <AppButton color={orange} title='Go Back' />
            </View>
        }
        
        <View style={{margin: 20,}}></View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    screen:{
        height:'100%',
        width:'100%',
        paddingTop: Constants.statusBarHeight,
    },
    text:{
        textAlign:'center',
        marginTop: 20,
        color: primary,
    },
    container:{
        // height:'100%',
        top:'60%',
        
    }
})
