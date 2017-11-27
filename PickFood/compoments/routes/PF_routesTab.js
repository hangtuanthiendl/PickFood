import React from 'react';
import { TabNavigator,StackNavigator } from 'react-navigation';
import { StyleSheet, Image, View, Button} from 'react-native';
import PF_ListDrink from "../Screen/Food/PF_ListDrink";
import PF_Order from "../Screen/Order/PF_Order";
import PF_Routes from "../routes/PF_routesHome";
import PF_Account from "../routes/PF_routesAccountMan";
export default MyHomeScreen = TabNavigator({
    Home: {
        screen: PF_Routes,
        navigationOptions:{
            header: {
                visible: false,
            },
            tabBarIcon: () => (
                <Image
                    source={require('../../Images/Footer/003-menu.png')}
                    style={[ao.icon]}
                />
            ),
        }
    },
    Drink: {
        screen: PF_ListDrink,
        navigationOptions:{
            tabBarIcon: () => (
                <Image
                    source={require('../../Images/Footer/001-wine.png')}
                    style={[ao.icon]}
                />
            ),
        }
    },
    Wait: {
        screen: PF_Order,
        navigationOptions:{
            tabBarIcon: ({ tintColor }) => (
                <View style={ao.iconMain}>
                <Image
                    source={require('../../Images/Footer/011-choices.png')}
                    style={[
                        {
                            tintColor: "#fff",
                            activeTintColor: '#f40500',
                            style: {
                            backgroundColor: '#D91E18',
                        },
                        }]}
                />
                </View>
            ),

        }
    },
    Order: {
        screen: PF_Order,
        navigationOptions:{
            tabBarIcon: () => (
                <Image
                    source={require('../../Images/Footer/007-shopping-cart-black-shape.png')}
                    style={[ao.icon]}
                />
            ),
        }
    },
    Account:
        {
            screen: PF_Account,
            navigationOptions:{
                tabBarIcon: () => (
                    <Image
                        source={require('../../Images/Footer/005-man-user.png')}
                        style={[ao.icon]}
                    />
                ),
            }
        }
}, {
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
    lazyLoad: true,
    tabBarOptions: {
        showIcon: true,
        showLabel: false,
            style: {
                backgroundColor: '#fff',
                borderTopColor: '#f0f0f0',
                borderTopWidth: 0.5
            },

            pressColor: '#D91E18',
            pressOpacity: 100,

        },
});

const ao = StyleSheet.create({
    icon: {
        width: 20,
        height: 20,
    },
    iconMain:{
        width: 56,
        height: 56,
        backgroundColor: '#D91E18',
        margin: 10,
        borderRadius: 10,
    },

})