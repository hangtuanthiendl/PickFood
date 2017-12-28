import React, { Component } from 'react';
import { View, FlatList, Image,TouchableOpacity,TextInput, ScrollView,ActivityIndicator, ImageBackground, TouchableWithoutFeedback,TouchableNativeFeedback } from 'react-native';
import { StyleProvider,Spinner,Container, Header, Item, Input, Icon, Button, Text, Body,Title, Left, Right,Content, Card, CardItem ,Thumbnail, List,ListItem } from 'native-base';
import styles from './styles'
import GetData from '../../Sever/getData'
import LinearGradient from 'react-native-linear-gradient';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
import {connect} from 'react-redux';
import firebase from 'react-native-firebase';
import Currency from '../../Util/Currency'
class History extends Component {
    constructor(props){
        super(props)
        this.state ={
            itemHistory: null,    
            name: null,
            image: null,
            address: null,  
            itemCategory: null,  

        }
    }
    componentDidMount() { 
        GetData.getHistoryCash(this.props.infouser.uid, (itemHistory) =>{
            
        })
        GetData.getHistoryCashAdd(this.props.infouser.uid, (itemHistory) =>{
            this.setState({
                itemHistory : itemHistory
            })
        })
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
        const color = this.checkColor(item.state)
        const nameState = this.checkState(item.state)
        return (
            <View>       
            <View style = {styles.renderItemHistory}>               
            <View style = {styles.marginLeftItem}>
            <Text numberOfLines = {1} style ={styles.titleHotSale}>{item.nameShop}</Text>
            <Text  numberOfLines = {1} style ={styles.titleadress}>{item.addressShop}</Text>
            </View> 
            <View style = {{height: undefined, width : undefined, alignSelf: 'center'}} >  
            <TouchableNativeFeedback onPress = {() => {this.props.navigation.navigate('DetailHistory', {keyHistory : item.key})}}>
            <Text note style = {styles.backgroundAdd} numberOfLines = {1}>Chi tiết</Text>
            </TouchableNativeFeedback>
            </View> 
            </View>
            <View>
                <View style = {{marginLeft: 5, flexDirection: 'row'}}>
                <View>
                <Text style = {styles.titleinfo}>{'Mã đặt hàng: '}</Text>
                <Text style = {styles.titleinfo}>{'Ngày đặt: '}</Text>
                <Text style = {styles.titleinfo}>{'Ngày giao: ' }</Text>
                <Text style = {styles.titleinfo}>{'Tổng số tiền: ' }</Text>
                <Text style = {styles.titleinfo}>{'Thanh toán: ' }</Text>
                </View>
                <View style = {{marginLeft: 5}}>
                <Text style = {styles.titledetail}>{item.key}</Text>
                <Text style = {styles.titledetail}>{item.timein}</Text>
                <Text style = {styles.titledetail}>{item.timeout}</Text>
                <Text style = {styles.titledetail}>{Currency.convertNumberToCurrency(item.total) + 'đ'}</Text>
                <Text style = {styles.titledetail}>{item.method}</Text>
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
             </View>
        );
    }
    render() {
        console.log(this.state.itemHistory)        
        return (
            <Container style = {styles.container}>
                <Header androidStatusBarColor = 'rgb(184, 47, 64)' style = {{backgroundColor: 'rgb(184, 47, 64)', justifyContent: 'space-between'}}>
                    <View style = {styles.containerLogo}>
                        <Title style = {{textAlign: 'center', alignSelf: 'center',  color: '#FFF'}}>Lịch sử đặt hàng</Title>
                    </View>
                </Header>
                <Content   showsVerticalScrollIndicator={false}>
                    <View>
                        {
                            this.state.itemHistory && <FlatList
                            data = {this.state.itemHistory}
                            contentContainerStyle={{
                                marginBottom: 5}}   
                            ItemSeparatorComponent = {() => {return (<View style = {{height: 5}}/>)}}
                            renderItem={this._renderItem} 
                            removeClippedSubviews={true}
                            extraData= {this.state}                             
                            showsVerticalScrollIndicator ={false}
                            keyExtractor={(item) => item.key} />   
                        }
                        {
                            !this.state.itemHistory && <View style={styles.loadingCategory}>
                             <Text style = {styles.titleNull}>Chưa có đơn hàng nào</Text>
                          </View>        
                        }                       
                    </View>                                          
                </Content>     
                          
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
)(History)