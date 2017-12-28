import React, { Component } from 'react';
import { View } from 'react-native';
import styles from './styles'
import { Badge,Spinner,Container, Header, Item, Input, Icon, Separator,Button, Text, Body,Title, Left, Right,Content, Card, CardItem ,Thumbnail, List,ListItem, Footer, Radio, CheckBox   } from 'native-base';
import call from 'react-native-phone-call'
var numberPhone = '000';

export default class TitleShop extends Component {
    state = {  }
    CallMe(number){
        numberPhone = number;
        const args = {
            number:numberPhone,
            prompt:true,
        }
       call(args).catch(console.error);
    }
    render() {
        return (
            <View style ={{backgroundColor : '#FFF'}}>
                <CardItem>
                <Icon name = 'ios-home-outline' style={styles.iconShop}></Icon>
                <Text    numberOfLines = {1} style = {styles.textShop}>{this.props.address}</Text>   
                </CardItem>
                <View style = {styles.divider}></View>
                <CardItem button onPress = {() => this.CallMe(this.props.phone)}>
                <Icon name = 'ios-call-outline' style={styles.iconShop}></Icon>
                <Text  style = {styles.textShop}>{this.props.phone}</Text> 
                </CardItem>  
                <View style = {styles.divider}></View>
                <CardItem>
                <Icon name = 'ios-alarm-outline' style={styles.iconShop}></Icon>
                 <Text  style = {styles.textShop}>{this.props.time}</Text>
                </CardItem>    
                <View style = {styles.divider}></View>
            </View>
        );
    }
}