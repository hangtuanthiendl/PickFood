import React, { Component } from 'react';
import { View, Image, TouchableHighlight, TouchableNativeFeedback, ImageBackground, FlatList} from 'react-native';
import Swiper from 'react-native-swiper';
import {Container, Content,Spinner,Icon,Text,Header, Left,Body,Right,Button,Title} from 'native-base';
import GetData from '../../Sever/getData';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import antrua from '../../Image/antrua.jpg'
import StarRating from 'react-native-star-rating';

//import Rating  from 'react-native-ratings';
export default class MainRouter extends Component {
    constructor(props){
        super(props)
        this.state = {
            itembanner: null,
            itemCategory:null,
            itemshop: null,
            itemHotShop: null,
            itemNewShop:null,
            itemRecShop: null,
        }
    }
    componentDidMount() { 
        GetData.getBanner((itembanner) => {
            this.setState({
                itembanner: itembanner
            })
        })
        GetData.getItemMall((itemCategory)=>{
            this.setState({
                itemCategory: itemCategory
            })
        })
        GetData.getNewItem(5,(itemNewShop) => {
            this.setState({
                itemNewShop: itemNewShop
            })
        })
        GetData.getHotItem(5,(itemHotShop) => {
            this.setState({
                itemHotShop: itemHotShop
            })
        })
        GetData.getHotItem(10,(itemRecShop) => {
            this.setState({
                itemRecShop: itemRecShop
            })
        })
    }
    _renderCategory = ({item})=>{
        return (
            <TouchableNativeFeedback onPress = {() => this.props.navigation.navigate('CategoryMain', {nameItem: item.nameItem})}>
                <View style = {{borderRadius: 50}}>
                <ImageBackground source={{uri: item.imageItem}} style={styles.imageitemMall}>
               <LinearGradient colors={['rgba(0, 0, 0, 0.2)', 'rgba(0,0,0, 0.2)', 'rgba(0,0,0, 0.7)']}  style={styles.imageitemMall}>
                <Text style ={styles.titleitemMall}>{item.nameItem}</Text>
                </LinearGradient>
               </ImageBackground> 
                </View>              
            </TouchableNativeFeedback>     
        );
    }
    _renderHotSale = ({item})=>{
        return (
            <TouchableNativeFeedback>
                <View style  = {{backgroundColor: '#FFF'}}>
                <ImageBackground source={{uri: item.imageItem}} style={styles.imageHotSale}>
                <View style = {{backgroundColor : '#2e2d2d65'}}>
                    <Text numberOfLines ={1} style = {styles.titleNote}>Sale 50%</Text>
                </View>
               </ImageBackground> 
               <Text  numberOfLines = {1} style ={styles.titleHotSale}>{item.nameShop}</Text>
               <Text  numberOfLines = {1} style ={styles.titleadress}>{item.addressShop}</Text>
                </View>              
            </TouchableNativeFeedback>     
        );
    }
    _renderNewShop = ({item})=>{
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
    _renderRecommend = ({item})=>{
        return (
            <TouchableNativeFeedback onPress = {() => {this.props.navigation.navigate('Detail', {data : item.key})}}>
                <View  removeClippedSubviews={true} style = {styles.containerRecommend}>
                <Image source={{uri: item.imageShop}} style={styles.imageRecommend}>
               </Image> 
               <View style = {{flex: 1}}>
               <Text numberOfLines = {1} style ={styles.titleHotSale}>{item.nameShop}</Text>
               <Text  numberOfLines = {1} style ={styles.titleadress}>{item.addressShop}</Text>
               <View style = {{flex: 1,flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
               <View style = {{flexDirection: 'row', alignItems: 'center'}}>
                   <Icon name = 'alarm' style ={{fontSize: 15, color: '#2ecc71',  paddingRight: 5}} />
                   <Text  numberOfLines = {1} style ={{ alignSelf: 'center', fontSize: 10,
                fontStyle: 'normal'}}>{item.timeShop}</Text>
               </View>
               <View style = {{flexDirection: 'row', alignItems: 'center'}}>
                   <Icon name = 'ios-restaurant-outline' style ={{fontSize: 15, color: '#B82F40',  paddingRight: 5}} />
                   <Text  numberOfLines = {1} style ={{ alignSelf: 'center', fontSize: 10,
                fontStyle: 'normal'}}>{item.categoryShop}</Text>
               </View>
               </View>
               
               </View>
                </View>              
            </TouchableNativeFeedback>     
        );
    }
    render() {
        console.log(this.state.itemCategory)
        return (
            <Container style = {styles.container}>
                <Header searchBar rounded androidStatusBarColor = 'transparent' style = {{backgroundColor: 'rgb(184, 47, 64)',alignItems: 'center'}}>
                <Left style ={{flexDirection: 'row', alignItems: 'center'}}>
                    <Title style ={{paddingLeft: 10, color: '#FFF'}}>Pick Food</Title>        
                </Left>
                <Right>
                <Button transparent onPress = {() => this.props.navigation.navigate('SearchBar')}>
                    <Icon name= 'ios-search' style ={{fontSize: 27,color: '#FFF'}}/>
                    </Button>
                    </Right>   
             </Header>
                <Content  showsVerticalScrollIndicator={false}>
                   {
                    this.state.itembanner && <Swiper
                     style = {styles.wrapperSwiper}
                     dot={<View style={{backgroundColor: '#FFF', width: 10, height: 10, borderRadius: 7, marginLeft: 7, marginRight: 7}} />}
                       activeDot={<View style={{backgroundColor: '#e53935', width: 10, height: 10, borderRadius: 7, marginLeft: 7, marginRight: 7}} />}
                           autoplay={true}>
                            <Image source = {{uri: this.state.itembanner[0].image}} style={styles.slide}></Image>
                            <Image source = {{uri: this.state.itembanner[1].image}} style={styles.slide}></Image>
                            <Image source = {{uri: this.state.itembanner[2].image}} style={styles.slide}></Image>                 
                        </Swiper>
                   }
                   {
                        !this.state.itembanner && <View style={styles.wrapperSwiper}>
                        <Spinner color = '#e53935'/>
                      </View>
                   }
                   <View style= {styles.wraper1}>
                  <View style={styles.headerCaterory}>
                  <View style = {{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                  <Text style={styles.titleCategory}>Bữa Ăn Hôm Nay</Text>
                  <Image style={{height: 30, width: 30, resizeMode: 'cover', marginLeft: 5}}source ={require('../../Image/restaurant.png')}/>
                  </View>
                   <TouchableNativeFeedback>
                    <View style = {{flexDirection: 'row'}}>
                    </View>
                   </TouchableNativeFeedback>
                   </View>
                   <View style ={styles.imageshopMall}>
                   {
                     this.state.itemCategory && <FlatList
                     data={this.state.itemCategory}
                     removeClippedSubviews={true}
                     contentContainerStyle={{
                     alignItems:'center',margin: 5}}
                     horizontal={true}
                     ItemSeparatorComponent = {() => {return (<View style = {{width: 5}}/>)}}
                     automaticallyAdjustContentInsets={true}                  
                     extraData= {this.state}
                     showsHorizontalScrollIndicator={false}
                     keyExtractor={(item) => item.key}
                     renderItem={this._renderCategory}/>
                   }
                   {
                    !this.state.itemCategory && <View style={styles.wrapperSwiper}>
                    <Spinner color = '#e53935'/>
                    </View>
                   }
                   
                   </View>
                    </View>
                  <View style= {styles.wraper}>
                  <View style={styles.headerCaterory}>
                  <View style = {{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                  <Text style={styles.titleCategory}>Hot Sale</Text>
                  <Image style={{height: 35, width: 35, resizeMode: 'cover', marginLeft: 5}}source ={require('../../Image/sale.png')}/>
                  </View>
                   <TouchableNativeFeedback>
                    <View style = {{flexDirection: 'row'}}>
                    <Text style={styles.viewmore} note>Xem thêm</Text>
                    <Icon name = 'ios-arrow-forward' style = {{fontSize: 20, color : 'rgb(168, 20, 39)', marginLeft:2, alignSelf: 'center'}}/>
                    </View>
                   </TouchableNativeFeedback>
                   </View>
                   <View style ={styles.imageshopMall}>
                   {
                     this.state.itemHotShop &&   <FlatList
                     data={this.state.itemHotShop}
                     removeClippedSubviews={true}     
                     contentContainerStyle={{
                     alignItems:'center', margin:5}}       
                     horizontal={true}
                     ItemSeparatorComponent = {() => {return (<View style = {{width: 5,}}/>)}}
                     automaticallyAdjustContentInsets={true}                  
                     extraData= {this.state}
                     showsHorizontalScrollIndicator={false}
                     keyExtractor={(item) => item.key}
                     renderItem={this._renderHotSale}/>
                   }
                   {
                    !this.state.itemHotShop && <View style={styles.wrapperSwiper}>
                    <Spinner color = '#e53935'/>
                    </View>
                   }
                   </View>
                   {
                    this.state.itembanner && <Swiper
                     style = {styles.wrapperSwiper1}
                     dot={<View style={{backgroundColor: '#FFF', width: 10, height: 10, borderRadius: 7, marginLeft: 7, marginRight: 7}} />}
                       activeDot={<View style={{backgroundColor: '#e53935', width: 10, height: 10, borderRadius: 7, marginLeft: 7, marginRight: 7}} />}
                           autoplay={true}>
                            <Image source = {{uri: this.state.itembanner[0].image}} style={styles.slide1}></Image>
                            <Image source = {{uri: this.state.itembanner[1].image}} style={styles.slide1}></Image>
                            <Image source = {{uri: this.state.itembanner[2].image}} style={styles.slide1}></Image>                 
                        </Swiper>
                   }
                   {
                        !this.state.itembanner && <View style={styles.wrapperSwiper}>
                        <Spinner color = '#e53935'/>
                      </View>
                   }
                    </View>
                  <View style= {styles.wraper}>
                  <View style={styles.headerCaterory}>
                  <View style = {{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                  <Text style={styles.titleCategory}>New Shop</Text>
                  <Image style={{height: 35, width: 35, resizeMode: 'cover', marginLeft: 5}}source ={require('../../Image/new.png')}/>
                  </View>
                   <TouchableNativeFeedback>
                    <View style = {{flexDirection: 'row'}}>
                    <Text style={styles.viewmore} note>Xem thêm</Text>
                    <Icon name = 'ios-arrow-forward' style = {{fontSize: 20, color : 'rgb(168, 20, 39)', marginLeft:2, alignSelf: 'center'}}/>
                    </View>
                   </TouchableNativeFeedback>
                   </View>
                   <View  style ={styles.imageshopMall}>
                   {
                       this.state.itemNewShop && <FlatList
                       data={this.state.itemNewShop}
                       removeClippedSubviews={true}     
                       contentContainerStyle={{
                         margin: 5}}   
                       ItemSeparatorComponent = {() => {return (<View style = {{height: 5}}/>)}}
                       automaticallyAdjustContentInsets={true}                  
                       extraData= {this.state}
                       showsHorizontalScrollIndicator={false}
                       keyExtractor={(item) => item.key}
                       renderItem={this._renderNewShop}/>
                   }
                   {
                    !this.state.itemNewShop && <View style={styles.wrapperSwiper}>
                    <Spinner color = '#e53935'/>
                    </View>
                   }
                   </View>
                    </View>
                    <View style= {styles.wraper}>
                  <View style={styles.headerCaterory}>
                  <Text style={styles.titleCategory}>Gợi ý hôm nay</Text>
                   <TouchableNativeFeedback>
                    <View style = {{flexDirection: 'row'}}>
                    <Text style={styles.viewmore} note>Xem thêm</Text>
                    <Icon name = 'ios-arrow-forward' style = {{fontSize: 20, color : 'rgb(168, 20, 39)', marginLeft:2, alignSelf: 'center'}}/>
                    </View>
                   </TouchableNativeFeedback>
                   </View>
                   <View  style ={styles.imageshopMall}>
                   {
                     this.state.itemRecShop &&   <FlatList
                     data={this.state.itemRecShop}
                     removeClippedSubviews={true}     
                     contentContainerStyle={{
                     alignItems:'center', margin:5}}       
                     horizontal={true}
                     ItemSeparatorComponent = {() => {return (<View style = {{width: 5}}/>)}}
                     automaticallyAdjustContentInsets={true}                  
                     extraData= {this.state}
                     showsHorizontalScrollIndicator={false}
                     keyExtractor={(item) => item.key}
                     renderItem={this._renderRecommend}/>
                   }
                   {
                    !this.state.itemRecShop && <View style={styles.wrapperSwiper}>
                    <Spinner color = '#e53935'/>
                    </View>
                   }
                   </View>
                    </View>
                </Content>
            </Container>
            
        );
    }
}