import React, { Component } from 'react';
import { AppState,View, FlatList, Image,TouchableOpacity,TextInput, ScrollView,ActivityIndicator, ImageBackground, TouchableWithoutFeedback,TouchableNativeFeedback } from 'react-native';
import { StyleProvider,Spinner,Container, Header, Item, Input, Icon, Button, Text, Body,Title, Left, Right,Content, Card, CardItem ,Thumbnail, List,ListItem, Footer, FooterTab } from 'native-base';
import styles from './styles'
import GetData from '../../Sever/getData'
import LinearGradient from 'react-native-linear-gradient';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
import { Rating } from 'react-native-elements';
import {connect} from 'react-redux';
import firebase from 'react-native-firebase';
import PushNofication from './PushNofication';
import PushNotification from 'react-native-push-notification';
import Currency from '../../Util/Currency'
class DetailHistory extends Component {
    constructor(props){
        super(props)
        this.state ={
            itemHistory: null,
            idItem: null,    
            nameItem: null,
            timeIn: null,
            state: null,
            total: '',
            checkout: null, 
            listItemHistory: null,
            seconds: 2
        }
        this.handleAppStateChange = this.handleAppStateChange.bind(this);        
    }
    componentDidMount() { 
        const {params} = this.props.navigation.state;                                 
        GetData.getHistoryCashChange(this.props.infouser.uid, params.keyHistory, (itemHistory) =>{
            this.setState({
                idItem : params.keyHistory,
                nameItem : itemHistory.nameShop,
                timeIn : itemHistory.timein,
                state : itemHistory.state,
                total : itemHistory.total,
                checkout : itemHistory.method,
                listItemHistory: itemHistory.detail
            })
        })
        AppState.addEventListener('change', this.handleAppStateChange);
    }
      componentWillUnmount() {
        AppState.removeEventListener('change', this.handleAppStateChange);
      }
    
      handleAppStateChange(appState) {
        if (appState = 'background'){
            this.checkNofication()
        }
}
      checkNofication(){
        if(this.state.state === 1){
            let date = new Date(Date.now() + (this.state.seconds * 1000));
            PushNotification.localNotification({
              id: '1',
              title: 'Thông báo',
              message: "Đơn hàng của bạn đã được xác nhận",
              date,
            });
            PushNotification.cancelLocalNotifications({id: '2'});

          } else if (this.state.state === 2){
            let date = new Date(Date.now() + (this.state.seconds * 1000));
            PushNotification.localNotification({
              id:'2',
              title: 'Thông báo',
              message: "Mời bạn đến quầy nhận hàng",
              date,
            });
            PushNotification.cancelLocalNotifications({id: '1'});
        }
      }
      checkState(state){
        switch(state){
            case 0: return 'Chờ xác nhận'
            case 1: return 'Đã xác nhận'
            case 2: return 'Đã nhận hàng'
            case 3: return 'Đã hủy'
        }
    }
    checkColor(color){
        switch(color){
            case 0: return 'grey'
            case 1: return '#039BE5'
            case 2: return '#2ecc71'
            case 3: return '#c0392b'
        }
    }
    _renderItem = ({item})=>{
        return (
                <View style = {{backgroundColor: '#FFF' , flexDirection: 'row'}}>                               
               <View style = {{marginLeft: 5, flex: 1}}>
               <Text numberOfLines = {1} style ={styles.titleHotSale}>{item.nameItem +' x' + item.value + '=' + Currency.convertNumberToCurrency((item.valueProduct*item.value)) +'đ' }</Text>
               <Text numberOfLines = {1} style ={styles.titleadress}>{item.ice +',' + item.size + ','+ item.sugar}</Text>
               <View>
                     {item.info != null ? (item.info.map((e, i) => <Text note key={"key"+i}
                      numberOfLines = {1}>{e.name + ' x1' + ' = ' + Currency.convertNumberToCurrency(e.price) + 'đ'}</Text>)) : null}
                 </View>
                </View>
                <Text note style = {styles.backgroundPrice}>{'Tổng: '+Currency.convertNumberToCurrency(item.total) +'đ'}</Text>                     
                 </View>
        );
    }
    render() {
        const {idItem , timeIn, checkout, nameItem, state, total} = this.state 
        const color = this.checkColor(state)
        const nameState = this.checkState(state)
        return (
            <Container style = {styles.container}>
                <Header androidStatusBarColor = 'rgb(184, 47, 64)' style = {{backgroundColor: 'rgb(184, 47, 64)', justifyContent: 'space-between'}}>
                    <View style = {styles.containerLogo}>
                        <Title style = {{textAlign: 'center', alignSelf: 'center', color: '#FFF'}}>{nameItem}</Title>
                    </View>
                    <TouchableNativeFeedback onPress = {() => this.props.navigation.goBack()}>
                    <Icon name= 'md-close' style = {{fontSize: 25,  color: '#FFF',  alignSelf: 'center'}}/>
                    </TouchableNativeFeedback>
                </Header>
                <Content   showsVerticalScrollIndicator={false}>
                <View style = {{ backgroundColor: '#E8E3E8'}}>
                <View style = {styles.renderItemHistory}>
                <View style = {{marginLeft: 5, flexDirection: 'row'}}>
                <View>
                <Text style = {styles.titleinfo}>{'Mã đặt hàng: '}</Text>
                <Text style = {styles.titleinfo}>{'Ngày đặt: '}</Text>
                <Text style = {styles.titleinfo}>{'Thanh toán: ' }</Text>
                </View>
                <View style = {{marginLeft: 5}}>
                <Text style = {styles.titledetail}>{idItem}</Text>
                <Text style = {styles.titledetail}>{timeIn}</Text>
                <Text style = {styles.titledetail}>{checkout}</Text>
                </View>
                </View>
                </View>
                <View style = {styles.infoUser}>
                <Thumbnail small source={{uri: this.props.infouser.photoURL}}/>
                <View style = {styles.marginLeftItem}>
                <Text>{this.props.infouser.displayName}</Text>
                <Text note style = {{color}}>{nameState}</Text>
                </View>
                </View>
                </View> 
                        {
                            this.state.listItemHistory && <FlatList
                            data = {this.state.listItemHistory}
                            renderItem={this._renderItem} 
                            ItemSeparatorComponent = {() => {return (<View style = {{height: 5}}/>)}}
                            
                            removeClippedSubviews={true}
                            extraData= {this.state}                             
                            showsVerticalScrollIndicator ={false}
                            keyExtractor={(item) => item.key} />   
                        }
                        {
                            !this.state.listItemHistory && <View style={styles.loadingCategory}>
                             <Spinner color = '#e53935'/>
                          </View>        
                        }                       
                </Content>   
                <Footer style = {{backgroundColor : 'rgb(84, 168, 221)', height: undefined}}>    
                <Text style = {{fontSize: 18, color:'#FFF'}}>{'Tổng cộng: '+Currency.convertNumberToCurrency(total) + 'đ'}</Text>
           </Footer>        
             <PushNofication/> 
            </Container>   
        );
    }
}

function mapStateToProps (state) {
	return {
        infouser: state.infouser,
        inforitemshop: state.inforitemshop        
	}
}
function mapDispatchToProps (dispatch) {
	return{
		dispatchInfoUserUpdate: (infouser) => dispatch(infUserUpdate(infouser)),
	}
}
export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(DetailHistory)