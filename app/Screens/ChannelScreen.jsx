import React from 'react'
import { Image, ScrollView,KeyboardAvoidingView, StyleSheet, TouchableWithoutFeedback, Text, View,Keyboard } from 'react-native'
import { chatColor, primary, white } from '../config/colors'
import Constants from "expo-constants";
import { AntDesign } from '@expo/vector-icons';

import AppText from '../Common/AppText';
import AppInput from '../Common/AppInput';
import Message from '../Components/Message/Message';

export default function ChannelScreen({route, navigation}) {

    const item = route.params 
    
    const handleBack = () => navigation.goBack()
    
    return (
        <View style={styles.screen}>
            <View style={styles.header}>
                <View style={styles.flex}>
                        <AntDesign onPress={()=>handleBack()} name="left" size={24} color={primary} />
                        <Image source={{uri : item.image}} resizeMode='cover' style={styles.image} />
                        <View style={styles.textContainer}>
                            <AppText style={styles.name}>{item.name}</AppText>
                            <Text style={styles.date}>Last Seen At ....</Text>
                        </View>
                </View>
                <AntDesign name="setting" size={24} color={primary} style={styles.icon} />
            </View>
            <ScrollView>
                <Message />
            </ScrollView>
           <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
                <KeyboardAvoidingView 
                    style={styles.sender} 
                    behavior={Platform.OS === "ios" ? "padding" : "height"} 
                >
                    <AppInput 
                        style={styles.input} 
                        endColorIcon={primary} 
                        placeholder='Send Message' 
                        endIcon='send' 
                    />
                </KeyboardAvoidingView>
           </TouchableWithoutFeedback>
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
    header:{
        display:'flex',
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor: white,
        height: 70,
        marginBottom: 20,
        width: '100%',
    },
    flex:{
        display:'flex',
        alignItems:'center',
        flexDirection:'row',
    },
    image:{
        height: 50,
        width:50,
        borderRadius: 25,
        marginRight: 40,
        marginLeft: 10,
    },
    name:{
        fontWeight:'bold'
    },
    icon:{
        marginRight: 10,
    },
    sender:{
      backgroundColor: white,
        width:'100%'
    },
    input:{
        marginBottom: 10,
    }
})
