import React, { Component } from 'react';
import { Image, Dimensions } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';


import Swiper from 'react-native-swiper';
const { widthsrc } = Dimensions.get('window')

export default class CardShowcaseExample extends Component {
    static navigationOptions = {
        title: null,
        header: null
    };
    render() {
        return (
            <Container>
                <Content>
                    <Card style={{flex: 0}}>
                        <CardItem>
                        </CardItem>
                        <CardItem>
                            <Body>
                            <Image source={{uri: 'http://gongcha.com.vn/images/upload/GongCha015.jpg'}} style={{height: 100, width: 500, flex: 1}}/>
                            <Text>
                                 Gong Cha Việt Nam sẽ được giảm ngay 10% ...
                            </Text>
                            </Body>
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Button transparent textStyle={{color: '#87838B'}}>
                                    <Icon name="logo-github" />
                                    <Text>Xem thêm</Text>
                                </Button>
                            </Left>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}