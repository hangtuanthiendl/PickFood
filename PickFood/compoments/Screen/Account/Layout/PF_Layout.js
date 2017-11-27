
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    StatusBar ,
    TouchableOpacity,
    Image
} from 'react-native';
import PF_Logo from "./PF_Logo";
export default class PF_SignIn extends Component<{}> {
    render() {
        return(
            <View style={{justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: '#CF000F'}}>
                <PF_Logo/>
            </View>
        )
    }
}