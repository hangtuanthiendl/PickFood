import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    StatusBar ,
    TouchableOpacity
} from 'react-native';

import Logo from '../SignIn/PF_Logo';
import Form from './PF_Form2';

export default class PF_SignUp extends Component<{}> {
    signup() {
        // Actions.signup()
    }
    static navigationOptions = {
        title: null,
        header: null
    };
    render() {
        return(
            <View style={styles.container}>
                <Logo/>
                <Text>Đăng kí mới</Text>
                <Form type="Login"/>
                <View style={styles.signupTextCont}>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container : {
        backgroundColor:'#CF000F',
        flex: 1,
        alignItems:'center',
        justifyContent :'center'
    },
    signupTextCont : {
        flexGrow: 1,
        alignItems:'flex-end',
        justifyContent :'center',
        paddingVertical:15,
        flexDirection:'row'
    },
    signupText: {
        color:'rgba(255,255,255,0.6)',
        fontSize:20
    },
    signupButton: {
        color:'#ffffff',
        fontSize:25,
        fontWeight:'500'
    }
});