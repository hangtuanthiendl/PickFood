import React, { Component } from 'react';
import {Dimensions,TouchableNativeFeedback,ToolbarAndroid,LayoutAnimation,View, TouchableOpacity, TextInput, Image, FlatList,StyleSheet, ScrollView,ImageBackground, TouchableHighlight} from 'react-native';
import styles from './styles';
import Swiper from 'react-native-swiper';
import GetData from '../../Sever/getData';
import ActionButton from 'react-native-action-button';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
import Modal from 'react-native-modal'
import ModalShop from './ModalShop';
import ModalCart from './ModalCart';
import TitleShop from './TitleShop';
import Category from './Category';
import TabNavigator from 'react-native-tab-navigator';
import LinearGradient from 'react-native-linear-gradient';
import Menu from './Menu';
import TabMenu from './TabMenu';
const UIManager = require('UIManager');
//import Icon from 'react-native-vector-icons/Ionicons'
import {
  AppBarLayout,
  CoordinatorLayout,
  CollapsingToolbarLayout,
  CollapsingParallax,
} from 'react-native-collapsing-toolbar'
import NestedScrollView from 'react-native-nested-scroll-view';
import { Col, Row, Grid } from "react-native-easy-grid";
const {height, width} = Dimensions.get('window');
import {connect} from 'react-redux';
import { Icon,StyleProvider ,Badge,Spinner,Container, Header, Item, Input, Separator,Button, Text, Body,Title, Left, Right,Content, DeckSwiper,Card, CardItem ,Thumbnail, List,ListItem, Footer, Radio, CheckBox, Tab, Tabs,TabHeading, Form, Picker   } from 'native-base';
import configureStore from '../../Redux/Store/configStore';
const HEADER_HEIGHT = 250
class Detail extends Component {
    constructor(props){
        super(props)
        this.state = {
            itemshop: null,
            keyshop: null,
            name: null,
            image:null,
            address: null,
            phone: null,
            time:null,
            value: null,
            isActionButtonVisible: false,
            isModalShopVisible: false,
            isModalCartVisible: false,            
            icon: null,
            itembanner: null,
            categoryShop: null,
            itemRecShop: null,
            dataCart: null,
            
        }
        _listViewOffset = 1               
    }
    componentDidMount(){
        const {params} = this.props.navigation.state;         
        GetData.getDetailShop(params.data,(itemshop) => {
            this.setState({
                keyshop: params.data,
                name : itemshop.nameShop,
                image: itemshop.imageShop,
                address: itemshop.addressShop,
                phone: itemshop.phoneShop,
                time: itemshop.timeShop,
                categoryShop: itemshop.categoryShop
            })   
            console.log("sadasdasda", this.state.keyshop)    
        })
        GetData.getItemMall((itembanner) => {
            this.setState({
                itembanner: itembanner
            })
        })
        GetData.getItemByCategoryShop(params.categoryShop,(itemRecShop)=>{
            this.setState({
                itemRecShop: itemRecShop
            })

        })
    }
        _showModalCart = () => this.setState({ isModalCartVisible: true })
        _hideModalCart = () =>  this.setState({ isModalCartVisible: false })
        
        _onScroll = (event) => {
            // Simple fade-in / fade-out animation
            const CustomLayoutLinear = {
              duration: 100,
              create: { type: LayoutAnimation.Types.linear, property: LayoutAnimation.Properties.opacity },
              update: { type: LayoutAnimation.Types.linear, property: LayoutAnimation.Properties.opacity },
              delete: { type: LayoutAnimation.Types.linear, property: LayoutAnimation.Properties.opacity }
            }
            // Check if the user is scrolling up or down by confronting the new scroll position with your own one
            const currentOffset = event.nativeEvent.contentOffset.y
            const direction = (currentOffset > 0 && currentOffset > this._listViewOffset)
              ? 'down'
              : 'up'
            // If the user is scrolling down (and the action-button is still visible) hide it
            const isActionButtonVisible = direction === 'up'
            if (isActionButtonVisible !== this.state.isActionButtonVisible) {
              LayoutAnimation.configureNext(CustomLayoutLinear)
              this.setState({ isActionButtonVisible })
            }
            // Update your scroll position
            this._listViewOffset = currentOffset
          }
          _renderRecommend = ({item})=>{
            return (
                <TouchableNativeFeedback onPress = {() => {this.props.navigation.navigate('Detail', {data : item.key, categoryShop: item.categoryShop})}}>
                    <View  removeClippedSubviews={true} style = {styles.containerRecommend}>
                    <Image source={{uri: item.imageShop}} style={styles.imageRecommend}>
                   </Image> 
                   <View style = {{flex: 1}}>
                   <Text numberOfLines = {1} style ={styles.titleHotSale}>{item.nameShop}</Text>
                   <Text  numberOfLines = {1} style ={styles.titleadress}>{item.address}</Text>
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
        const {navigate} = this.props.navigation;
        return (
            <StyleProvider style ={getTheme(material)}>    
            <Container style = {styles.container}>   
            <Header androidStatusBarColor = 'rgb(184, 47, 64)' style = {{backgroundColor: 'rgb(184, 47, 64)'}}>
            <View style= {{justifyContent: 'space-between', flexDirection: 'row', flex: 1}}>
                    <View style = {styles.containerLogo}>
                        <Title style = {{textAlign: 'center', alignSelf: 'center', color: '#FFF'}}>{this.state.name}</Title>
                    </View>
                    <Right style = {{height: undefined, width: undefined}}>
                    <Button transparent onPress = {() => this.props.navigation.goBack()}>
                    <Icon name= 'md-close' style = {{fontSize: 25,  color: '#FFF',  alignSelf: 'center'}}/>
                    </Button>
            </Right>
            </View> 
            </Header> 
            <Content showsVerticalScrollIndicator={false} onScroll = {this._onScroll}>
            <View>
            <ImageBackground source={{uri: this.state.image}} style={styles.imageBackground}>
                <LinearGradient colors={['rgba(0, 0, 0, 0.2)', 'rgba(0,0,0, 0.2)', 'rgba(0,0,0, 0.7)']}  style={styles.linearGradient}>             
                </LinearGradient>
                </ImageBackground>  
             <View style= {styles.wraper}>
             <Tabs locked>
             <Tab heading={ <TabHeading><Icon name="ios-restaurant-outline" /><Text>Thông tin</Text></TabHeading>}>
            <View style= {styles.wraper}>
            <ImageBackground source ={{uri: this.state.image}} style= {styles.wraper1}>
            <LinearGradient  colors={['rgba(0, 0, 0, 0.5)', 'rgba(0,0,0, 0.5)', 'rgba(0,0,0, 0.3)']}  style={styles.wraper1}>
            <TitleShop name = {this.state.name} address = {this.state.address} phone = {this.state.phone} time =  {this.state.time} />  
             </LinearGradient> 
            </ImageBackground>
            </View>
             </Tab>
             <Tab heading={ <TabHeading><Icon name="ios-pricetags-outline"  /><Text>Khuyến mãi</Text></TabHeading>}>
             <View style= {styles.wraper}>
             <ImageBackground source ={{uri: this.state.image}} style= {styles.wraper1}>
             <LinearGradient  colors={['rgba(0, 0, 0, 0.5)', 'rgba(0,0,0, 0.5)', 'rgba(0,0,0, 0.3)']}  style={styles.wraper1}>
             <Text style = {{color: 'white', fontSize: 20, alignSelf: 'center'}}>Chưa có chương trình khuyến mãi nào</Text>
             </LinearGradient> 
             </ImageBackground>            
              </View>
             </Tab>
             <Tab heading={ <TabHeading><Icon name="ios-reverse-camera-outline"  /><Text>Hình ảnh</Text></TabHeading>}>
             <View style= {styles.wraper}>
            {
                this.state.itemRecShop && <DeckSwiper
                dataSource={this.state.itemRecShop}
                    renderItem={item =>
                    <Card>
                        <TouchableNativeFeedback>
                        <Image style={{ height: 250, flex: 1 }} source={{uri : item.imageShop}}/>
                        </TouchableNativeFeedback>
                    </Card>
                    }
                />
               }
               {
                    !this.state.itemRecShop && <View style={styles.wrapperSwiper}>
                    <Spinner color = '#e53935'/>
                  </View>
               }
            </View>
             </Tab>
         </Tabs>
               </View>
               <View style ={{flex: 1 , marginTop: 5}}>
               <View style={styles.headerCateroryDetail}>
               <View style = {{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
               <Text style={styles.viewmore}>Thực đơn</Text>
               <Image style={{height: 30, width: 30, resizeMode: 'cover', marginLeft: 5}}source ={require('../../Image/menu.png')}/>
               </View>
               </View>
               {
                   this.state.categoryShop === 'Thức uống' ? (<TabMenu keyItemShop = {this.state.keyshop} navigation = {this.props.navigation}/>) : (<View style={styles.loadingCategory}>
                     <Text style = {styles.titleNull}>Chưa có thực đơn</Text>
                     </View>)
               }
               </View>  
               <View style ={{flex: 1 , marginTop: 5}}>
               <View style={styles.headerCateroryDetail}>
               <View style = {{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
               <Text style={styles.viewmore}>Cửa hàng liên quan</Text>
               <Image style={{height: 30, width: 30, resizeMode: 'cover', marginLeft: 5}}source ={require('../../Image/recommended.png')}/>
               </View>
               </View>
                    {
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
               }
               </View>  
            </View> 
            
            </Content>  
            {this.state.isActionButtonVisible ?
                <ActionButton buttonColor = 'rgb(168, 20, 39)'
                 onPress = {() => this.props.navigation.navigate('ModalCart',{keyItemShop : this.state.keyshop, nameItemShop: this.state.name, addressItemShop: this.state.address})}
                 icon = {<Icon name="md-basket" style = {{fontSize: 25, color: '#FFFFFF'}} />}
                /> : null}
           </Container>
           </StyleProvider>
        );
    }
}
function mapStateToProps (state) {
	return {
        infouser: state.infouser,
	}
}

export default connect(
	mapStateToProps,
)(Detail)
