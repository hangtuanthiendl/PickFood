import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    StatusBar ,
    TouchableOpacity,
    Image
} from 'react-native';

import Logo from '../Layout/PF_Logo';
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
                    <Text style={styles.signupText}>Bạn chưa có tài khoản?</Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('PF_SignUp')}><Text style={styles.signupButton}> Đăng kí</Text></TouchableOpacity>
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
        fontSize:16
    },
    signupButton: {
        color:'#ffffff',
        fontSize:18,
        fontWeight:'500'
    }
});