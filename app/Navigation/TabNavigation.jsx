import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import InfluencerScreen from '../Screens/InfluencerScreen';
import { Feather } from '@expo/vector-icons';
import AccountScreen from '../Screens/AccountScreen';
import FavoriteScreen from '../Screens/FavoriteScreen';
import { primary } from '../config/colors';
import AuthNavigation from './AuthNavigation';
import { AntDesign } from '@expo/vector-icons';
import InfluencerNavigation from './InfluencerNavigation';

const Tab = createBottomTabNavigator()
export default function TabNavigation() {
    const [open, isOpen] =  useState(false)
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: primary,
                inactiveTintColor:'gray'
            }}
        >
            <Tab.Screen 
                component={InfluencerNavigation} 
                name='Influencers'
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
                component={AuthNavigation} 
                name='Account'
                options={{
                    tabBarIcon :({color, size})=>(
                        <AntDesign name="login" size={size} color={color} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({})
