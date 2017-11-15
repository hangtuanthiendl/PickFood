import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    StatusBar ,
    TouchableOpacity
} from 'react-native';

import Logo from './PF_Logo';
import Form from './PF_Form';

export default class PF_SignIn extends Component<{}> {
    signup() {
       // Actions.signup()
    }

    render() {
        return(
            <View style={styles.container}>
                <Logo/>
                <Form type="Login"/>
                <View style={styles.signupTextCont}>
                    <Text style={styles.signupText}>Don't have an account yet?</Text>
                    <TouchableOpacity onPress={this.signup}><Text style={styles.signupButton}> Signup</Text></TouchableOpacity>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container : {
        backgroundColor:'#27ae60',
        flex: 1,
        alignItems:'center',
        justifyContent :'center'
    },
    signupTextCont : {
        flexGrow: 1,
        alignItems:'flex-end',
        justifyContent :'center',
        paddingVertical:16,
        flexDirection:'row'
    },
    signupText: {
        color:'rgba(255,255,255,0.6)',
        fontSize:16
    },
    signupButton: {
        color:'#ffffff',
        fontSize:16,
        fontWeight:'500'
    }
});