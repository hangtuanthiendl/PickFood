import React, { Component } from 'react';
import {View, TouchableOpacity, TextInput, Image, FlatList} from 'react-native';
import Styles from '../../Styles';
import GetData from '../../Server/getData'
import { Badge,Spinner,Container, Header, Item, Input, Icon, Button, Text, Body,Title, Left, Right,Content, Card, CardItem ,Thumbnail, List,ListItem } from 'native-base';

export default class Detail extends Component {


    constructor(props){
        super(props)
        this.state = {
            itemshop: null,
            name: null,
            image:null,
            address: null,
            itemMenu: null,
            value: null
        }
    }
    componentDidMount(){
        const {params} = this.props.navigation.state;
        GetData.getDetailShop(params.data,(itemshop) => {
            this.setState({
                name : itemshop.nameShop,
                image: itemshop.imageShop,
                address: itemshop.addressShop
            })
        })
        GetData.getMenuItem((itemMenu)=> {
            this.setState({
                itemMenu : itemMenu
            })
        })
    }
    _renderMenuItem = ({item}) => {
        return (
            <Card>
                <CardItem button>
                    <Left>
                        <Thumbnail square size={80} source={{ uri : item.imageItem} } />
                        <Body>
                        <Text numberOfLines = {1}>{item.nameItem}</Text>
                        <Text note numberOfLines = {1}>{item.priceItem} VNÄ </Text>
                        </Body>
                    </Left>
                    <Right>
                        <Icon name = 'md-add-circle' style = {{fontSize: 25, color : '#e53935'}}/>
                    </Right>
                </CardItem>
            </Card>
        );
    }
    render() {
        const {navigate} = this.props.navigation;
        return (
            <Container>
                <Header androidStatusBarColor = "#c62828"  style={{backgroundColor: '#e53935'}}>
                    <Left>
                        <Button transparent
                                onPress={() => this.props.navigation.goBack()}            >
                            <Icon name="md-arrow-back" />
                        </Button>
                    </Left>
                    <Body>
                    <Title style = {{fontSize: 15}}>{this.state.name}</Title>
                    <Title style = {{fontSize: 10}}>Cafe/Desert</Title>
                    </Body>
                    <Right>
                        <Button transparent
                                onPress={() => this.props.navigation.goBack()}>
                            <Icon name="md-basket" style = {{fontSize: 25}} />
                        </Button>
                    </Right>
                </Header>
                <Content>
                    <Image source={{uri: this.state.image}} style={{height: 200, width: null, flex: 1}}/>
                    <Card>
                        <CardItem>
                            <Left>
                                <Body>
                                <Text> {this.state.name}</Text>
                                <Text note numberOfLines = {1}> {this.state.address}</Text>
                                <View style = {{flexDirection: 'row'}}>
                                    <Icon name = 'alarm'style={{fontSize: 20, color: '#2ecc71'}}></Icon>
                                    <Text note style = {{color : '#2ecc71'}}>Má»Ÿ Cá»­a</Text>
                                </View>
                                </Body>
                            </Left>

                        </CardItem>
                    </Card>
                    <View>
                        {
                            this.state.itemMenu && <FlatList
                                data = {this.state.itemMenu}
                                renderItem={this._renderMenuItem}
                                removeClippedSubviews={true}
                                extraData= {this.state}
                                showsVerticalScrollIndicator ={false}
                                keyExtractor={(item) => item.key} />
                        }
                        {
                            !this.state.itemMenu && <View style={Styles.loadingCategory}>
                                <Spinner color = '#e53935'/>
                            </View>
                        }
                    </View>
                </Content>
            </Container>

        );
    }
}