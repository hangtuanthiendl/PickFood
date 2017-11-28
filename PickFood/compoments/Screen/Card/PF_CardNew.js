import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
export default class PF_CardNew extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Card style={{flex: 0}}>
                        <CardItem>
                            <Body>
                            <Image source={{uri: 'https://yt3.ggpht.com/-KANzo5oBrYs/AAAAAAAAAAI/AAAAAAAAAAA/S1FBVbeqNLQ/s88-c-k-no-mo-rj-c0xffffff/photo.jpg'}} style={{height: 200, width: 400, flex: 1}}/>
                            <Text>
                                //Your text here
                            </Text>
                            </Body>
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Button transparent textStyle={{color: '#87838B'}}>
                                    <Icon name="logo-github" />
                                    <Text>1,926 stars</Text>
                                </Button>
                            </Left>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}