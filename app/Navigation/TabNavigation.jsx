import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import InfluencerScreen from '../Screens/InfluencerScreen';
import { EvilIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import AccountScreen from '../Screens/AccountScreen';
import FavoriteScreen from '../Screens/FavoriteScreen';
import { primary } from '../config/colors';

const Tab = createBottomTabNavigator()
export default function TabNavigation() {
    const [open, isOpen] =  useState(true)
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: primary,
                inactiveTintColor:'gray'
            }}
        >
            <Tab.Screen 
                component={InfluencerScreen} 
                name='Influencer'
                options={{
                    tabBarIcon :({color, size})=>(
                        <Feather name="user" size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen 
                component={FavoriteScreen} 
                name='My Favorite'
                options={{
                    tabBarIcon :({color, size})=>(
                        <Feather name="heart" size={size} color={color} />
                    )
                }}
            />
            {
                open &&
                <Tab.Screen 
                    component={AccountScreen} 
                    name='Accounts'
                    options={{
                        tabBarIcon :({color, size})=>(
                            <Feather name="message-circle" size={size} color={color} />
                        )
                    }}
                />   
            }
             <Tab.Screen 
                component={AccountScreen} 
                name='Account'
                options={{
                    tabBarIcon :({color, size})=>(
                        <Feather name="settings" size={size} color={color} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({})
