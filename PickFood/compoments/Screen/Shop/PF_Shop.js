import React, { Component } from 'react';
import { View, FlatList, Image,TouchableOpacity,TextInput, ScrollView,ActivityIndicator } from 'react-native';
import { Spinner,Container, Header, Item, Input, Icon, Button, Text, Body,Title, Left, Right,Content, Card, CardItem ,Thumbnail, List,ListItem } from 'native-base';
import Styles from '../../Styles';
import {firebaseApp} from '../../Server/FirebaseCon.js';
import Swiper from 'react-native-swiper';
import GetData from '../../Server/getData'
export default class PF_Shop extends Component {
    constructor(props){
        super(props)
        this.state ={
            itemshop: null,
            input:'',
            itembanner: null,
            swiperShow:false,
        }
        this.itemsRef = firebaseApp.database().ref();
    }
    componentDidMount() {
        GetData.getBanner((itembanner) => {
            this.setState({
                itembanner: itembanner
            })
        })
        GetData.getShopItem((itemshop) => {
            this.setState({
                itemshop: itemshop
            })
        })
    }
    checkState(itemstate){
        if(itemstate = 1){
            return (
                <View style = {{flexDirection: 'row'}}>
                    <Icon name = 'alarm'style={{fontSize: 20, color: '#2ecc71'}}></Icon>
                    <Text note style = {{color : '#2ecc71'}}>Đóng cửa</Text>
                </View>
            )
        }else {
            <View style = {{flexDirection: 'row'}}>
                <Icon name = 'alarm' style={{fontSize: 20, color: '#2ecc71'}}></Icon>
                <Text note color = '#bdc3c7'>Mở cửa</Text>
            </View>
        }
    }
    _renderItemTop = ({item}) => {
        return (
            <Card  >
                <CardItem button onPress={()=> {this.props.navigation.navigate('PF_DetailShop', {data : item.key})}}>
                    <Left>
                        <Thumbnail square size={80} source={{ uri : item.imageShop} } />
                        <Body>
                        <Text>{item.nameShop}</Text>
                        <Text note numberOfLines = {1}>{item.addressShop}</Text>
                        <View>{this.checkState(item.state)}</View>
                        </Body>
                    </Left>

                </CardItem>
            </Card>


        );
    }
    render() {
        return (
            <Container style = {{backgroundColor: '#ecf0f1'}}
                       showsVerticalScrollIndicator ={false}            >
                <Header androidStatusBarColor = "#c62828"  style={{backgroundColor: '#e53935'}}>
                    <Left>
                        <Title>GongCha</Title>
                    </Left>
                    <Right>
                        <Button transparent>
                            <Icon name='menu' />
                        </Button>
                    </Right>
                </Header>
                <Content>
                    {
                        this.state.itembanner &&  <View style={Styles.wrapperSwiper}>
                            <Swiper
                                dot={<View style={{backgroundColor: '#FFF', width: 10, height: 10, borderRadius: 7, marginLeft: 7, marginRight: 7}} />}
                                activeDot={<View style={{backgroundColor: '#e53935', width: 10, height: 10, borderRadius: 7, marginLeft: 7, marginRight: 7}} />}
                                autoplay={true}>
                                <View style={Styles.slide}>
                                    <Image source = {{uri: this.state.itembanner[0].image}} style={Styles.imageTrasua}></Image>
                                </View>
                                <View style={Styles.slide}>
                                    <Image source = {{uri: this.state.itembanner[1].image}} style={Styles.imageTrasua}></Image>
                                </View>

                            </Swiper>
                        </View>
                    }
                    {
                        !this.state.itembanner && <View style={Styles.wrapperSwiper}>
                            <Spinner color = '#e53935'/>
                        </View>
                    }

                    <View>
                        {
                            this.state.itemshop && <FlatList
                                data = {this.state.itemshop}
                                renderItem={this._renderItemTop}
                                removeClippedSubviews={true}
                                extraData= {this.state}
                                showsVerticalScrollIndicator ={false}
                                keyExtractor={(item) => item.key} />
                        }
                        {
                            !this.state.itemshop && <View style={Styles.loadingCategory}>
                                <Spinner color = '#e53935'/>
                            </View>
                        }
                    </View>

                </Content>
            </Container>

        );
    }
}


