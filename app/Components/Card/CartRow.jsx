import React from 'react'
import { StyleSheet, Text, Image, TouchableOpacity, View,Dimensions } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import {danger, lightGray, primary, secondary} from '../../config/colors'

import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';

import AppText from '../../Common/AppText'
import { removeItemCart } from '../../Redux/cart/cartAction';



const { width } = Dimensions.get('window')

export default function CartRow({user}) {

    const navigation = useNavigation()
    const dispatch = useDispatch()

    const handleRemove = () => dispatch(removeItemCart(user.id))


    return (
        <TouchableOpacity onPress={()=>navigation.navigate('Influencer Details', user)} style={styles.container}>
           <Image  style={styles.image} source={{uri: user.image || imageHolder}} resizeMode='cover'/>
           <View style={styles.flex}>
                <View style={styles.textContainer}>
                    <AppText style={styles.name}>{user.name}</AppText>
                    <Text style={styles.price}>{user.price} EGP</Text>
                </View>
                <View style={styles.iconContainer}>
                    <AntDesign  name="message1" size={26} color={primary} />
                    <AntDesign 
                        style={styles.icon} 
                        name="delete" 
                        size={26} 
                        color={danger} 
                        onPress={()=>handleRemove()}/>
                </View>

           </View>
        </TouchableOpacity>
    )
}

const imageHolder ='http://eswarhospitals.com/wp-content/uploads/2020/04/blank-profile-picture-973460_640.png'

const styles = StyleSheet.create({
    container:{
        marginVertical: 20,
        width: '80%',
        height: width/2 + 60,
        marginLeft: '10%',
        backgroundColor: '#eaeaea',
        borderRadius: 25,
        

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        
        elevation: 5,
    },
    image:{
        borderTopLeftRadius:25,
        borderTopRightRadius:25,
        width:'100%',
        height: '65%'
    },
    flex:{
        display:'flex',
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
