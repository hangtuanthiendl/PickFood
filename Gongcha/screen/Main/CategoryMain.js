import React, { Component } from 'react';
import { AppState,View, FlatList, Image,TouchableOpacity,TextInput, ScrollView,ActivityIndicator, ImageBackground, TouchableWithoutFeedback,TouchableNativeFeedback } from 'react-native';
import { StyleProvider,Spinner,Container, Header, Item, Input, Icon, Button, Text, Body,Title, Left, Right,Content, Card, CardItem ,Thumbnail, List,ListItem, Footer, FooterTab } from 'native-base';
import styles from './styles'
import GetData from '../../Sever/getData'
import {connect} from 'react-redux';
import Currency from '../../Util/Currency'
export default class CategoryMain extends Component {
    constructor(props){
        super(props)
        this.state = {
            itembanner: null,
            itemCategory:null,
            itemshop: null
        }
    }
    componentDidMount() { 
        GetData.getShopItem((itemshop) => {
            this.setState({
                itemshop: itemshop
            })
        })
    }   
     _renderRecommend = ({item})=>{
        return (
            <TouchableNativeFeedback onPress = {() => {this.props.navigation.navigate('Detail', {data : item.key})}}>
                <View style = {{flexDirection : 'row', backgroundColor: '#FFF'}}>
                <Image source={{uri: item.imageShop}} style={styles.imageNewShop}>
               </Image>                
               <View style = {{marginLeft: 5, flex: 1}}>
               <Text numberOfLines = {1} style ={styles.titleHotSale}>{item.nameShop}</Text>
               <Text  numberOfLines = {1} style ={styles.titleadress}>{item.addressShop}</Text>
               <View style = {{flexDirection: 'row'}}>
               
                <Text  numberOfLines = {1} style ={{ fontSize: 13,
                fontStyle: 'normal', paddingVertical: 10}}>(180)</Text>
               </View>
               <Text  numberOfLines = {1} style ={{ fontSize: 13,
                fontStyle: 'normal', paddingVertical: 10}}>Cafe/Desert</Text>
                </View> 
                </View>              
            </TouchableNativeFeedback>    
        );
    }
    render() {
        const {params} = this.props.navigation.state;                                 
        return (
            <Container style = {styles.container}>
                <Header androidStatusBarColor = 'rgb(184, 47, 64)' style = {{backgroundColor: 'rgb(184, 47, 64)', justifyContent: 'space-between'}}>
                    <View style = {styles.containerLogo}>
                        <Title style = {{textAlign: 'center', alignSelf: 'center', color: '#FFF'}}>{params.nameItem}</Title>
                    </View>
                    <TouchableNativeFeedback onPress = {() => this.props.navigation.goBack()}>
                    <Icon name= 'md-close' style = {{fontSize: 25,  color: '#FFF',  alignSelf: 'center'}}/>
                    </TouchableNativeFeedback>
                </Header>
                <Content   showsVerticalScrollIndicator={false}>
                {
                       this.state.itemshop && <FlatList
                       data={this.state.itemshop}
                       removeClippedSubviews={true}     
                       contentContainerStyle={{
                         margin: 5}}   
                       ItemSeparatorComponent = {() => {return (<View style = {{height: 5}}/>)}}
                       automaticallyAdjustContentInsets={true}                  
                       extraData= {this.state}
                       showsHorizontalScrollIndicator={false}
                       keyExtractor={(item) => item.key}
                       renderItem={this._renderRecommend}/>
                   }
                   {
                    !this.state.itemshop && <View style={styles.wrapperSwiper}>
                    <Spinner color = '#e53935'/>
                    </View>
                   }        
                </Content>   
            </Container> 
        );
    }
}