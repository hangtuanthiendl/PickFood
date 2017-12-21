import React, { Component } from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import {StyleSheet, Image, Text, View,Animated,Easing} from 'react-native';
import {Icon} from 'native-base';
import Home from './screen/Home/Home';
import Cart from './screen/Cart/Cart';
import User from './screen/Account/User';
import Shop from './screen/Cart/Shop';
import Login from './screen/Account/Login';
import Register from './screen/Account/Register';
import Setting from './screen/Account/Setting';
import Detail from './screen/Detail/Detail';
import Map from './screen/Map/Map';
import ModalShop from './screen/Detail/ModalShop'
import MainRouter from './screen/Main/MainRouter'
import TabRegister from './screen/Account/TabRegister'
import TabLogin from './screen/Account/TabLogin'
import CheckLogin from './screen/Account/CheckLogin';
import ModalCart from './screen/Detail/ModalCart'
import History from './screen/Cart/History'
import DetailHistory from './screen/Cart/DetailHistory'
export const MainStack = StackNavigator({
    MH_Main: {
        screen: MainRouter,
        navigationOptions: {
            header:null
        }
    }
})
   
export const HomeStack = StackNavigator({
    MH_Home : {
        screen: Home,
        navigationOptions : {
            header: null,
        }
    },
    MH_Detail : {
        screen: Detail,
        navigationOptions : {
            header: null,
            tabBarVisible : false
        }
    },

})
export const ShopStack = StackNavigator({
    MH_Shop : {
        screen: Shop,
        navigationOptions : {
            title: 'Shop',
        }
    },  
    MH_Home : {
        screen: Home,
        navigationOptions : {
            header: null,
        }
    },
    MH_Cart : {
        screen: Cart,
        navigationOptions : {
            title: 'Cart',
        }
    },
})
export const MapStack = StackNavigator({
    MH_Map : {
        screen: Map,
        navigationOptions:{
            header: null
        }
    }
})
export const UserStack = StackNavigator({
    MH_User: {
        screen: User,
        navigationOptions: {
            header: null,
        }
    },
    MH_Login : {
        screen: Login,
        navigationOptions: {
            header: null,
            tabBarVisible : false            
        }
    },
    MH_Register: {
        screen: Register,
        navigationOptions: {
            header: null,
            tabBarVisible : false            
        }
    },
}, {
    initialRouteName: "MH_Login",
    headerMode: "none",
}
)

export const TabBar = TabNavigator({
    Main: {
        screen: MainRouter,
        navigationOptions:{
            tabBarIcon: ({ tintColor }) => (
                <Icon name='md-aperture' style={{fontSize: 28, color: tintColor}}/>
              ),
        }
    },
    Home:{
        screen: History,
        navigationOptions:{
            tabBarIcon: ({ tintColor }) => (
                <Icon
                  name="md-list-box" style={{fontSize: 28, color: tintColor}}
                />
              ),
        }
    },
    Map: {
        screen: Map,
        navigationOptions: {
            tabBarIcon: ({tintColor}) => (
                <Icon name= 'md-map' style ={{fontSize: 28, color:tintColor}}/>
            ),
        }
    },
    User:{ 
        screen: User,
        navigationOptions:{
            tabBarIcon: ({ tintColor }) => (
                <Icon
                  name="md-contact" style={{fontSize: 28, color: tintColor}}
                />
              ),
        }
    }
},
{   
    initialRouteName: 'Main',
    lazyLoad: true,
    swipeEnabled: false,
    animationEnabled: true,
    tabBarPosition : 'bottom',
    tabBarOptions: {
        showLabel: false,
        showIcon: true,
        style: {
            backgroundColor: '#ecf0f1',
            borderTopColor: '#bdc3c7',
            borderTopWidth: 0.5
        },
        inactiveTintColor: '#bdc3c7',
        activeTintColor: '#e53935',
        indicatorStyle  : {
            backgroundColor :'#ecf0f1'
        },
        pressColor: '#e53935',
        pressOpacity: 100,
    }
}
)
export const Root = StackNavigator({
    Tab: {screen: TabBar},
    User: {screen: User},
    Login: {screen: Login},
    Register: {screen: Register},
    Detail: {screen: Detail},
    CheckLogin: {screen : CheckLogin},
    ModalShop: {screen : ModalShop},
    ModalCart: {screen : ModalCart},
    DetailHistory: {screen : DetailHistory},   
    Setting: {screen : Setting},   

},
{
    initialRouteName: "CheckLogin",
    headerMode: "none",
   // mode: 'modal',    
   
})
const styles = StyleSheet.create({
    icon: {
      width: 25,
      height: 25,
    },
  });
