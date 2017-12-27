import React, { Component } from 'react';
import {ToolbarAndroid,LayoutAnimation,View, TouchableOpacity, TextInput, Image, FlatList,StyleSheet, ScrollView,ImageBackground, TouchableHighlight} from 'react-native';
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
import Icon from 'react-native-vector-icons/Ionicons'
import {
  AppBarLayout,
  CoordinatorLayout,
  CollapsingToolbarLayout,
  CollapsingParallax,
} from 'react-native-collapsing-toolbar'
import NestedScrollView from 'react-native-nested-scroll-view'
import { StyleProvider ,Badge,Spinner,Container, Header, Item, Input, Separator,Button, Text, Body,Title, Left, Right,Content, Card, CardItem ,Thumbnail, List,ListItem, Footer, Radio, CheckBox, Tab, Tabs,TabHeading, Form, Picker   } from 'native-base';
import configureStore from '../../Redux/Store/configStore';
const HEADER_HEIGHT = 250
export default class Detail extends Component {
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
            categoryShop: null
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
        GetData.getBanner((itembanner) => {
            this.setState({
                itembanner: itembanner
            })
        })
        Icon.getImageSource('md-close', 24, '#ffffff').then((source) => {
            this.setState({ icon: source })
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
    render() {
        const {navigate} = this.props.navigation;
        return (
            <StyleProvider style ={getTheme(material)}>
            <Container style = {styles.container}>
            {
                this.state.icon && <CoordinatorLayout>
                <AppBarLayout onOffsetChanged={this.handleOffsetChanged} style={styles.appbar}>
                <CollapsingToolbarLayout
                titleEnable= {true}
                title={this.state.name}
                contentScrimColor='#B62E41'
                expandedTitleColor='white'
                collapsedTitleTextColor='white'
                expandedTitleGravity='BOTTOM'
                scrimVisibleHeightTrigger={100}
                scrimAnimationDuration={400}
                expandedTitleMarginStart={25}
                expandedTitleMarginBottom={22}
                  scrollFlags={
                      AppBarLayout.SCROLL_FLAG_SCROLL
                    | AppBarLayout.SCROLL_FLAG_EXIT_UNTIL_COLLAPSED
                    | AppBarLayout.SCROLL_FLAG_SNAP}>
                  <CollapsingParallax parallaxMultiplier={0.6}>
                    <View collapsable={false} style = {styles.parallaxView}>
                    <ImageBackground source={{uri: this.state.image}} style={styles.imageBackground}>
                    <LinearGradient colors={['rgba(0, 0, 0, 0.2)', 'rgba(0,0,0, 0.2)', 'rgba(0,0,0, 0.7)']}  style={styles.linearGradient}>             
                    </LinearGradient>
                    </ImageBackground>
                    </View>
                  </CollapsingParallax>
                  <ToolbarAndroid
                   // titleColor = '#FFF'
                    navIcon = {this.state.icon}
                    onIconClicked = {() => this.props.navigation.goBack()}
                   // actions={[{title: 'Settings'}]}
                  />
                </CollapsingToolbarLayout>
              </AppBarLayout>
              <NestedScrollView onScroll = {this._onScroll}>
                  <TitleShop name = {this.state.name} address = {this.state.address} phone = {this.state.phone} time =  {this.state.time} />  
                    <View style= {styles.wraper}>
                    <View style={styles.headerCateroryDetail}>
                    <Text style={styles.viewmore}>Hình Ảnh</Text>
                     <TouchableHighlight>
                     <Icon name = 'md-add-circle' style = {{fontSize: 25, color : 'rgb(168, 20, 39)'}}/>
                     </TouchableHighlight>
                     </View>
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
                      </View>
                      <View style ={{flex: 1 , marginTop: 5}}>
                      <View style={styles.headerCateroryDetail}>
                      <Text style={styles.viewmore}>Thực Đơn</Text>
                      <TouchableHighlight>
                      <Icon name='md-menu' style ={{fontSize: 25, color: 'rgb(168, 20, 39)'}}/>
                      </TouchableHighlight>
                      </View>
                      {
                          this.state.categoryShop === 'Thức uống' ? (<TabMenu keyItemShop = {this.state.keyshop} navigation = {this.props.navigation}/>) : (<View style={styles.loadingCategory}>
                            <Text style = {styles.titleNull}>Chưa có thực đơn</Text>
                            </View>)
                      }
                      </View>                         
             </NestedScrollView>
            </CoordinatorLayout>
            }
             {this.state.isActionButtonVisible ?
                <ActionButton buttonColor = 'rgb(168, 20, 39)'
                 onPress = {() => this.props.navigation.navigate('ModalCart',{keyItemShop : this.state.keyshop, nameItemShop: this.state.name, addressItemShop: this.state.address})}
                icon = { <Icon name="md-basket" style = {{fontSize: 25, color: '#FFFFFF'}} />} /> : null}
           </Container>
            </StyleProvider>
        );
    }
}

