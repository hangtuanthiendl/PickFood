import React, { Component } from 'react';
import { Container, Header, Content, Footer, StyleProvider, Right, Body, Icon, Button, Title,Card, CardItem, Left, FooterTab} from 'native-base';
import { Text,View, StyleSheet, TouchableHighlight} from 'react-native';
import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/commonColor.js';
import PF_Slider from "./Screen/Slider/PF_Slider";

import PF_CardNew from "./Screen/CardNew/PF_CardNew";
import { Image} from 'react-native';
const Dimensions = require('Dimensions');
const { widthsrc } = Dimensions.get('window')
class PF_Home extends React.Component {
    static navigationOptions = {
        title: null,
        header: null
    };
    render() {
         return (
             <StyleProvider style={getTheme(material)}>

                <Container >
                    <Header>
                        <Body>
                        <Title>PICK FOOD</Title>
                        </Body>
                        <Right>
                            <Button transparent>
                                <Icon name='menu' />
                            </Button>
                        </Right>
                    </Header>
                    <View style = {{flex: 2/5,}}>
                        <PF_Slider/>
                    </View>
                    <Content style = {{flex: 3/5,}}>
                        <View>
                        <View style={ao.dong} >
                             <View style={ao.cot} >
                                 <TouchableHighlight onPress={() => this.props.navigation.navigate('PF_ListDrink')}>
                                    <Card style = {ao.itemframe} >
                                        <Body><Image
                                                style = {{width:50, height: 50}}
                                                source={require('../Images/Home/013-coffee.png')
                                                }
                                                 /></Body>

                                        <Body><Text>Thực đơn</Text></Body>
                                    </Card>
                                 </TouchableHighlight>
                        </View>
                            <View style={ao.cot} >
                                <Card style = {ao.itemframe}>
                                    <Body><Image
                                        style = {{width:50, height: 50}}
                                        source={require('../Images/Home/001-store-2.png')
                                        }
                                    /></Body>

                                    <Body><Text>Cửa hàng</Text></Body>
                                </Card>
                            </View>
                        </View>
                        <View style={ao.dong} >
                            <View style={ao.cot} >
                                <Card style = {ao.itemframe}>
                                    <Body><Image
                                        style = {{width:50, height: 50}}
                                        source={require('../Images/Home/009-price-tag.png')
                                        }
                                    /></Body>

                                    <Body><Text>Ưu đãi</Text></Body>
                                </Card>
                            </View>
                            <View style={ao.cot} >
                                <Card style = {ao.itemframe}>
                                    <Body><Image
                                        style = {{width:50, height: 50}}
                                        source={require('../Images/Home/004-piggy-bank.png')
                                        }
                                    /></Body>

                                    <Body><Text>Lịch sử</Text></Body>
                                </Card>
                            </View>
                        </View>
                        </View>

                        <PF_CardNew/>

                    </Content>
                    <Footer>
                        <FooterTab>
                            <Button active onPress={() => this.props.navigation.navigate('PF_Home')}>
                                <Icon active name="apps" />
                            </Button>
                            <Button>
                                <Icon name="wine" />
                            </Button>
                            <Button >
                                <Icon  name="cart" />
                            </Button>
                            <Button onPress={() => this.props.navigation.navigate('PF_SignIn')}>
                                <Icon name="person" />
                            </Button>
                        </FooterTab>
                    </Footer>
                </Container>
            </StyleProvider>
        );
    }
}

export default  PF_Home;

    const ao = StyleSheet.create({
        dong:
    {
        flex: 1,
        //borderRightWidth: 1,
        flexDirection: 'row',
    },
        cot:
    {
        width: widthsrc/2 -12,
        flex: 1/2,
        flexDirection: 'column',

    }
    , itemframe:
            {
                flex:1/2,
                width: widthsrc/2 -2,
                borderRadius:10,
            }
    })