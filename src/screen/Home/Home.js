import React, { Component } from 'react';
import { View, FlatList, Image,TouchableOpacity,TextInput, ScrollView,ActivityIndicator, ImageBackground, TouchableWithoutFeedback,TouchableNativeFeedback } from 'react-native';
import { StyleProvider,Spinner,Container, Header, Item, Input, Icon, Button, Text, Body,Title, Left, Right,Content, Card, CardItem ,Thumbnail, List,ListItem } from 'native-base';
import styles from './styles'
import Swiper from 'react-native-swiper';
import GetData from '../../Sever/getData'
import imageCircle from '../../Image/circle.png';
import LinearGradient from 'react-native-linear-gradient';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
import logo from '../../Image/logo.png'
import ActionButton from 'react-native-action-button';

export default class Home extends Component {
    constructor(props){
        super(props)
        this.state ={
            itemshop: null,
            input:'',
            itembanner: null,
            swiperShow:false,            
        }
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
      _renderItemTopted = ({item}) => { 
        return (
               <TouchableNativeFeedback  onPress={()=> {this.props.navigation.navigate('Detail', {data : item.key})}}>
                <View>
                <ImageBackground source={{uri : item.imageShop}} style={styles.wrapperItemShop}>
               <LinearGradient colors={['rgba(0, 0, 0, 0.2)', 'rgba(0,0,0, 0.2)', 'rgba(0,0,0, 0.7)']}  style={styles.wrapperItemShop}>
                <View style = {styles.wrapperItemShop}>
                <Text style ={styles.typeTitle}>{item.nameShop}</Text>
                <Text style = {styles.typeAddress} numberOfLines = {1}>{item.addressShop}</Text>
                </View>
                </LinearGradient>
                <View style = {styles.divider}></View>
               </ImageBackground> 
                </View>              
               </TouchableNativeFeedback>
        );
      }
    render() {
        return (
            <Container style = {styles.container}>
            
                <Header androidStatusBarColor = 'rgb(184, 47, 64)' style = {{backgroundColor: '#ECF0F1', justifyContent: 'space-between'}}>
                    <View style = {styles.containerLogo}>
                        <Title style = {{textAlign: 'center', alignSelf: 'center', color: 'rgb(184, 47, 64)'}}>Gong cha</Title>
                        <Image source = {logo} style = {styles.logo}></Image>
                    </View>
                    <Icon name= 'search' style = {{fontSize: 25, color: 'rgb(184, 47, 64)', alignSelf: 'center'}}/>
                </Header>
                <Content   showsVerticalScrollIndicator={false}>
                    <View>
                        {
                            this.state.itemshop && <FlatList
                            data = {this.state.itemshop}
                            renderItem={this._renderItemTopted} 
                            removeClippedSubviews={true}
                            extraData= {this.state}                             
                            showsVerticalScrollIndicator ={false}
                            keyExtractor={(item) => item.key} />   
                        }
                        {
                            !this.state.itemshop && <View style={styles.loadingCategory}>
                             <Spinner color = '#e53935'/>
                          </View>        
                        }                       
                    </View>                                          
                </Content>     
                          
            </Container>   
        );
    }
}