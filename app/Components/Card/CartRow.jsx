import React from 'react'
import { StyleSheet, Text, Image, TouchableOpacity, View,Dimensions } from 'react-native'
import AppText from '../../Common/AppText'
import { AntDesign } from '@expo/vector-icons';

import {danger, lightGray, primary, secondary} from '../../config/colors'


const { width } = Dimensions.get('window')

export default function CartRow() {
    const imageHolder ='http://eswarhospitals.com/wp-content/uploads/2020/04/blank-profile-picture-973460_640.png'
    return (
        <TouchableOpacity style={styles.container}>
           <Image  style={styles.image} source={{uri: imageHolder}} resizeMode='cover'/>
           <View style={styles.flex}>
                <View style={styles.textContainer}>
                    <AppText style={styles.name}>Mohamed Youssef</AppText>
                    <Text style={styles.price}>500 EGP</Text>
                </View>
                <View style={styles.iconContainer}>
                    <AntDesign  name="message1" size={24} color={primary} />
                    <AntDesign style={styles.icon} name="delete" size={24} color={danger} />
                </View>

           </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        marginVertical: 20,
        width: '80%',
        height: width/2 + 50,
        marginLeft: '10%',
        backgroundColor: lightGray,
        borderRadius: 25,
        overflow:'hidden',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    image:{
        width:'100%',
        height: '65%'
    },
    flex:{
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'row',
        padding:20,
    },
    name:{
        fontWeight:'bold',
        color: primary,
        marginBottom:10,
    },
    price:{
        fontWeight:'bold',
        color: secondary,
    },
    icon:{
        marginVertical:10,
    }
})
