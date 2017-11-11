import { Image, Text, View } from 'react-native';
import React, { Component } from 'react';
export default class PF_Welcome extends Component {
    static navigationOptions = { header: null };
    render() {
        return (
            <View>
                <Image
                    source={require('../Images/bg9.jpg')}
                >
                    <Text>Shake your phone to open the developer menu.</Text>
                    <Text>Shake your phone to open the developer.</Text>
                </Image>
            </View>
        );
    }
}