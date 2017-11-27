import React, { Component } from 'react';
import { Image, Dimensions } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

const { widthsrc } = Dimensions.get('window')

export default class PF_CardMember extends Component {
    static navigationOptions = {
        title: null,
        header: null
    };
    render() {
        return (
            <Container>
                <Content>
                    <Card>
                        <CardItem>

                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}