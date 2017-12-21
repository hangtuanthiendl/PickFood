import React, { Component } from 'react';
import { View, Image, TouchableHighlight, TouchableNativeFeedback, ImageBackground, FlatList} from 'react-native';
import Swiper from 'react-native-swiper';
import {Container, Content,Spinner,Icon,Text} from 'native-base';
import GetData from '../../Sever/getData';
import styles from './styles';
import SearchBar from '../../SearchBar';
import LinearGradient from 'react-native-linear-gradient';
import antrua from '../../Image/antrua.jpg'
//import Rating  from 'react-native-ratings';
export default class MainRouter extends Component {
    constructor(props){
        super(props)
        this.state = {
            itembanner: null,
            itemCategory:null,
            itemshop: null
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
        GetData.getShopItem((itemshop) => {
            this.setState({
                itemshop: itemshop
            })
        })
    }
    _renderCategory = ({item})=>{
        return (
            <TouchableNativeFeedback>
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
                <View style = {{backgroundColor : 'rgba(255, 255, 255,0.6)'}}>
                    <Text numberOfLines ={1} style = {styles.titleNote}>Sale 50%</Text>
                </View>
               </ImageBackground> 
               <Text style ={styles.titleHotSale}>{item.nameItem}</Text>
               <Text  numberOfLines = {1} style ={styles.titleadress}>{item.nameItem}</Text>
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
    _renderRecommend = ({item})=>{
        return (
            <TouchableNativeFeedback>
                <View           removeClippedSubviews={true} style = {styles.containerRecommend}>
                <Image source={{uri: item.imageItem}} style={styles.imageRecommend}>
               </Image> 
               <View >
               <Text style ={styles.titleHotSale}>{item.nameItem}</Text>
               <Text  numberOfLines = {1} style ={styles.titleadress}>{item.nameItem}</Text>
               <View style = {{flex: 1,flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
               <View style = {{flexDirection: 'row', alignItems: 'center'}}>
                   <Icon name = 'ios-heart-outline' style ={{fontSize: 15, color: 'grey',  paddingRight: 5}} />
                   <Text  numberOfLines = {1} style ={{ alignSelf: 'center', fontSize: 10,
                fontStyle: 'normal'}}>(180)</Text>
               </View>
               <View style = {{flexDirection: 'row' , alignItems: 'center'}}>
             
                <Text  numberOfLines = {1} style ={{ alignSelf: 'center', fontSize: 10,
                fontStyle: 'normal'}}>(180)</Text>
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
                <SearchBar name = 'Pick Food' icon = 'ios-search'/>
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
                     this.state.itemCategory &&   <FlatList
                     data={this.state.itemCategory}
                     removeClippedSubviews={true}     
                     contentContainerStyle={{
                     alignItems:'center', margin:5}}       
                     horizontal={true}
                     ItemSeparatorComponent = {() => {return (<View style = {{width: 5}}/>)}}
                     automaticallyAdjustContentInsets={true}                  
                     extraData= {this.state}
                     showsHorizontalScrollIndicator={false}
                     keyExtractor={(item) => item.key}
                     renderItem={this._renderHotSale}/>
                   }
                   {
                    !this.state.itemCategory && <View style={styles.wrapperSwiper}>
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
                       renderItem={this._renderNewShop}/>
                   }
                   {
                    !this.state.itemshop && <View style={styles.wrapperSwiper}>
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
                     this.state.itemCategory &&   <FlatList
                     data={this.state.itemCategory}
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
                    !this.state.itemCategory && <View style={styles.wrapperSwiper}>
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