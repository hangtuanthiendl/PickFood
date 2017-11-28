import React, { Component } from 'react';
import { Text,View, StyleSheet, TouchableHighlight, Image} from 'react-native';
import PF_Slider from "./Screen/Slider/PF_HomeSlider";
import PF_CardMember from "./Screen/Card/PF_CardMember";
import { Spinner,Container, Header, Item, Input, Icon, Button, Body,Title, Left, Right,Content, Card, CardItem ,Thumbnail, List,ListItem } from 'native-base';
import PF_CardDelivery from "./Screen/Card/PF_CardDelivery";
import PF_CardNew from "./Screen/Card/PF_CardNew";

const Dimensions = require('Dimensions');
const { heightsrc, widthsrc } = Dimensions.get('window')
class PF_Home extends React.Component {
    //static navigationOptions = { header: null };
    render() {
         return (
             <Container>
                 <Content>
                    <View style = {{flex: 1, flexDirection: 'column',}}>
                        <View style = {{flex: 1/2, marginBottom: 4}}>
                            <PF_Slider/>
                        </View>

                        <View style = {{flex: 1/2}}>
                            <View style={ao.dong} >
                                <View style={ao.cot} >
                                    <TouchableHighlight style = {{flex: 1}} onPress={() => this.props.navigation.navigate('PF_ListDrink')}>
                                        <View style = {ao.itemframe} >
                                            <Image
                                                style = {{width:44, height: 44, resizeMode: Image.resizeMode.contain}}
                                                source={require('../Images/Home/013-coffee.png')
                                                }
                                            />
                                            <Text>Món Mới!</Text>
                                        </View>
                                    </TouchableHighlight>
                                </View>
                                <View style={ao.cot} >
                                    <View style = {ao.itemframe}>
                                        <Image
                                            style = {{width:44, height: 44}}
                                            source={require('../Images/Home/001-store-2.png')
                                            }
                                        />
                                        <Text>Cửa hàng</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={ao.dong} >
                                <View style={ao.cot} >
                                    <View style = {ao.itemframe}>
                                        <Image
                                            style = {{width:44, height: 44}}
                                            source={require('../Images/Home/009-price-tag.png')
                                            }
                                        />

                                        <Text>Coupon</Text>
                                    </View>
                                </View>
                                <View style={ao.cot} >
                                    <View style = {ao.itemframe}>
                                        <Image
                                            style = {{width:44, height: 44}}
                                            source={require('../Images/Home/004-piggy-bank.png')
                                            }
                                        />

                                        <Text>Combo</Text>
                                    </View>
                                </View>
                            </View>

                        </View>
                    </View>
                     <PF_CardDelivery/>
                 <PF_CardNew/>

                 </Content>
             </Container>
        );
    }
}

export default  PF_Home;

    const ao = StyleSheet.create({
        dong:
    {
        flex: 1/2,
        //borderRightWidth: 1,
        flexDirection: 'row',
    },
        cot:
    {
        width: widthsrc/2 -16,
        //height: 80,
        flex: 1/2,
        flexDirection: 'column',
        margin: 4,
    }
    , itemframe:
            {
                backgroundColor: '#fff',
                borderColor: '#f9f2ff',
                //margin: 4,
                flex:1,
                width: widthsrc/2 -2,
                borderRadius:4,
                //padding: 10,
                alignItems:'center'
            },
        icon: {
            width: 26,
            height: 26,
        },
    })