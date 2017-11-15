import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity
} from 'react-native';

export default class PF_Form2 extends Component<{}> {

    render(){
        return(
            <View style={styles.container}>
                <TextInput style={styles.inputBox}
                           underlineColorAndroid='rgba(0,0,0,0)'
                           placeholder="Email"
                           placeholderTextColor = "#ffffff"
                           selectionColor="#fff"
                           keyboardType="email-address"
                           onSubmitEditing={()=> this.password.focus()}
                />
                <TextInput style={styles.inputBox}
                           underlineColorAndroid='rgba(0,0,0,0)'
                           placeholder="Mật khẩu"
                           secureTextEntry={true}
                           placeholderTextColor = "#ffffff"
                           ref={(input) => this.password = input}
                />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>{this.props.type}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flexGrow: 1,
        justifyContent:'center',
        alignItems: 'center'
    },

    inputBox: {
        width: 500,
        height: 60,
        backgroundColor:'rgba(255, 255,255,0.2)',
        borderRadius: 15,
        paddingHorizontal:16,
        fontSize:18,
        color:'#ffffff',
        marginVertical: 10
    },
    button: {
        width:300,
        backgroundColor:'#ffffff',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 13
    },
    buttonText: {
        fontSize:25,
        fontWeight:'500',
        color:'#D91E18',
        textAlign:'center'
    }

});