import MapView from 'react-native-maps'
var MapView = require('react-native-maps');

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class PF_Home extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Shake your phone to open the developer menu.</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
