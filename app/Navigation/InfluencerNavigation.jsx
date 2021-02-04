import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import InfluencerScreen from '../Screens/InfluencerScreen';
import InfluencerDetailScreen from '../Screens/InfluencerDetailScreen';
import CreateProfileScreen from '../Screens/CreateProfileScreen';


const Stack = createStackNavigator();



export default function InfluencerNavigation() {
    return (
        <Stack.Navigator initialRouteName='Influencer'>
            <Stack.Screen name='Influencer' component={InfluencerScreen} options={{headerShown:false}}/>
            <Stack.Screen name='Influencer Details' component={InfluencerDetailScreen} />
            <Stack.Screen name='Create Profile' component={CreateProfileScreen} />
            
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({})
