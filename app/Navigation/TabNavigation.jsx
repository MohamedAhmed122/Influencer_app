import React from 'react'
import { StyleSheet,  } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import FavoriteScreen from '../Screens/FavoriteScreen';
import { primary } from '../config/colors';
import AuthNavigation from './AuthNavigation';
import { AntDesign } from '@expo/vector-icons';
import InfluencerNavigation from './InfluencerNavigation';
import ChatNavigation from './ChatNavigation'
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';


const Tab = createBottomTabNavigator()

export default function TabNavigation() {
    
    const handleTabBarVisible =(route)=>{
        const routeName = getFocusedRouteNameFromRoute(route) ;
       if (routeName === 'Channel'){
           return false;
       }
       return true
    }

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
            <Tab.Screen 
                component={ChatNavigation} 
                name='Chats'
                options={({ route }) => ({
                    tabBarVisible: handleTabBarVisible(route),
                    tabBarIcon :({color, size})=>(
                            <AntDesign name="message1" size={size} color={color} />)
                })}
            />   
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
