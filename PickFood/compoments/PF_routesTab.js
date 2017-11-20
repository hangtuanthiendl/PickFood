import React from 'react';
import { TabNavigator } from 'react-navigation';
import PF_Home from './PF_Home'
import PF_List from './Screen/Food/PF_ListFood'
import PF_Routes from "./PF_routes";
const MyApp = TabNavigator({
    Home: {
        screen: PF_Home,
        screen: PF_Routes,
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