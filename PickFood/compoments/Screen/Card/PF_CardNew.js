import React, { Component } from 'react';
import { Image, Dimensions } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';


import Swiper from 'react-native-swiper';
const { widthsrc } = Dimensions.get('window')

export default class PF_CardNew extends Component {
    static navigationOptions = {
        title: null,
        header: null
    };
    render() {
        return (
                    <Card>
                        <CardItem>
                            <Image source={{uri: 'https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.0-9/23722541_2035522046681602_4713017123404379192_n.png?oh=0c7d19ecf8282cbbc1e55b702364198b&oe=5A9B9394'}}
                                   style={{height: 80, width: 400, flex: 1}}/>
                        </CardItem>
                    </Card>
        );
    }
}