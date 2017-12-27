import React, { Component } from 'react';
import { View } from 'react-native';
import styles from './styles'
import { Badge,Spinner,Container, Header, Item, Input, Icon, Separator,Button, Text, Body,Title, Left, Right,Content, Card, CardItem ,Thumbnail, List,ListItem, Footer, Radio, CheckBox   } from 'native-base';

export default class TitleShop extends Component {
    state = {  }
    render() {
        return (
            <View style ={{backgroundColor : '#FFF'}}>
                <CardItem>
                <Icon name = 'home' style={styles.iconShop}></Icon>
                <Text note numberOfLines = {1} style = {styles.textShop}>{this.props.address}</Text>   
                </CardItem>
                <View style = {styles.divider}></View>
                <CardItem>
                <Icon name = 'ios-call' style={styles.iconShop}></Icon>
                <Text note style = {styles.textShop}>{this.props.phone}</Text> 
                </CardItem>  
                <View style = {styles.divider}></View>
                <CardItem>
                <Icon name = 'alarm' style={styles.iconShop}></Icon>
                 <Text note style = {styles.textShop}>{this.props.time}</Text>
                </CardItem>    
                <View style = {styles.divider}></View>
            </View>
        );
    }
}