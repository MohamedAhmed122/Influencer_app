import React from 'react'
import { StyleSheet,  } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import ChannelScreen from '../Screens/ChannelScreen';
import ChatScreen from '../Screens/ChatScreen'



const Stack = createStackNavigator();



export default function ChatNavigation() {

    
      
    return (
        <Stack.Navigator initialRouteName='Chat'>
            <Stack.Screen 
                name='Chat' 
                component={ChatScreen}
                options={{headerShown:false}} 
            />
            <Stack.Screen 
                options={{headerShown:false}} 
                name='Channel' 
                component={ChannelScreen} 
            />
            
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({})
