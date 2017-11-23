import React, { Component } from 'react';
import { View, Text, FlatList, Image,TouchableOpacity,TextInput } from 'react-native';
import Styles from '../../Styles';
import {firebaseApp} from '../../Server/FirebaseCon';
import { Card,
    Container,
    Header,
    Item,
    Input,
    Icon,
    Button,
    Body,
    Title,
    Left,
    Right
    ,Content
    ,CardItem, List, ListItem,Thumbnail,Toast  } from 'native-base';


export default class ViewGenres extends Component {
    constructor(props){
        super(props)
        this.state ={
            dataSource: [],
            input:''
        }
        this.itemsRef = firebaseApp.database().ref();
    }
    componentDidMount() {
        this.listenForItems(this.itemsRef);
    }
    listenForItems(itemsRef) {
        var database = [];
        itemsRef.child('Genres').on('child_added', (dataSnapshot) => {
            database.push({
                title: dataSnapshot.val().name,
                url: dataSnapshot.val().image,
                _key: dataSnapshot.key
            });

            this.setState({
                dataSource: database
            });
        });
    }
    _renderItem = ({item}) => {
        return (
            <TouchableOpacity style = {Styles.banner}   onPress= {()=> {this.props.navigation.navigate('MH_Shop')}}>
                <View style = {Styles.wrapperGenres}>
                    <Image style={Styles.imageStyle} source={{uri : item.url}}/>
                </View>
                <Text>{item.title}</Text>
            </TouchableOpacity>
        );
    }
    render() {
        return (
            <FlatList
                data = {this.state.dataSource}
                renderItem={this._renderItem}
                horizontal = {true}
                showsHorizontalScrollIndicator={false}
                keyExtractor={rowData => rowData._key}
            />
        );
    }
}