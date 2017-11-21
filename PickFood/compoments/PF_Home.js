import React, { Component } from 'react';
import { Container, Header, Content, Footer, StyleProvider, Right, Body, Icon, Button, Title,Card, CardItem, Left} from 'native-base';
import { Text,View, StyleSheet} from 'react-native';
import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/commonColor.js';
import PF_Footer from "./Footer/Footer";
import PF_Slider from "./Screen/Slider/PF_Slider";

import Swiper from 'react-native-swiper'

import { Image} from 'react-native';

const Dimensions = require('Dimensions');
const { widthsrc } = Dimensions.get('window')
class PF_Home extends React.Component {
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
                        <View style={ao.dong} >
                             <View style={ao.cot} >
                                    <Card style = {ao.itemframe}>
                                        <Body><Image
                                                style = {{width:50, height: 50}}
                                                source={require('../Images/01.png')
                                                }
                                                 /></Body>

                                        <Body><Text>Thực đơn  sáng</Text></Body>
                                    </Card>
                        </View>
                            <View style={ao.cot} >
                                <Card style = {ao.itemframe}>
                                    <Body><Image
                                        style = {{width:50, height: 50}}
                                        source={require('../Images/01.png')
                                        }
                                    /></Body>

                                    <Body><Text>Thực đơn  sáng</Text></Body>
                                </Card>
                            </View>
                        </View>
                        <View style={ao.dong} >
                            <View style={ao.cot} >
                                <Card style = {ao.itemframe}>
                                    <Body><Image
                                        style = {{width:50, height: 50}}
                                        source={require('../Images/01.png')
                                        }
                                    /></Body>

                                    <Body><Text>Thực đơn  sáng</Text></Body>
                                </Card>
                            </View>
                            <View style={ao.cot} >
                                <Card style = {ao.itemframe}>
                                    <Body><Image
                                        style = {{width:50, height: 50}}
                                        source={require('../Images/01.png')
                                        }
                                    /></Body>

                                    <Body><Text>Thực đơn  sáng</Text></Body>
                                </Card>
                            </View>
                        </View>

                    </Content>
                    <PF_Footer/>
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