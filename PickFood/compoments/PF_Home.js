import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { TabNavigator } from 'react-navigation';
export default class PF_Home extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('../Images/Home.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
    };

    render() {
        return (
           <Button
                onPress={() => this.props.navigation.navigate('Notifications')}
                title="Go to notifications"
            />
            
        );
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 40,
        height: 40,
    },
});
