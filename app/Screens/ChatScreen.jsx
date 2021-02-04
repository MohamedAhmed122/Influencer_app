import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

import Constants from "expo-constants";
import { chatColor, separatorColor, white } from '../config/colors';

import AppSeparator from '../Common/AppSeparator'
import AppInput from '../Common/AppInput'
import ChatRow from '../Components/Row/ChatRow';


export default function ChatScreen({navigation}) {
    return (
        <View style={styles.screen}>
            <AppInput icon='search' endIcon='cancel' placeholder='Search For users' />
            <View style={styles.dist} />
            <FlatList 
                data={items}
                keyExtractor={(items)=> items.id.toString()}
                renderItem={({item})=> (
                    <ChatRow items ={item} onPress={()=>navigation.navigate('Channel', item)}/>
                )}
                ItemSeparatorComponent={() => <AppSeparator  color={separatorColor}/>}
            />
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
    dist:{
        marginVertical: 6,
    }
})


const items =[
    {
        id:'1',
        name:'Sara',
        date:'today',
        image: 'https://pbs.twimg.com/profile_images/1301997893923020805/irG2Vq52_400x400.jpg',
    },
    {
        id:'2',
        name:'Mohamed Youssef',
        date:'Yesterday',
        image: 'https://static.nc-myus.com/images/pub/www/uploads/image/94df1bfbdbec4914969058580e6bba27/Egyptian_model_and_actor_Mohamed_Emam_1.JPG',
    },
    {
        id:'3',
        name:'Sara Faoud',
        date:'Yesterday',
        image: 'https://static.nc-myus.com/images/pub/www/uploads/image/ca7b8a4e39cb44d081aaee124b80d633/Egyptian_socialite_and_lifestyle_blogger_Nourhanne_Eissa_posing_in_a_white_beach_coverup_1.JPG',
    },
    {
        id:'4',
        name:'Fall Ibrahim',
        date:'12/12',
        image: ''
    },
    

]