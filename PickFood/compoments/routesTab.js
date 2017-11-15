import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { TabNavigator } from 'react-navigation';
import PF_Home from '../../PF_Home'

const MyApp = TabNavigator({
    Home: {
        screen: PF_Home,
    },
}, {
    tabBarPosition: 'bottom',
    animationEnabled: true,
    tabBarOptions: {
        showIcon: true,
        activeTintColor: '#e5e5e9',
        labelStyle: {
            fontSize: 25,
        },
        style: {
            backgroundColor: '#D91E18',
        },
    },
})

export default MyApp;