import React, { Component } from 'react';
import { Image, Dimensions, StyleSheet, View} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

const { widthsrc } = Dimensions.get('window')

export default class PF_CardDelivery extends Component {
    static navigationOptions = {
        title: null,
        header: null
    };
    render() {
        return (
                    <View style = {ao.itemframe}>
                            <Body>
                                <Image
                                    style = {{width:50, height: 50,  alignItems: 'center',}}
                                    source={require('../../../Images/Home/003-box.png')
                                    }
                                />
                                <Body>
                                <Text>Đặt hàng ngay, giao liền tay</Text>
                                <Text note>Miễn phí giao hàng cho đơn hàng trên 100K</Text>
                                </Body>
                            </Body>
                    </View>
        );
    }
}

const ao = StyleSheet.create({
    itemframe:
        {
            backgroundColor: '#fff',
            borderColor: '#f9f2ff',
            margin: 4,
            flex:1/2,
            width: widthsrc/2 -2,
            borderRadius:4,
            padding: 10,
        }
})