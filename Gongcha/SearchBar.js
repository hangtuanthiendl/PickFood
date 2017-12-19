import React, { Component } from 'react';
import {  } from 'react-native';
import { Header, Icon, Input, Item, Left,Title,Button,Right} from 'native-base';
export default class SearchBar extends Component {
    state = {  }
    render() {
        return (
            <Header searchBar rounded androidStatusBarColor = 'transparent' style = {{backgroundColor: 'rgb(184, 47, 64)',alignItems: 'center'}}>
                <Left style ={{flexDirection: 'row', alignItems: 'center'}}>
                    <Title style ={{paddingLeft: 10, color: '#FFF'}}>{this.props.name}</Title>        
                </Left>
                <Right>
                <Button transparent onPress = {() => this.props.navigation.goBack()}>
                    <Icon name= {this.props.icon} style ={{fontSize: 27,color: '#FFF'}}/>
                    </Button>
                    </Right>   
            </Header>
        );
    }
}