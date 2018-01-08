import React, { Component } from 'react';
import { AppState,View, FlatList, Image,TouchableOpacity,TextInput, ScrollView,ActivityIndicator, ImageBackground, TouchableWithoutFeedback,TouchableNativeFeedback } from 'react-native';
import { StyleProvider,Spinner,Container, Header, Item, Input, Icon, Button, Text, Body,Title, Left, Right,Content, Card, CardItem ,Thumbnail, List,ListItem, Footer, FooterTab } from 'native-base';
import styles from './styles'
import GetData from '../../Sever/getData'
import {connect} from 'react-redux';
import Currency from '../../Util/Currency'
import StarRating from 'react-native-star-rating';
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
        const {params} = this.props.navigation.state
        switch(params.key) {
            case 1:
            GetData.getItemByCategoryShop(params.nameItem, (itemshop) => {
                this.setState({
                    itemshop: itemshop
                })
            })
            break;
            case 2:
            GetData.getShopItem((itemshop) => {
                this.setState({
                    itemshop: itemshop
                })
            })
            break;
            case 3:
            GetData.getShopItem((itemshop) => {
                this.setState({
                    itemshop: itemshop.reverse()
                })
            })
            break;
            case 4:
            GetData.getShopItem((itemshop) => {
                this.setState({
                    itemshop: itemshop
                })
            })
            break;
            default: break
        }
        
    }   
     _renderRecommend = ({item})=>{
        return (
            <TouchableNativeFeedback onPress = {() => {this.props.navigation.navigate('Detail', {data : item.key})}}>
                <View style = {{flexDirection : 'row', backgroundColor: '#FFF'}}>
                <Image source={{uri: item.imageShop}} style={styles.imageNewShop}>
               </Image>                
               <View style = {{marginLeft: 5, flex: 1, justifyContent:'center'}}>
               <Text numberOfLines = {1} style ={styles.titleHotSale}>{item.nameShop}</Text>
               <Text  numberOfLines = {1} style ={styles.titleadress}>{item.addressShop}</Text>
               <View style = {{width : 70}}> 
                <StarRating
                    disabled={true}
                    maxStars={5}
                    starSize= {15}
                    rating={parseInt(item.state)}
                    starStyle= {{paddingVertical: 5}}
                    starColor={'#f1c40f'}/>
                </View>
                <View style = {{flex: 1,flexDirection: 'row', justifyContent: 'space-between'}}>
               <View style = {{flexDirection: 'row', alignItems: 'center'}}>
                   <Icon name = 'alarm' style ={{fontSize: 15, color: '#2ecc71',  paddingRight: 5}} />
                   <Text  numberOfLines = {1} style ={{ alignSelf: 'center', fontSize: 13,
                fontStyle: 'normal'}}>{item.timeShop}</Text>
               </View>
               <View style = {{flexDirection: 'row', alignItems: 'center'}}>
                   <Icon name = 'ios-restaurant-outline' style ={{fontSize: 15, color: '#B82F40',  paddingRight: 5}} />
                   <Text  numberOfLines = {1} style ={{ alignSelf: 'center', fontSize: 13,
                fontStyle: 'normal'}}>{item.categoryShop}</Text>
               </View>
               </View>
                </View> 
                </View>              
            </TouchableNativeFeedback>    
        );
    }
    render() {
        const {params} = this.props.navigation.state;                                 
        return (
            <Container style = {styles.container}>
                <Header androidStatusBarColor = 'rgb(184, 47, 64)' style = {{backgroundColor: 'rgb(184, 47, 64)'}}>
                <View style= {{justifyContent: 'space-between', flexDirection: 'row', flex: 1}}>
                    <View style = {styles.containerLogo}>
                    <Title style = {{textAlign: 'center', alignSelf: 'center', color: '#FFF'}}>{params.nameItem}</Title>
                    </View>
                    <Right style = {{height: undefined, width: undefined}}>
                    <Button transparent onPress = {() => this.props.navigation.goBack()}>
                    <Icon name= 'md-close' style = {{fontSize: 25,  color: '#FFF',  alignSelf: 'center'}}/>
                    </Button>
            </Right>
            </View>                    
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