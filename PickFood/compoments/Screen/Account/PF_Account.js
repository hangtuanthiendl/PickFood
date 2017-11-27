
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    StatusBar ,
    Image,
    TouchableHighlight,
} from 'react-native';
import PF_Layout from './Layout/PF_Layout';
const Dimensions = require('Dimensions');
const { heightsrc, widthsrc } = Dimensions.get('window')
export default class PF_SignIn extends Component<{}> {
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.Icon}>
                    <Image  style={styles.image}
                            source={require('../../../Images/giphy.gif')}/>
                </View>

                <View style={styles.Icon2}>
                    <Text style={styles.title}>Tích sao ngay, quà trao tay</Text>
                    <Text >Đăng nhập để tham gia tích điểm Ngôi Sao và nhận những phần quà bất ngờ từ PickFood.</Text>
                </View>
                <View style={styles.Icon3}>
                    <TouchableHighlight onPress={() => this.props.navigation.navigate('PF_SignIn')}>
                    <View style={styles.button}>
                        <Image  style={{width: 35, height: 35, flex: 1/8, resizeMode: Image.resizeMode.contain}}
                                source={require('../../../Images/Mail alt.png')}/>
                        <Text style={styles.textinbutton}>Nhập Email của bạn để tiếp tục</Text>
                    </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => this.props.navigation.navigate('PF_SignUp')}>
                    <View style={styles.button}>
                        <Image  style={{width: 35, height: 35, flex: 1/8, resizeMode: Image.resizeMode.contain}}
                                source={require('../../../Images/fb.png')}/>
                        <Text style={styles.textinbuttonfb}>Đăng nhập bằng Facebook</Text>
                    </View>
                    </TouchableHighlight>

                </View>

            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        //justifyContent: 'center',
        //alignItems: 'center',
        width: widthsrc,
        height: heightsrc,
        backgroundColor: '#fff'
    },
    Icon:
        {
            flex: 1/2,
            alignItems: 'center'
        },
    Icon2:
        {
            flex: 1/4,
            padding: 15,
            justifyContent:'center',
            alignItems: 'center',
        },
    Icon3:
        {
            flex: 1/4,
        },
    image:{
        flexGrow: 1,
        alignItems: 'center'
    },
    title: {
        fontSize: 19,
        fontWeight: 'bold',
    },
    button:
        {
            margin: 10,
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#fff',
        },
    textinbutton:
        {
            flex: 4/8,
            color: '#D91E18',
            borderBottomColor: '#D91E18',
            borderBottomRadius: 3,
            borderBottomWidth: 1,
        },
    textinbuttonfb:
        {
            color: '#407cd9',
            flex: 4/8,
            borderBottomColor: '#407cd9',
            borderBottomRadius: 3,
            borderBottomWidth: 1,
        }
});