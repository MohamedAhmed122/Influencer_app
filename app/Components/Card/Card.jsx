import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View,Image, Dimensions } from 'react-native'
import AppButton from '../../Common/AppButton'
import AppText from '../../Common/AppText'
import {  primary, secondary,  } from '../../config/colors'


const { width } = Dimensions.get('window')

export default function Card({item}) {
    const {name, followers, price, image } = item;
    const imageHolder ='http://eswarhospitals.com/wp-content/uploads/2020/04/blank-profile-picture-973460_640.png'
    return (
        <View style={{width :'50%'}}> 
        <TouchableOpacity style={styles.container}>
          <Image 
            resizeMode='cover'
            style={styles.image} 
            source={{ url: image ||imageHolder}} 
        />
          <View style={styles.textContainer}>
              <AppText>
                  {name.length > 15 ? name.substring(0, 15-3)+ '...' : name}
                </AppText>
              <Text style={styles.price} >{price}EGP</Text>
              <AppButton inverted title='View Profile' color={secondary}  />
          </View>
        </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: width / 2 -20,
        height: width / 1.5,
        marginBottom: 20,
        marginTop:50,
        backgroundColor: '#dbeeff',
        alignItems:'center',
        marginLeft:10,
        borderRadius: 20,
    },
    image:{
        width: width /2 -20 -20,
        height: width /2 -20 -30,
        // position:'absolute',
        top: -35,
        borderRadius:20,
    },
    textContainer:{
        alignItems:'center',
    },
    price:{
        color: primary,
        marginTop:5,
  
    },

})
