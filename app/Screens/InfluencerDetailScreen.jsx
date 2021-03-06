import React from 'react'
import { ScrollView, StyleSheet,Image,Dimensions, Text, View, TouchableOpacity, } from 'react-native';
import {  primary, secondary } from '../config/colors';

import { useDispatch } from 'react-redux'
import { addItemToCart } from '../Redux/cart/cartAction'

import Constants from "expo-constants";
import { Feather } from '@expo/vector-icons';
import AppText from '../Common/AppText'
import SmallCard from '../Components/Card/SmallCard';
import AppBadge from '../Common/AppBadge';
import AppButton from '../Common/AppButton'

const { width } = Dimensions.get('window')

export default function InfluencerDetailScreen({route, navigation }) {

    const user = route.params
    const dispatch = useDispatch()

    const handleAddToFavorite = () =>{
        dispatch(addItemToCart(user))
        navigation.navigate('My Favorite')
    }

    return (
        <ScrollView style={styles.screen}>
            <Image resizeMode='cover'  style={styles.img} source={{uri : user.image ||imageHolder}} />
            <TouchableOpacity onPress={()=>navigation.navigate('Create Profile')} style={styles.container}>
                <Feather name="edit" size={24} color="white" />
            </TouchableOpacity>
            <View style={styles.flex}>
                 <AppText style={styles.name}>{user.name}</AppText>
                <AppText style={styles.price}>{user.price} EGP</AppText>
            </View>
           
            <SmallCard 
                icon="instagram" 
                color="#8134af"  
                email='@mohamed_youssef' 
                numbers='100.3K' />
            <SmallCard 
                icon="facebook-square" 
                color="#3b5998"  
                email='@mohamed_youssef' 
                numbers='140.3K' />
            <SmallCard 
                icon="youtube" 
                color="#c4302b"  
                email='@mohamed_youssef' 
                numbers='100.3K' />
            <View style={styles.flexCenter}>
                <AppButton 
                    icon='message1' 
                    inverted 
                    color={primary} 
                    onPress={()=>navigation.navigate('Chats')}
                    title='Send Message'/>
                <AppButton 
                    icon='hearto' 
                    inverted 
                    color={secondary} 
                    title='Add Favorite'
                    onPress={handleAddToFavorite}/>
            </View>
            <AppText style={styles.mainText}>About {user.name}</AppText>
            <Text style={styles.smallText}>{user.description}</Text>
            <AppText style={styles.mainText}>Category</AppText>
            <View style={styles.category}>
               <AppBadge inverted color='#dbeeff' title='sport'/>
               <AppBadge inverted color='#dbeeff' title='sport'/>
               <AppBadge inverted color='#dbeeff' title='sport'/>
            </View>
           
            <View style={{
                margin: 100
            }}></View>
        </ScrollView>
       

                
    )
}

const imageHolder ='http://eswarhospitals.com/wp-content/uploads/2020/04/blank-profile-picture-973460_640.png'

const styles = StyleSheet.create({
    screen:{
        height:'100%',
        width:'100%',
        paddingTop: Constants.statusBarHeight,
    },
    img:{
        marginTop: -44,
        width: width,
        height: width - 30,
    },
    flex:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        margin:15,
    },
    container:{
        backgroundColor: primary,
        position:'absolute',
        padding: 15,
        borderRadius: 30,
        top: width -105,
        left: '83%',
    },
    name:{
        fontWeight:'bold',
        color:primary,
        fontSize:23,
    },
    price:{
        fontWeight:'bold',
        marginTop: 15,
        color: secondary
    },
    mainText:{
        marginTop: 20,
        marginBottom: 10,
        marginHorizontal: 15,
        fontWeight:'bold'

    },
    smallText:{
        width:'90%',
        fontSize:16,
        marginLeft: "5%",
    },
    category:{
        width: '90%',
        marginLeft: '5%',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        flexWrap:'wrap'
    },
    flexCenter:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
        marginVertical:30,
    }
  
})
