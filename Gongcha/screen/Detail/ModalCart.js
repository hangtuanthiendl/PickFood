import React, { Component } from 'react';
import { View, StyleSheet, FlatList, Image} from 'react-native';
import { Badge,Spinner,Container, Header, Item, Input, Icon, Separator,Button, Text, Body,Title, Left, Right,Content, Card, CardItem ,Thumbnail, List,ListItem, Footer,FooterTab, Radio, CheckBox   } from 'native-base';
import {connect} from 'react-redux'
import GetData from '../../Sever/getData'
import styles from './styles'
import Currency from '../../Util/Currency'
import moment from 'moment';
class ModalCart extends Component {
    constructor(props){
        super(props)
        this.state = {
            dataCart: [],
            dataKey: [],
            detailCart: null,
            totalPrice: '',
            itemInfo: null,
            dataTest: null
        }
    }
    componentDidMount(){
        const {params} = this.props.navigation.state;                                 
        GetData.getDataCart(params.keyItemShop,this.props.infouser.uid, (dataCart)=>{
            var arrayKey = [];
            var arrayPrice = [];
            const reducer = (accumulator, currentValue) => accumulator + currentValue;
            var totalPrice
            if (dataCart != 0) {
                dataCart.forEach(e =>{
                    arrayPrice.push(parseInt(e.total))
                    arrayKey.push(e.key)
                  })         
                  totalPrice = arrayPrice.reduce(reducer)                   
            }
            this.setState({
                dataCart: dataCart,
                totalPrice: totalPrice,
            })
        })
       
    }
    componentWillUnmount(){
        this.setState({
            dataCart: [],
            totalPrice: '',
            dataKey : []
        })
    }
    onCash = () =>{
        const {params} = this.props.navigation.state;                         
        let now = new Date()
        let callback = {
            total: this.state.totalPrice,
            nameShop: params.nameItemShop,
            addressShop: params.addressItemShop,            
            keyShop: params.keyItemShop,
            state: 0,
            timein : moment(now).format("DD/MM/YYYY hh:mm:ss"),
            timeout : moment(now).format("DD/MM/YYYY hh:mm:ss"),            
            detail: this.state.dataCart,
            method: 'Tiền mặt'
        }
        GetData.saveDataCash(this.props.infouser.uid, callback)
        GetData.removeCartItem(params.keyItemShop,this.props.infouser.uid)        
        this.props.navigation.goBack()
   }
    _renderItemCart = ({item}) => { 
        return (
            <View style = {{backgroundColor: '#FFF' , flexDirection: 'row'}}>                               
            <View style = {{marginLeft: 5, flex: 1}}>
            <Text numberOfLines = {1} style ={styles.titleHotSale}>{item.nameItem +' x' + item.value + '=' + Currency.convertNumberToCurrency((item.valueProduct*item.value)) +'đ' }</Text>
            <Text numberOfLines = {1} style ={styles.titleadress}>{item.ice +', ' + item.sugar + ', '+ item.size}</Text>
            <View>
                  {item.info != null ? (item.info.map((e, i) => <Text note key={"key"+i}
                   numberOfLines = {1}>{e.name + ' x1' + ' = ' + Currency.convertNumberToCurrency(e.price) + 'đ'}</Text>)) : null}
              </View>
             </View>
             <Text note style = {styles.backgroundPrice1}>{'Tổng: '+Currency.convertNumberToCurrency(item.total) +'đ'}</Text>                     
           </View>      
        );
      }
    render() {
      //  console.log('Data Test', this.state.dataTest)
        return (
            <Container style = {styles.modalContent}>
            <Header androidStatusBarColor = "rgb(184, 47, 64)"  style={{backgroundColor: '#ecf0f1', }}>
            <Left>
             <Thumbnail square size={80} source={{ uri : this.props.infouser.photoURL} } />
             </Left>
             <Body>
                 <Text numberOfLines = {1}>{this.props.infouser.displayName}</Text>
               </Body>
             <Right>
                 <Button transparent onPress = {() =>this.props.navigation.goBack()}>
                 <Icon name = 'md-close' style = {{fontSize: 25, color : '#e53935'}}/>
                 </Button>
             </Right>
            </Header>
            <Content>
              {
                  this.state.dataCart && <FlatList
                data = { this.state.dataCart}
                renderItem={this._renderItemCart} 
                ItemSeparatorComponent = {() => {return (<View style = {{height: 5}}/>)}}
                removeClippedSubviews={true}
                extraData= {this.state}                             
                showsVerticalScrollIndicator ={false}
                keyExtractor={(item) => item.key} />  
              }  
            </Content>  
            <Footer style = {{backgroundColor : '#ecf0f1', height: 50}}>    
             {
                 this.state.dataCart.length != 0 ? <Button onPress ={this.onCash} iconLeft style = {{alignSelf: 'center', justifyContent: 'space-between', backgroundColor: '#54A8DD',flexDirection: 'row'}}  >
                 <Icon name='md-basket' style = {{fontSize: 25, color: '#FFF'}}/>
                    <Text style = {{fontSize: 15, color:'#FFF'}}>Thanh toán</Text>
                <Text style = {{fontSize: 15, color:'#FFF'}}>{Currency.convertNumberToCurrency(this.state.totalPrice) + 'VNĐ'}</Text>
            </Button> : null
             }
           </Footer>        
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
)(ModalCart)