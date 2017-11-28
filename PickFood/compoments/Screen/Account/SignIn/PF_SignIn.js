import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
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
                <View style = {{flex: 1/2}}>
                    <Logo/>
                </View>
                <View style = {{flex: 1/2}}>
                    <Text style = {styles.title}> Email của bạn?</Text>
                    <Text style = {styles.title2}>Địa chỉ email giúp bạn bảo mật tài khoản, phục hồi mật khẩu và nhận các thông tin ưu đãi dành riêng cho bạn</Text>

                    <View style = {styles.button}>
                        <Image  style={{width: 35, height: 35, resizeMode: Image.resizeMode.contain}}
                                source={require('../../../../Images/Mail alt.png')}/>
                        <TextInput style={styles.inputBox}
                           underlineColorAndroid='rgba(0,0,0,0)'
                           placeholder="Email"
                           placeholderTextColor = "#ffffff"
                           selectionColor="#fff"
                           keyboardType="email-address"
                        />
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container : {
        backgroundColor:'#fff',
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
    },
    inputBox: {
        flex: 5/8,
        color: '#D91E18',
        borderBottomColor: '#D91E18',
        borderBottomRadius: 3,
        borderBottomWidth: 1,
        paddingLeft: 10,
        paddingRight: 10,
    },
    title: {
        color: '#D91E18',
        fontSize: 19,
        fontWeight: 'bold',
        paddingLeft: 15,
        paddingRight: 15,
    },
    title2: {
        fontSize: 14,
        paddingLeft: 15,
        paddingRight: 15,
    },
    button:
        {
            margin: 10,
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#fff',
        },
});