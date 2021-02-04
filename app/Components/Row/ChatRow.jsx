import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import AppText from '../../Common/AppText'
import { gray, white } from '../../config/colors'

export default function ChatRow({items, onPress}) {

    return (
        <TouchableOpacity onPress={onPress} style={styles.MainContainer}>
            <View style={styles.flex}>
                <Image source={{uri : items.image || imageHolder}} resizeMode='cover' style={styles.img} />
                <View>
                    <AppText style={styles.name}>{items.name}</AppText>
                    <Text style={styles.message}>Message</Text>
                </View>
            </View>
            <View>
                <Text style={styles.date}>{items.date}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    MainContainer:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        margin: 15,
    },
    flex:{
        display:'flex',
        alignItems:'center',
        flexDirection:'row',
    },
    img:{
        width: 55,
        height:55,
        borderRadius:27,
        marginRight: 23,
    },
     name:{
        color: white,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    message: {color: gray},

    date:{ 
        color: white, 
        marginRight: 10,
    },
})


const imageHolder ='http://eswarhospitals.com/wp-content/uploads/2020/04/blank-profile-picture-973460_640.png'