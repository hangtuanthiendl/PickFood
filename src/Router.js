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
import CategoryMain from './screen/Main/CategoryMain'
import SplashScreen from './screen/Account/SplashScreen';
import SiwperScreen from './screen/Account/SwiperScreen';
import SearchBar from './screen/Main/SearchBar';
import Detail_Map from './screen/Map/Detail_map';
import TabMenu from './screen/Detail/TabMenu';
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
    },
    Detail_Screen:{
        screen:Detail_Map,
        navigationOptions: { header: null }
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
            tabBarLabel: 'Home',
            tabBarIcon: ({ tintColor }) => (
                <Icon name='ios-home-outline' style={{fontSize: 28, color: tintColor}}/>
              ),
        }
    },
    Home:{
        screen: History,
        navigationOptions:{
            tabBarLabel: 'Order',
            tabBarIcon: ({ tintColor }) => (
                <Icon
                  name="ios-list-box-outline" style={{fontSize: 28, color: tintColor}}
                />
              ),
        }
    },
    Map: {
        screen: Map,
        navigationOptions: {
            tabBarLabel: 'Map',
            tabBarIcon: ({tintColor}) => (
                <Icon name= 'ios-map-outline' style ={{fontSize: 28, color:tintColor}}/>
            ),
        }
    },
    User:{ 
        screen: User,
        navigationOptions:{
            tabBarLabel: 'Accout',
            tabBarIcon: ({ tintColor }) => (
                <Icon
                  name="ios-contact-outline" style={{fontSize: 28, color: tintColor}}
                />
              ),
        }
    }
},
{   
    initialRouteName: 'Main',
    lazyLoad: true,
    swipeEnabled: true,
    animationEnabled: true,
    tabBarPosition : 'bottom',
    tabBarOptions: {
        showLabel: false,
        showIcon: true,
        style: {
            backgroundColor: '#ffff',
            borderTopColor: '#bdc3c7',
            borderTopWidth: 0.5
        },
        inactiveTintColor: 'black',
        activeTintColor: '#e53935',
        indicatorStyle  : {
            backgroundColor :'#ecf0f1'
        },
        pressColor: '#ffff',
        pressOpacity: 100,
    }
}
)
export const Root = StackNavigator({
    TabMenu: {screen: TabMenu},
    Tab: {screen: TabBar}, 
    Detail_Screen:{screen:Detail_Map,},
    Swiper:{screen:SiwperScreen},
    User: {screen: User},
    SearchBar:{screen:SearchBar},
    Login: {screen: Login},
    Register: {screen: Register},
    Detail: {screen: Detail},
    CheckLogin: {screen : CheckLogin},
    ModalShop: {screen : ModalShop},
    ModalCart: {screen : ModalCart},
    DetailHistory: {screen : DetailHistory},   
    Setting: {screen : Setting},   
    History: {screen : History},   
    CategoryMain: {screen: CategoryMain}

},
{
    initialRouteName: "CheckLogin",
    headerMode: "none",
})
export const Root1 = StackNavigator({
    Tab: {screen: TabBar}, 
    Detail_Screen:{screen:Detail_Map,},
    Swiper:{screen:SiwperScreen},
    User: {screen: User},
    SearchBar:{screen:SearchBar},
    Login: {screen: Login},
    Register: {screen: Register},
    Detail: {screen: Detail},
    CheckLogin: {screen : CheckLogin},
    ModalShop: {screen : ModalShop},
    ModalCart: {screen : ModalCart},
    DetailHistory: {screen : DetailHistory},   
    Setting: {screen : Setting},   
    History: {screen : History},   
    CategoryMain: {screen: CategoryMain}

},
{
    initialRouteName: "Swiper",
    headerMode: "none",
   
})

const styles = StyleSheet.create({
    icon: {
      width: 25,
      height: 25,
    },
  });
